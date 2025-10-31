#!/bin/bash

# DRAGEN Provisioning Script
# Automates setup of Illumina Connected Annotations for DRAGEN
# Refer to getting-started-dragen.md for details

set -e

# ============================================================================
# Configuration and Constants
# ============================================================================
YEAR=$(date +"%Y")
VERSION="1.0.0"
CONFIG_DIR="$HOME/.ilmnAnnotations"
SAVED_CONFIG_FILE="$CONFIG_DIR/last_config.json"
DEFAULT_CREDENTIALS_FILE="$CONFIG_DIR/credentials.json"

# DRAGEN paths
RESOURCES_DIR="resources/annotation"
DATAMANAGER_PATH="share/nirvana/DataManager"
DRAGEN_INFO_PATH="bin/dragen_info"

# User inputs (populated from CLI args or prompts)
DRAGEN_INSTALL_PATH=""
DATA_DIRECTORY=""
ASSEMBLIES=()
ANNOTATION_TYPES=()
CREDENTIAL_TYPE=""
CREDENTIALS_FILE=""
API_KEY=""
API_SECRET=""
LIC_CREDENTIALS_FILE=""
DRY_RUN=false
NON_INTERACTIVE=false

# ============================================================================
# Utility Functions
# ============================================================================

print_header() {
    echo ""
    echo "==========================================================================="
    echo "$1"
    echo "==========================================================================="
    echo ""
}

print_section() {
    echo ""
    echo "---------------------------------------------------------------------------"
    echo "$1"
    echo "---------------------------------------------------------------------------"
}

print_info() {
    echo "[INFO] $1"
}

print_warning() {
    echo "[WARNING] $1"
}

print_error() {
    echo "[ERROR] $1" >&2
}

error_exit() {
    print_error "$1"
    exit "${2:-1}"
}

# ============================================================================
# Help and Usage
# ============================================================================

show_usage() {
    cat << EOF
DRAGEN Provisioning Script v${VERSION}

Automates setup of Illumina Connected Annotations for DRAGEN:
  1. Configure credentials (on-premise or cloud)
  2. Download annotation data files
  3. Prepare environment for variant annotation

USAGE:
  $0 [options]

MODES:
  Interactive:  Run without arguments for guided setup
  CLI:          Provide all required arguments for automation

OPTIONS:
  --dragen-path <path>          Path to DRAGEN installation
  --data-dir <path>             Directory for annotation data
  --assemblies <list>           Comma-separated: GRCh37,GRCh38 (default: both)
  --annotation-types <list>     Comma-separated: all,germline_tagging,tmb
  --credentials-file <path>     Path to credentials.json
  --lic-credentials <path>      Path to DRAGEN license credentials (cloud)
  --api-key <key>               Cloud API key (user_id)
  --api-secret <secret>         Cloud API secret (password)
  --dry-run                     Show actions without downloading
  --non-interactive             Fail if required info is missing
  --help                        Show this help

ANNOTATION TYPES:
  all                - Full variant annotation
  germline_tagging   - Germline tagging only
  tmb                - Tumor Mutational Burden

EXAMPLES:
  # Interactive setup
  $0

  # Automated on-premise setup
  $0 --dragen-path /opt/dragen/4.4.3 --data-dir /data/nirvana_data

  # Cloud setup with license file
  $0 --dragen-path /opt/edico --data-dir /data/nirvana_data \
     --lic-credentials /path/to/lic_credentials

  # Dry run
  $0 --dragen-path /opt/dragen/4.4.3 --data-dir /data/nirvana_data --dry-run

  # Specific assemblies and types
  $0 --dragen-path /opt/dragen/4.4.3 --data-dir /data/nirvana_data \
     --assemblies GRCh38 --annotation-types all,tmb

EOF
    exit 0
}

# ============================================================================
# Configuration Management
# ============================================================================

ensure_config_dir() {
    if [[ ! -d "$CONFIG_DIR" ]]; then
        print_info "Creating configuration directory: $CONFIG_DIR"
        mkdir -p "$CONFIG_DIR" || error_exit "Failed to create config directory"
    fi
}

# ============================================================================
# Interactive Helpers
# ============================================================================

handle_exit_request() {
    if prompt_yes_no "Are you sure you want to exit?"; then
        echo "Setup cancelled by user"
        exit 0
    fi
    return 1  # Continue prompting
}

prompt_yes_no() {
    local prompt="$1"
    local response
    
    while true; do
        read -r -p "$prompt [y/n]: " response
        case "$response" in
            [Yy]|[Yy][Ee][Ss]) return 0 ;;
            [Nn]|[Nn][Oo]) return 1 ;;
            *) echo "Please answer yes or no." ;;
        esac
    done
}

prompt_input() {
    local prompt="$1"
    local default="$2"
    local response
    
    if [[ -n "$default" ]]; then
        read -r -p "$prompt [$default]: " response
        echo "${response:-$default}"
    else
        read -r -p "$prompt: " response
        echo "$response"
    fi
}

prompt_multiselect() {
    local prompt="$1"
    local default_behavior="$2"  # "all" or "required"
    shift 2
    local options=("$@")
    local selected=()
    
    # Output prompts to stderr so they don't interfere with result capture
    echo "$prompt" >&2
    for i in "${!options[@]}"; do
        echo "  $((i+1)). ${options[$i]}" >&2
    done
    
    if [[ "$default_behavior" == "all" ]]; then
        echo "  a. All of the above (default)" >&2
        echo "" >&2
        echo "Press Enter for default (all), or enter comma-separated numbers (e.g., 1,2)" >&2
        echo "Type 'exit' to quit" >&2
    else
        echo "  a. All of the above" >&2
        echo "" >&2
        echo "Enter your selection (comma-separated numbers or 'a')" >&2
        echo "Type 'exit' to quit" >&2
    fi
    
    read -r -p "> " response
    
    # Check for exit command (case-insensitive)
    if [[ "$(echo "$response" | tr '[:upper:]' '[:lower:]')" == "exit" ]]; then
        return 2  # Special exit code
    fi
    
    # Handle empty response
    if [[ -z "$response" ]]; then
        if [[ "$default_behavior" == "all" ]]; then
            selected=("${options[@]}")
            echo "Using default: all options selected" >&2
        else
            return 1  # No selection, caller should handle
        fi
    elif [[ "$response" == "a" ]] || [[ "$response" == "A" ]]; then
        selected=("${options[@]}")
    else
        IFS=',' read -ra selections <<< "$response"
        local invalid_found=false
        for sel in "${selections[@]}"; do
            sel=$(echo "$sel" | xargs)  # trim whitespace
            if [[ "$sel" =~ ^[0-9]+$ ]] && [[ "$sel" -ge 1 ]] && [[ "$sel" -le "${#options[@]}" ]]; then
                selected+=("${options[$((sel-1))]}")
            else
                print_warning "Invalid selection ignored: '$sel'"
                invalid_found=true
            fi
        done
        
        if [[ "$invalid_found" == true ]] && [[ ${#selected[@]} -eq 0 ]]; then
            print_error "No valid selections made"
            return 1
        fi
    fi
    
    # Output selected items to stdout (this is what gets captured)
    printf '%s\n' "${selected[@]}"
}

# ============================================================================
# DRAGEN Detection and Validation
# ============================================================================

detect_dragen_installations() {
    print_info "Detecting available DRAGEN installations..."
    
    if ! command -v dragen_versions >/dev/null 2>&1; then
        print_warning "dragen_versions command not found in PATH"
        return 1
    fi
    
    local versions
    versions=$(dragen_versions 2>/dev/null || echo "")
    
    if [[ -z "$versions" ]]; then
        print_warning "No DRAGEN installations detected"
        return 1
    fi
    
    echo "$versions"
    return 0
}

prompt_dragen_path() {
    if [[ -n "$DRAGEN_INSTALL_PATH" ]]; then
        print_info "Using DRAGEN path: $DRAGEN_INSTALL_PATH"
        return 0
    fi
    
    if [[ "$NON_INTERACTIVE" == true ]]; then
        error_exit "DRAGEN path is required. Use --dragen-path option."
    fi
    
    print_section "Step 1: Select DRAGEN Installation"
    
    # Temporarily disable exit on error to handle detection failures gracefully
    set +e
    local installations
    installations=$(detect_dragen_installations 2>&1)
    local detection_result=$?
    set -e
    
    if [[ $detection_result -eq 0 ]]; then
        echo "$installations"
        echo ""
    fi
    
    while true; do
        local input
        input=$(prompt_input "Enter DRAGEN installation path (or 'exit' to quit)" "/opt/edico")
        
        # Trim whitespace
        input=$(echo "$input" | xargs)
        
        # Check for exit command (case-insensitive)
        if [[ "$(echo "$input" | tr '[:upper:]' '[:lower:]')" == "exit" ]]; then
            handle_exit_request && continue || continue
        fi
        
        DRAGEN_INSTALL_PATH="$input"
        
        # Validate the path
        if validate_dragen_path_interactive; then
            break
        else
            echo ""
            echo "Please try again or type 'exit' to quit."
            echo ""
        fi
    done
}

validate_dragen_path_interactive() {
    # Interactive version that returns false instead of exiting
    if [[ -z "$DRAGEN_INSTALL_PATH" ]]; then
        print_error "DRAGEN installation path cannot be empty"
        return 1
    fi
    
    if [[ ! -d "$DRAGEN_INSTALL_PATH" ]]; then
        print_error "DRAGEN installation path does not exist: $DRAGEN_INSTALL_PATH"
        return 1
    fi
    
    if [[ ! -r "$DRAGEN_INSTALL_PATH" ]]; then
        print_error "No read permission for DRAGEN path: $DRAGEN_INSTALL_PATH"
        return 1
    fi
    
    local datamanager="$DRAGEN_INSTALL_PATH/$DATAMANAGER_PATH"
    if [[ ! -f "$datamanager" ]]; then
        print_error "DataManager not found at: $datamanager"
        return 1
    fi
    
    if [[ ! -x "$datamanager" ]]; then
        print_error "DataManager is not executable: $datamanager"
        return 1
    fi
    
    local resources="$DRAGEN_INSTALL_PATH/$RESOURCES_DIR"
    if [[ ! -d "$resources" ]]; then
        print_error "Resources directory not found at: $resources"
        return 1
    fi
    
    print_info "DRAGEN installation validated successfully"
    return 0
}

validate_dragen_path() {
    # Non-interactive version that exits on error (for CLI mode)
    if [[ -z "$DRAGEN_INSTALL_PATH" ]]; then
        error_exit "DRAGEN installation path is empty"
    fi
    
    if [[ ! -d "$DRAGEN_INSTALL_PATH" ]]; then
        error_exit "DRAGEN installation path does not exist: $DRAGEN_INSTALL_PATH"
    fi
    
    if [[ ! -r "$DRAGEN_INSTALL_PATH" ]]; then
        error_exit "No read permission for DRAGEN path: $DRAGEN_INSTALL_PATH"
    fi
    
    local datamanager="$DRAGEN_INSTALL_PATH/$DATAMANAGER_PATH"
    if [[ ! -f "$datamanager" ]]; then
        error_exit "DataManager not found at: $datamanager"
    fi
    
    if [[ ! -x "$datamanager" ]]; then
        error_exit "DataManager is not executable: $datamanager"
    fi
    
    local resources="$DRAGEN_INSTALL_PATH/$RESOURCES_DIR"
    if [[ ! -d "$resources" ]]; then
        error_exit "Resources directory not found at: $resources"
    fi
    
    print_info "DRAGEN installation validated successfully"
}

# ============================================================================
# Credential Management
# ============================================================================

detect_credential_type() {
    local dragen_info="$DRAGEN_INSTALL_PATH/$DRAGEN_INFO_PATH"
    
    if [[ -f "$dragen_info" ]]; then
        local serial
        serial=$("$dragen_info" -b 2>/dev/null | grep -i "Serial" | awk '{print $3}' || echo "")
        
        if [[ -n "$serial" ]]; then
            echo "on-premise"
            return 0
        fi
    fi
    
    echo "cloud"
    return 0
}

check_existing_credentials() {
    if [[ -f "$DEFAULT_CREDENTIALS_FILE" ]]; then
        print_info "Found existing credentials file: $DEFAULT_CREDENTIALS_FILE"
        if prompt_yes_no "Would you like to use the existing credentials?"; then
            CREDENTIALS_FILE="$DEFAULT_CREDENTIALS_FILE"
            return 0
        fi
    fi
    return 1
}

create_onpremise_credentials() {
    local dragen_info="$DRAGEN_INSTALL_PATH/$DRAGEN_INFO_PATH"
    local serial
    
    serial=$("$dragen_info" -b 2>/dev/null | grep -i "Serial" | awk '{print $3}' || echo "")
    
    if [[ -z "$serial" ]]; then
        error_exit "Could not retrieve DRAGEN serial number"
    fi
    
    ensure_config_dir
    
    cat > "$DEFAULT_CREDENTIALS_FILE" << EOF
{
  "DragenSerialNo": "$serial"
}
EOF
    
    print_info "Created credentials file with serial number: $serial"
    CREDENTIALS_FILE="$DEFAULT_CREDENTIALS_FILE"
}

create_onpremise_credentials_to_path() {
    local target_path="$1"
    local dragen_info="$DRAGEN_INSTALL_PATH/$DRAGEN_INFO_PATH"
    local serial
    
    serial=$("$dragen_info" -b 2>/dev/null | grep -i "Serial" | awk '{print $3}' || echo "")
    
    if [[ -z "$serial" ]]; then
        error_exit "Could not retrieve DRAGEN serial number"
    fi
    
    cat > "$target_path" << EOF
{
  "DragenSerialNo": "$serial"
}
EOF
    
    print_info "Created credentials file with serial number: $serial"
    print_info "Saved to: $target_path"
}

parse_lic_credentials_file() {
    local lic_file="$1"
    
    if [[ ! -f "$lic_file" ]]; then
        error_exit "License credentials file not found: $lic_file"
    fi
    
    API_KEY=$(awk -F' = ' '/^credentials-1/ {print $2}' "$lic_file" | xargs)
    API_SECRET=$(awk -F' = ' '/^credentials-2/ {print $2}' "$lic_file" | xargs)
    
    if [[ -z "$API_KEY" || -z "$API_SECRET" ]]; then
        error_exit "Could not parse API credentials from: $lic_file"
    fi
    
    print_info "Parsed credentials from license file"
}

create_cloud_credentials() {
    if [[ -n "$LIC_CREDENTIALS_FILE" ]]; then
        parse_lic_credentials_file "$LIC_CREDENTIALS_FILE"
    elif [[ -z "$API_KEY" || -z "$API_SECRET" ]]; then
        echo ""
        echo "Cloud DRAGEN requires API credentials."
        echo "These can be found in your DRAGEN license configuration:"
        echo "  - From --lic-server: https://<user_id>:<password>@license.dragen.illumina.com"
        echo "  - From --lic-credentials file: credentials-1 and credentials-2 values"
        echo ""
        
        if [[ -z "$API_KEY" ]]; then
            API_KEY=$(prompt_input "Enter API Key (user_id)")
        fi
        
        if [[ -z "$API_SECRET" ]]; then
            API_SECRET=$(prompt_input "Enter API Secret (password)")
        fi
    fi
    
    if [[ -z "$API_KEY" || -z "$API_SECRET" ]]; then
        error_exit "API credentials are required for cloud DRAGEN"
    fi
    
    ensure_config_dir
    
    cat > "$DEFAULT_CREDENTIALS_FILE" << EOF
{
  "ApiKey": "$API_KEY",
  "ApiSecret": "$API_SECRET"
}
EOF
    
    print_info "Created cloud credentials file"
    CREDENTIALS_FILE="$DEFAULT_CREDENTIALS_FILE"
}

create_cloud_credentials_to_path() {
    local target_path="$1"
    
    if [[ -n "$LIC_CREDENTIALS_FILE" ]]; then
        parse_lic_credentials_file "$LIC_CREDENTIALS_FILE"
    elif [[ -z "$API_KEY" || -z "$API_SECRET" ]]; then
        echo ""
        echo "Cloud DRAGEN requires API credentials."
        echo "These can be found in your DRAGEN license configuration:"
        echo "  - From --lic-server: https://<user_id>:<password>@license.dragen.illumina.com"
        echo "  - From --lic-credentials file: credentials-1 and credentials-2 values"
        echo ""
        
        if [[ -z "$API_KEY" ]]; then
            API_KEY=$(prompt_input "Enter API Key (user_id)")
        fi
        
        if [[ -z "$API_SECRET" ]]; then
            API_SECRET=$(prompt_input "Enter API Secret (password)")
        fi
    fi
    
    if [[ -z "$API_KEY" || -z "$API_SECRET" ]]; then
        error_exit "API credentials are required for cloud DRAGEN"
    fi
    
    cat > "$target_path" << EOF
{
  "ApiKey": "$API_KEY",
  "ApiSecret": "$API_SECRET"
}
EOF
    
    print_info "Created cloud credentials file"
    print_info "Saved to: $target_path"
}

setup_credentials() {
    if [[ -n "$CREDENTIALS_FILE" ]]; then
        if [[ ! -f "$CREDENTIALS_FILE" ]]; then
            error_exit "Specified credentials file not found: $CREDENTIALS_FILE"
        fi
        print_info "Using credentials file: $CREDENTIALS_FILE"
        return 0
    fi
    
    print_section "Step 2: Configure Credentials"
    
    # Detect credential type first
    CREDENTIAL_TYPE=$(detect_credential_type)

    # Double-check detected credential type with user
    echo "Detected credential type: $CREDENTIAL_TYPE"
    if prompt_yes_no "Is this correct?"; then
        : # continue with detected type
    else
        echo "Please select the credential type:"
        echo "  1. on-premise"
        echo "  2. cloud"
        local choice
        while true; do
            read -r -p "> " choice
            case "$choice" in
                1)
                    CREDENTIAL_TYPE="on-premise"
                    break
                    ;;
                2)
                    CREDENTIAL_TYPE="cloud"
                    break
                    ;;
                *)
                    echo "Invalid choice. Enter 1 for on-premise or 2 for cloud."
                    ;;
            esac
        done
    fi
    
    # Prompt for credentials file path
    local use_existing=false
    
    # Check if default credentials file exists
    if [[ -f "$DEFAULT_CREDENTIALS_FILE" ]]; then
        print_info "Found existing credentials file: $DEFAULT_CREDENTIALS_FILE"
        if prompt_yes_no "Would you like to use the existing credentials file?"; then
            CREDENTIALS_FILE="$DEFAULT_CREDENTIALS_FILE"
            return 0
        fi
    fi
    
    # Ask user for credentials file path
    echo ""
    echo "Where should the credentials file be saved?"
    local user_path
    user_path=$(prompt_input "Enter credentials file path (or 'exit' to quit)" "$DEFAULT_CREDENTIALS_FILE")
    
    # Trim whitespace
    user_path=$(echo "$user_path" | xargs)
    
    # Check for exit command
    if [[ "$(echo "$user_path" | tr '[:upper:]' '[:lower:]')" == "exit" ]]; then
        if prompt_yes_no "Are you sure you want to exit?"; then
            echo "Setup cancelled by user"
            exit 0
        else
            # Recursive call to try again
            setup_credentials
            return $?
        fi
    fi
    
    # Check if user-specified file already exists
    if [[ -f "$user_path" ]]; then
        print_warning "File already exists: $user_path"
        if prompt_yes_no "Would you like to use this existing file?"; then
            CREDENTIALS_FILE="$user_path"
            return 0
        else
            if prompt_yes_no "Overwrite with new credentials?"; then
                CREDENTIALS_FILE="$user_path"
                # Continue to create new credentials
            else
                # Ask again for a different path
                echo ""
                print_info "Please choose a different path"
                setup_credentials
                return $?
            fi
        fi
    else
        CREDENTIALS_FILE="$user_path"
    fi
    
    # Ensure the directory exists
    local cred_dir
    cred_dir=$(dirname "$CREDENTIALS_FILE")
    if [[ ! -d "$cred_dir" ]]; then
        print_info "Creating directory: $cred_dir"
        mkdir -p "$cred_dir" || error_exit "Failed to create directory: $cred_dir"
    fi
    
    # Create the credentials based on type
    if [[ "$CREDENTIAL_TYPE" == "on-premise" ]]; then
        print_info "Setting up on-premise credentials..."
        create_onpremise_credentials_to_path "$CREDENTIALS_FILE"
    else
        print_info "Setting up cloud credentials..."
        create_cloud_credentials_to_path "$CREDENTIALS_FILE"
    fi
}

# ============================================================================
# Assembly and Annotation Type Selection
# ============================================================================

discover_available_configs() {
    local resources="$DRAGEN_INSTALL_PATH/$RESOURCES_DIR"
    local configs
    
    configs=$(find "$resources" -name "*.json" -type f 2>/dev/null || echo "")
    
    if [[ -z "$configs" ]]; then
        error_exit "No annotation configuration files found in: $resources"
    fi
    
    echo "$configs"
}

extract_assemblies_from_configs() {
    local configs="$1"
    local assemblies=()
    
    while IFS= read -r config; do
        local basename
        basename=$(basename "$config" .json)
        local assembly
        assembly=$(echo "$basename" | grep -oE 'GRCh[0-9]+|hg[0-9]+' || echo "")
        
        if [[ -n "$assembly" ]]; then
            local found=false
            for existing in "${assemblies[@]}"; do
                if [[ "$existing" == "$assembly" ]]; then
                    found=true
                    break
                fi
            done
            if [[ "$found" == false ]]; then
                assemblies+=("$assembly")
            fi
        fi
    done <<< "$configs"
    
    printf '%s\n' "${assemblies[@]}" | sort -u
}

extract_annotation_types_from_configs() {
    local configs="$1"
    local types=()
    
    while IFS= read -r config; do
        local basename
        basename=$(basename "$config" .json)
        local type
        
        if [[ "$basename" =~ ^all_annotations_ ]]; then
            type="all"
        elif [[ "$basename" =~ ^germline_tagging_annotations_ ]]; then
            type="germline_tagging"
        elif [[ "$basename" =~ ^tmb_annotations_ ]]; then
            type="tmb"
        else
            continue
        fi
        
        local found=false
        for existing in "${types[@]}"; do
            if [[ "$existing" == "$type" ]]; then
                found=true
                break
            fi
        done
        if [[ "$found" == false ]]; then
            types+=("$type")
        fi
    done <<< "$configs"
    
    printf '%s\n' "${types[@]}" | sort -u
}

prompt_assemblies() {
    if [[ ${#ASSEMBLIES[@]} -gt 0 ]]; then
        print_info "Using assemblies: ${ASSEMBLIES[*]}"
        return 0
    fi
    
    print_section "Step 3: Select Reference Assemblies"
    
    local configs
    configs=$(discover_available_configs)
    
    local available_assemblies
    mapfile -t available_assemblies < <(extract_assemblies_from_configs "$configs")
    
    if [[ ${#available_assemblies[@]} -eq 0 ]]; then
        error_exit "No assemblies found in configuration files"
    fi
    
    echo "Available assemblies:"
    for assembly in "${available_assemblies[@]}"; do
        echo "  - $assembly"
    done
    echo ""
    
    while true; do
        # Temporarily disable exit on error for multiselect
        set +e
        mapfile -t ASSEMBLIES < <(prompt_multiselect "Select assemblies to download:" "all" "${available_assemblies[@]}")
        local result=$?
        set -e
        
        # Check if user requested exit
        if [[ $result -eq 2 ]]; then
            handle_exit_request && continue || continue
        fi
        
        # Check if selection was successful
        if [[ $result -eq 0 ]] && [[ ${#ASSEMBLIES[@]} -gt 0 ]]; then
            break
        else
            print_error "At least one assembly must be selected"
            echo "Please try again or type 'exit' to quit."
            echo ""
        fi
    done
}

prompt_annotation_types() {
    if [[ ${#ANNOTATION_TYPES[@]} -gt 0 ]]; then
        print_info "Using annotation types: ${ANNOTATION_TYPES[*]}"
        return 0
    fi
    
    print_section "Step 4: Select Annotation Types"
    
    local configs
    configs=$(discover_available_configs)
    
    local available_types
    mapfile -t available_types < <(extract_annotation_types_from_configs "$configs")
    
    if [[ ${#available_types[@]} -eq 0 ]]; then
        error_exit "No annotation types found in configuration files"
    fi
    
    echo "Available annotation types:"
    echo "  - all: Full variant annotation (all_annotations_*)"
    echo "  - germline_tagging: Germline tagging only (germline_tagging_annotations_*)"
    echo "  - tmb: Tumor Mutational Burden (tmb_annotations_*)"
    echo ""
    echo "Note: TMB includes germline tagging data"
    echo ""
    
    while true; do
        # Temporarily disable exit on error for multiselect
        set +e
        mapfile -t ANNOTATION_TYPES < <(prompt_multiselect "Select annotation types to download:" "all" "${available_types[@]}")
        local result=$?
        set -e
        
        # Check if user requested exit
        if [[ $result -eq 2 ]]; then
            handle_exit_request && continue || continue
        fi
        
        # Check if selection was successful
        if [[ $result -eq 0 ]] && [[ ${#ANNOTATION_TYPES[@]} -gt 0 ]]; then
            break
        else
            # If nothing selected and it's not a default behavior, default to all
            if [[ $result -eq 0 ]] && [[ ${#ANNOTATION_TYPES[@]} -eq 0 ]]; then
                print_info "No selection made, using all available types as default"
                ANNOTATION_TYPES=("${available_types[@]}")
                break
            else
                print_error "Please make a selection"
                echo "Please try again or type 'exit' to quit."
                echo ""
            fi
        fi
    done
}

prompt_data_directory() {
    if [[ -n "$DATA_DIRECTORY" ]]; then
        print_info "Using data directory: $DATA_DIRECTORY"
        return 0
    fi
    
    print_section "Step 5: Specify Data Directory"
    
    echo "This directory will store all downloaded annotation files."
    echo "Recommended: Use the same directory for all annotation types."
    echo ""
    
    DATA_DIRECTORY=$(prompt_input "Enter data directory path" "/data/nirvana_data")
}

# ============================================================================
# Configuration Display and Confirmation
# ============================================================================

display_configuration() {
    print_header "Configuration Summary"
    
    echo "DRAGEN Installation:"
    echo "  Path: $DRAGEN_INSTALL_PATH"
    echo ""
    
    echo "Credentials:"
    echo "  Type: $CREDENTIAL_TYPE"
    echo "  File: $CREDENTIALS_FILE"
    echo ""
    
    echo "Data Directory:"
    echo "  Path: $DATA_DIRECTORY"
    if [[ -d "$DATA_DIRECTORY" ]]; then
        echo "  Status: Directory exists"
    else
        echo "  Status: Will be created"
    fi
    echo ""
    
    echo "Assemblies:"
    for assembly in "${ASSEMBLIES[@]}"; do
        echo "  - $assembly"
    done
    echo ""
    
    echo "Annotation Types:"
    for type in "${ANNOTATION_TYPES[@]}"; do
        case "$type" in
            all)
                echo "  - all (Full variant annotation)"
                ;;
            germline_tagging)
                echo "  - germline_tagging (Germline tagging)"
                ;;
            tmb)
                echo "  - tmb (Tumor Mutational Burden)"
                ;;
        esac
    done
    echo ""
    
    echo "Download Jobs:"
    echo "Directory: ${DRAGEN_INSTALL_PATH/$RESOURCES_DIR/}"
    echo "Files:"
    local job_count=0
    for assembly in "${ASSEMBLIES[@]}"; do
        for type in "${ANNOTATION_TYPES[@]}"; do
            local config_file
            config_file=$(get_config_filename "$type" "$assembly")
            echo "  $((++job_count)). $config_file"
        done
    done
    echo ""
    
    if [[ "$DRY_RUN" == true ]]; then
        echo "Mode: DRY RUN (no files will be downloaded)"
        echo ""
    fi
}

get_config_filename() {
    local type="$1"
    local assembly="$2"
    
    case "$type" in
        all)
            echo "all_annotations_${assembly}.json"
            ;;
        germline_tagging)
            echo "germline_tagging_annotations_${assembly}.json"
            ;;
        tmb)
            echo "tmb_annotations_${assembly}.json"
            ;;
        *)
            echo "unknown_${assembly}.json"
            ;;
    esac
}

confirm_configuration() {
    if [[ "$NON_INTERACTIVE" == true ]]; then
        return 0
    fi
    
    while true; do
        echo ""
        if prompt_yes_no "Proceed with this configuration?"; then
            return 0
        else
            echo ""
            echo "What would you like to do?"
            echo "  1. Start over from the beginning"
            echo "  2. Exit without downloading"
            
            read -r -p "> " choice
            
            case "$choice" in
                1)
                    print_info "Restarting configuration..."
                    # Restart the script without arguments for fresh interactive setup
                    exec "$0"
                    ;;
                2)
                    echo "Exiting without downloading. Configuration was not saved."
                    exit 0
                    ;;
                *)
                    echo "Invalid choice. Please enter 1 or 2."
                    ;;
            esac
        fi
    done
}

# ============================================================================
# Download Operations
# ============================================================================

download_annotation_data() {
    local assembly="$1"
    local type="$2"
    
    local config_filename
    config_filename=$(get_config_filename "$type" "$assembly")
    
    local config_path="$DRAGEN_INSTALL_PATH/$RESOURCES_DIR/$config_filename"
    
    if [[ ! -f "$config_path" ]]; then
        print_warning "Configuration file not found: $config_path"
        return 1
    fi
    
    local datamanager="$DRAGEN_INSTALL_PATH/$DATAMANAGER_PATH"
    
    print_info "Downloading $type annotations for $assembly"
    print_info "Using config: $config_filename"
    
    if [[ "$DRY_RUN" == true ]]; then
        print_info "DRY RUN: Would execute:"
        echo "  $datamanager download \\"
        echo "    -r $assembly \\"
        echo "    --credentials-file $CREDENTIALS_FILE \\"
        echo "    --dir $DATA_DIRECTORY \\"
        echo "    --versions-config $config_path"
        return 0
    fi
    
    echo ""
    if "$datamanager" download \
        -r "$assembly" \
        --credentials-file "$CREDENTIALS_FILE" \
        --dir "$DATA_DIRECTORY" \
        --versions-config "$config_path"; then
        print_info "Successfully downloaded $type annotations for $assembly"
        return 0
    else
        print_error "Failed to download $type annotations for $assembly"
        return 1
    fi
}

execute_downloads() {
    print_header "Downloading Annotation Data"
    
    if [[ ! -d "$DATA_DIRECTORY" ]]; then
        print_info "Creating data directory: $DATA_DIRECTORY"
        mkdir -p "$DATA_DIRECTORY" || error_exit "Failed to create data directory"
    fi
    
    local total=0
    local successful=0
    local failed=0
    
    for assembly in "${ASSEMBLIES[@]}"; do
        for type in "${ANNOTATION_TYPES[@]}"; do
            total=$((total + 1))
            
            echo ""
            print_section "Download $total: $type ($assembly)"
            
            if download_annotation_data "$assembly" "$type"; then
                successful=$((successful + 1))
            else
                failed=$((failed + 1))
            fi
        done
    done
    
    print_header "Download Summary"
    echo "Total jobs: $total"
    echo "Successful: $successful"
    echo "Failed: $failed"
    echo ""
    
    if [[ $failed -gt 0 ]]; then
        print_warning "Some downloads failed. Check the logs above for details."
    fi
    
    if [[ $successful -eq 0 ]]; then
        error_exit "No annotation data was downloaded successfully"
    fi
}

# ============================================================================
# Final Instructions
# ============================================================================

show_next_steps() {
    print_header "Setup Complete"
    
    if [[ "$DRY_RUN" == true ]]; then
        echo "This was a dry run. No files were downloaded."
        echo "Remove --dry-run flag to perform actual downloads."
        echo ""
        return
    fi
    
    echo "Annotation data has been downloaded to:"
    echo "  $DATA_DIRECTORY"
    echo ""
    
    echo "To annotate variants with DRAGEN, use these parameters:"
    echo ""
    echo "  dragen \\"
    echo "    --enable-variant-annotation true \\"
    echo "    --variant-annotation-data $DATA_DIRECTORY \\"
    echo "    --variant-annotation-assembly <assembly> \\"
    echo "    [... other parameters ...]"
    echo ""
    
    echo "Where <assembly> is one of:"
    for assembly in "${ASSEMBLIES[@]}"; do
        echo "  - $assembly"
    done
    echo ""
    
    echo "For standalone annotation, use:"
    echo ""
    echo "  $DRAGEN_INSTALL_PATH/share/nirvana/Nirvana \\"
    echo "    -i <input.vcf> \\"
    echo "    -o <output_prefix> \\"
    echo "    -c $DATA_DIRECTORY/Cache \\"
    echo "    -r $DATA_DIRECTORY/References/Homo_sapiens.<assembly>.Nirvana.dat \\"
    echo "    --sd $DATA_DIRECTORY/SupplementaryAnnotation/<assembly> \\"
    echo "    -l $CREDENTIALS_FILE \\"
    echo "    --versions-config $DRAGEN_INSTALL_PATH/$RESOURCES_DIR/<config.json>"
    echo ""
    
    echo "For more information, see the documentation:"
    echo "  Getting Started with DRAGEN"
    echo ""
}

# ============================================================================
# Command Line Argument Parsing
# ============================================================================

parse_arguments() {
    while [[ $# -gt 0 ]]; do
        case "$1" in
            --help)
                show_usage
                ;;
            --dragen-path)
                DRAGEN_INSTALL_PATH="$2"
                shift 2
                ;;
            --data-dir)
                DATA_DIRECTORY="$2"
                shift 2
                ;;
            --assemblies)
                IFS=',' read -ra ASSEMBLIES <<< "$2"
                shift 2
                ;;
            --annotation-types)
                IFS=',' read -ra ANNOTATION_TYPES <<< "$2"
                shift 2
                ;;
            --credentials-file)
                CREDENTIALS_FILE="$2"
                shift 2
                ;;
            --lic-credentials)
                LIC_CREDENTIALS_FILE="$2"
                shift 2
                ;;
            --api-key)
                API_KEY="$2"
                shift 2
                ;;
            --api-secret)
                API_SECRET="$2"
                shift 2
                ;;
            --dry-run)
                DRY_RUN=true
                shift
                ;;
            --non-interactive)
                NON_INTERACTIVE=true
                shift
                ;;
            *)
                error_exit "Unknown option: $1. Use --help for usage information."
                ;;
        esac
    done
}

# ============================================================================
# Main Workflow
# ============================================================================

main() {
    clear
    echo ""
    echo "---------------------------------------------------------------------------"
    echo "DRAGEN Provisioning                                 (c) ${YEAR} Illumina, Inc."
    echo "                                                                      ${VERSION}"
    echo "---------------------------------------------------------------------------"
    echo ""
    
    echo "Welcome to the Illumina Connected Annotations setup for DRAGEN."
    echo "This assistant will walk you through credential setup and downloading annotation data."
    echo "If you need help at any step, refer to the documentation or use the --help option."
    echo ""
    
    # Parse command line arguments
    parse_arguments "$@"
    
    # Show overview if in interactive mode
    if [[ "$NON_INTERACTIVE" == false ]] && [[ -z "$DRAGEN_INSTALL_PATH" ]]; then
        echo "The setup process has 5 simple steps:"
        echo "  1. Select your DRAGEN installation"
        echo "  2. Configure credentials (automatic for on-premise)"
        echo "  3. Choose reference assemblies (default: all available)"
        echo "  4. Choose annotation types (default: all available)"
        echo "  5. Specify download directory"
        echo ""
        echo "You will review the complete configuration before any downloads begin."
        echo ""
        
        if ! prompt_yes_no "Ready to begin?"; then
            echo "Setup cancelled. Run with --help for more options."
            exit 0
        fi
    fi
    
    # Interactive prompts for missing information
    prompt_dragen_path
    validate_dragen_path
    
    setup_credentials
    
    prompt_assemblies
    prompt_annotation_types
    
    # Display configuration and get confirmation
    prompt_data_directory
    display_configuration
    confirm_configuration
    
    # Execute downloads
    execute_downloads
    
    # Show next steps
    show_next_steps
    
    print_info "Provisioning completed successfully!"
}

# Run main function
main "$@"
