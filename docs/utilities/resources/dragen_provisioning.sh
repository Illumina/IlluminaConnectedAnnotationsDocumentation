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
DEFAULT_CREDENTIALS_FILE="$CONFIG_DIR/credentials.json"
DEFAULT_API_KEY_FILE="$CONFIG_DIR/dragen_api_key.txt"
DEFAULT_LIC_CREDENTIALS_FILE="$CONFIG_DIR/dragen_credentials.txt"

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
API_KEY_FILE=""
API_KEY=""
API_SECRET=""
LIC_CREDENTIALS_FILE=""
USE_ENV_VARS=false
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
  --api-key-file <path>         Path to API key file
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

check_environment_credentials() {
    # Check for credentials in environment variables
    local found_creds=false
    
    if [[ -n "${DRAGEN_SERIAL_NUMBER:-}" ]]; then
        print_info "Found DRAGEN_SERIAL_NUMBER in environment"
        CREDENTIAL_TYPE="on-premise"
        USE_ENV_VARS=true
        found_creds=true
    elif [[ -n "${DRAGEN_API_KEY_VALUE:-}" ]]; then
        print_info "Found DRAGEN_API_KEY_VALUE in environment"
        CREDENTIAL_TYPE="cloud"
        USE_ENV_VARS=true
        found_creds=true
    elif [[ -n "${DRAGEN_API_KEY_FILE:-}" ]]; then
        print_info "Found DRAGEN_API_KEY_FILE in environment: ${DRAGEN_API_KEY_FILE}"
        API_KEY_FILE="${DRAGEN_API_KEY_FILE}"
        CREDENTIAL_TYPE="cloud"
        found_creds=true
    elif [[ -n "${NIRVANA_API_KEY:-}" ]] && [[ -n "${NIRVANA_API_SECRET:-}" ]]; then
        print_info "Found NIRVANA_API_KEY and NIRVANA_API_SECRET in environment"
        CREDENTIAL_TYPE="cloud"
        USE_ENV_VARS=true
        found_creds=true
    elif [[ -n "${DRAGEN_LICENSE_CREDENTIALS_FILE:-}" ]]; then
        print_info "Found DRAGEN_LICENSE_CREDENTIALS_FILE in environment: ${DRAGEN_LICENSE_CREDENTIALS_FILE}"
        LIC_CREDENTIALS_FILE="${DRAGEN_LICENSE_CREDENTIALS_FILE}"
        CREDENTIAL_TYPE="cloud"
        found_creds=true
    fi
    
    return $([ "$found_creds" = true ] && echo 0 || echo 1)
}

check_default_credential_files() {
    # Check for credentials in default locations
    local found_creds=false
    
    if [[ -f "$DEFAULT_CREDENTIALS_FILE" ]]; then
        print_info "Found credentials.json in default location"
        CREDENTIALS_FILE="$DEFAULT_CREDENTIALS_FILE"
        found_creds=true
    elif [[ -f "$DEFAULT_API_KEY_FILE" ]]; then
        print_info "Found dragen_api_key.txt in default location"
        API_KEY_FILE="$DEFAULT_API_KEY_FILE"
        CREDENTIAL_TYPE="cloud"
        found_creds=true
    elif [[ -f "$DEFAULT_LIC_CREDENTIALS_FILE" ]]; then
        print_info "Found dragen_credentials.txt in default location"
        LIC_CREDENTIALS_FILE="$DEFAULT_LIC_CREDENTIALS_FILE"
        CREDENTIAL_TYPE="cloud"
        found_creds=true
    fi
    
    return $([ "$found_creds" = true ] && echo 0 || echo 1)
}

detect_credential_type() {
    local dragen_info="$DRAGEN_INSTALL_PATH/$DRAGEN_INFO_PATH"
    
    if [[ -f "$dragen_info" ]]; then
        local serial
        serial=$("$dragen_info" -qs 2>/dev/null || echo "")
        
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
    
    serial=$("$dragen_info" -qs 2>/dev/null || echo "")
    
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
    
    serial=$("$dragen_info" -qs 2>/dev/null || echo "")
    
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
    
    # If lic-credentials file is already specified via CLI, use it
    if [[ -n "$LIC_CREDENTIALS_FILE" ]]; then
        parse_lic_credentials_file "$LIC_CREDENTIALS_FILE"
    # If API key/secret are already provided via CLI, use them
    elif [[ -n "$API_KEY" && -n "$API_SECRET" ]]; then
        : # credentials already set, continue to file creation
    # Interactive mode: prompt user for their preferred method
    else
        echo ""
        echo "Cloud DRAGEN requires API credentials."
        echo "These can be found in your DRAGEN license configuration:"
        echo "  - From --lic-server: https://<user_id>:<password>@license.dragen.illumina.com"
        echo "  - From --lic-credentials file: credentials-1 and credentials-2 values"
        echo ""
        echo "Choose credential input method:"
        echo "  1. Provide path to lic-credentials file"
        echo "  2. Enter user_id and password manually"
        echo ""
        
        local choice
        while true; do
            read -r -p "Enter your choice (1 or 2): " choice
            case "$choice" in
                1)
                    # Option 1: Parse from lic-credentials file
                    local lic_file
                    lic_file=$(prompt_input "Enter path to lic-credentials file")
                    
                    if [[ -z "$lic_file" ]]; then
                        print_error "Path cannot be empty"
                        continue
                    fi
                    
                    if [[ ! -f "$lic_file" ]]; then
                        print_error "File not found: $lic_file"
                        if prompt_yes_no "Try again?"; then
                            continue
                        else
                            error_exit "Valid lic-credentials file required"
                        fi
                    fi
                    
                    parse_lic_credentials_file "$lic_file"
                    break
                    ;;
                2)
                    # Option 2: Manual entry
                    API_KEY=$(prompt_input "Enter user_id (API Key)")
                    API_SECRET=$(prompt_input "Enter password (API Secret)")
                    
                    if [[ -z "$API_KEY" || -z "$API_SECRET" ]]; then
                        print_error "Both user_id (API Key) and password (API Secret) are required"
                        if prompt_yes_no "Try again?"; then
                            continue
                        else
                            error_exit "API credentials are required for cloud DRAGEN"
                        fi
                    fi
                    break
                    ;;
                *)
                    echo "Invalid choice. Please enter 1 or 2."
                    ;;
            esac
        done
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
    # First, check if credentials are already specified via CLI arguments
    if [[ -n "$CREDENTIALS_FILE" ]]; then
        if [[ ! -f "$CREDENTIALS_FILE" ]]; then
            error_exit "Specified credentials file not found: $CREDENTIALS_FILE"
        fi
        print_info "Using credentials file: $CREDENTIALS_FILE"
        return 0
    fi
    
    if [[ -n "$API_KEY_FILE" ]]; then
        if [[ ! -f "$API_KEY_FILE" ]]; then
            error_exit "Specified API key file not found: $API_KEY_FILE"
        fi
        print_info "Using API key file: $API_KEY_FILE"
        CREDENTIAL_TYPE="cloud"
        return 0
    fi
    
    if [[ -n "$LIC_CREDENTIALS_FILE" ]]; then
        if [[ ! -f "$LIC_CREDENTIALS_FILE" ]]; then
            error_exit "Specified license credentials file not found: $LIC_CREDENTIALS_FILE"
        fi
        print_info "Using license credentials file: $LIC_CREDENTIALS_FILE"
        CREDENTIAL_TYPE="cloud"
        return 0
    fi
    
    # Check for credentials in environment variables
    if check_environment_credentials; then
        print_info "Using credentials from environment variables (auto-detected)"
        return 0
    fi
    
    # Check for credentials in default locations
    if check_default_credential_files; then
        if [[ "$NON_INTERACTIVE" == false ]]; then
            if prompt_yes_no "Use discovered credentials?"; then
                return 0
            fi
        else
            return 0
        fi
    fi
    
    # If we're in non-interactive mode and no credentials found, error out
    if [[ "$NON_INTERACTIVE" == true ]]; then
        error_exit "No credentials found. Use --credentials-file, --api-key-file, --lic-credentials, or set environment variables."
    fi
    
    print_section "Step 2: Configure Credentials"
    
    # Detect credential type first
    CREDENTIAL_TYPE=$(detect_credential_type)

    echo "Detected DRAGEN installation type: $CREDENTIAL_TYPE"
    
    # For on-premise, automatically get serial number and use it
    if [[ "$CREDENTIAL_TYPE" == "on-premise" ]]; then
        local dragen_info="$DRAGEN_INSTALL_PATH/$DRAGEN_INFO_PATH"
        local serial
        serial=$("$dragen_info" -qs 2>/dev/null || echo "")
        
        if [[ -z "$serial" ]]; then
            error_exit "Could not retrieve DRAGEN serial number"
        fi
        
        echo ""
        echo "Retrieved DRAGEN serial number: $serial"
        echo "Setting DRAGEN_SERIAL_NUMBER environment variable for this session"
        echo ""
        echo ""
        
        # Set it for current session
        export DRAGEN_SERIAL_NUMBER="$serial"
        USE_ENV_VARS=true
        print_info "Credentials configured successfully"
        return 0
    fi
    
    # For cloud, check if we have any credentials we can use
    if [[ "$CREDENTIAL_TYPE" == "cloud" ]]; then
        echo ""
        echo "Cloud DRAGEN requires API credentials."
        echo "No credentials found in environment or default locations."
        echo ""
        echo "Credentials will be requested in the configuration summary."
        echo "You can provide them at that time before downloading."
        echo ""
        # Mark that we need credentials but don't fail yet
        return 0
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

remove_redundant_annotation_types() {
    # TMB includes germline tagging data, so remove germline_tagging if TMB is selected
    local has_tmb=false
    local has_germline_tagging=false
    
    for type in "${ANNOTATION_TYPES[@]}"; do
        if [[ "$type" == "tmb" ]]; then
            has_tmb=true
        fi
        if [[ "$type" == "germline_tagging" ]]; then
            has_germline_tagging=true
        fi
    done
    
    if [[ "$has_tmb" == true ]] && [[ "$has_germline_tagging" == true ]]; then
        print_warning "Ignoring germline tagging because TMB annotations include it"
        
        # Remove germline_tagging from array
        local filtered_types=()
        for type in "${ANNOTATION_TYPES[@]}"; do
            if [[ "$type" != "germline_tagging" ]]; then
                filtered_types+=("$type")
            fi
        done
        ANNOTATION_TYPES=("${filtered_types[@]}")
        
        echo "Updated annotation types: ${ANNOTATION_TYPES[*]}"
        echo ""
    fi
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
    
    # Remove redundant annotation types if TMB is selected
    remove_redundant_annotation_types
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
    if [[ "$USE_ENV_VARS" == true ]]; then
        echo "  Source: Environment variables (auto-detected)"
    elif [[ -n "$CREDENTIALS_FILE" ]]; then
        echo "  Source: $CREDENTIALS_FILE"
    elif [[ -n "$API_KEY_FILE" ]]; then
        echo "  Source: API key file - $API_KEY_FILE"
    elif [[ -n "$LIC_CREDENTIALS_FILE" ]]; then
        echo "  Source: License credentials file - $LIC_CREDENTIALS_FILE"
    else
        echo "  Source: NOT CONFIGURED"
    fi
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
    echo "Directory: ${DRAGEN_INSTALL_PATH}/${RESOURCES_DIR}/"
    echo "Files:"
    local job_count=0
    for assembly in "${ASSEMBLIES[@]}"; do
        for type in "${ANNOTATION_TYPES[@]}"; do
            job_count=$((job_count + 1))
            local config_file
            config_file=$(get_config_filename "$type" "$assembly")
            echo "  $job_count. $config_file"
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

prompt_credential_modification() {
    # Check if credentials are already configured
    local has_credentials=false
    
    if [[ "$USE_ENV_VARS" == true ]] || [[ -n "$CREDENTIALS_FILE" ]] || \
       [[ -n "$API_KEY_FILE" ]] || [[ -n "$LIC_CREDENTIALS_FILE" ]]; then
        has_credentials=true
    fi
    
    # For cloud without credentials, we must get them now
    if [[ "$CREDENTIAL_TYPE" == "cloud" ]] && [[ "$has_credentials" == false ]]; then
        echo ""
        print_warning "Cloud credentials are required but not configured."
        echo "Please provide credentials now."
        prompt_manual_cloud_credentials
        return 0
    fi
    
    # If credentials exist, offer to modify them
    if [[ "$has_credentials" == true ]]; then
        echo ""
        if prompt_yes_no "Would you like to modify or manually enter different credentials?"; then
            if [[ "$CREDENTIAL_TYPE" == "on-premise" ]]; then
                prompt_manual_onpremise_credentials
            else
                prompt_manual_cloud_credentials
            fi
        fi
    fi
}

prompt_manual_onpremise_credentials() {
    echo ""
    echo "Enter on-premise credentials manually."
    echo ""
    
    local serial
    serial=$(prompt_input "Enter DRAGEN serial number")
    
    if [[ -z "$serial" ]]; then
        print_error "Serial number cannot be empty"
        return 1
    fi
    
    # Save to credentials.json
    ensure_config_dir
    
    cat > "$DEFAULT_CREDENTIALS_FILE" << EOF
{
  "DragenSerialNo": "$serial"
}
EOF
    
    CREDENTIALS_FILE="$DEFAULT_CREDENTIALS_FILE"
    USE_ENV_VARS=false
    print_info "Credentials saved to: $DEFAULT_CREDENTIALS_FILE"
}

prompt_manual_cloud_credentials() {
    echo ""
    echo "Enter cloud credentials manually."
    echo "These can be found in your DRAGEN license configuration:"
    echo "  - From --lic-server: https://<user_id>:<password>@license.dragen.illumina.com"
    echo "  - From --lic-credentials file: credentials-1 and credentials-2 values"
    echo ""
    
    local api_key
    local api_secret
    
    api_key=$(prompt_input "Enter API Key (user_id)")
    api_secret=$(prompt_input "Enter API Secret (password)")
    
    if [[ -z "$api_key" ]] || [[ -z "$api_secret" ]]; then
        print_error "Both API Key and API Secret are required"
        return 1
    fi
    
    # Save to credentials.json
    ensure_config_dir
    
    cat > "$DEFAULT_CREDENTIALS_FILE" << EOF
{
  "ApiKey": "$api_key",
  "ApiSecret": "$api_secret"
}
EOF
    
    CREDENTIALS_FILE="$DEFAULT_CREDENTIALS_FILE"
    API_KEY_FILE=""
    LIC_CREDENTIALS_FILE=""
    USE_ENV_VARS=false
    print_info "Credentials saved to: $DEFAULT_CREDENTIALS_FILE"
}

confirm_configuration() {
    if [[ "$NON_INTERACTIVE" == true ]]; then
        # Still need to validate credentials exist for cloud
        if [[ "$CREDENTIAL_TYPE" == "cloud" ]]; then
            local has_credentials=false
            if [[ "$USE_ENV_VARS" == true ]] || [[ -n "$CREDENTIALS_FILE" ]] || \
               [[ -n "$API_KEY_FILE" ]] || [[ -n "$LIC_CREDENTIALS_FILE" ]]; then
                has_credentials=true
            fi
            
            if [[ "$has_credentials" == false ]]; then
                error_exit "Cloud credentials are required. Use --credentials-file, --api-key-file, --lic-credentials, or set environment variables."
            fi
        fi
        return 0
    fi
    
    while true; do
        echo ""
        if prompt_yes_no "Proceed with this configuration?"; then
            return 0
        else
            echo ""
            echo "What would you like to do?"
            echo "  1. Modify credentials"
            echo "  2. Start over from the beginning"
            echo "  3. Exit without downloading"
            echo ""
            
            read -r -p "> " choice
            
            case "$choice" in
                1)
                    # Modify credentials
                    if [[ "$CREDENTIAL_TYPE" == "on-premise" ]]; then
                        prompt_manual_onpremise_credentials
                    else
                        prompt_manual_cloud_credentials
                    fi
                    echo ""
                    display_configuration
                    ;;
                2)
                    print_info "Restarting configuration..."
                    # Restart the script without arguments for fresh interactive setup
                    exec "$0"
                    ;;
                3)
                    echo ""
                    print_info "Exiting without downloading."
                    echo ""
                    print_datamanager_commands
                    exit 0
                    ;;
                *)
                    echo "Invalid choice. Please enter 1, 2, or 3."
                    ;;
            esac
        fi
    done
}

# ============================================================================
# Download Operations
# ============================================================================

print_datamanager_commands() {
    print_header "DataManager Commands"
    
    echo "You can run the following commands manually to download annotation data:"
    echo ""
    
    local datamanager="$DRAGEN_INSTALL_PATH/$DATAMANAGER_PATH"
    local job_count=0
    
    # Determine credential argument
    local cred_arg=""
    if [[ "$USE_ENV_VARS" == true ]]; then
        echo "Note: Commands will use credentials from environment variables"
        echo ""
    elif [[ -n "$CREDENTIALS_FILE" ]]; then
        cred_arg="--credentials-file $CREDENTIALS_FILE"
    elif [[ -n "$API_KEY_FILE" ]]; then
        cred_arg="--api-key-file $API_KEY_FILE"
    elif [[ -n "$LIC_CREDENTIALS_FILE" ]]; then
        cred_arg="--lic-credentials $LIC_CREDENTIALS_FILE"
    else
        echo "Warning: No credentials configured. Add appropriate credential option to commands below."
        echo ""
    fi
    
    for assembly in "${ASSEMBLIES[@]}"; do
        for type in "${ANNOTATION_TYPES[@]}"; do
            job_count=$((job_count + 1))
            local config_filename
            config_filename=$(get_config_filename "$type" "$assembly")
            local config_path="$DRAGEN_INSTALL_PATH/$RESOURCES_DIR/$config_filename"
            
            echo "# Download $job_count: $type annotations for $assembly"
            echo "$datamanager download \\"
            echo "  -r $assembly \\"
            if [[ -n "$cred_arg" ]]; then
                echo "  $cred_arg \\"
            fi
            echo "  --dir $DATA_DIRECTORY \\"
            echo "  --versions-config $config_path"
            echo ""
        done
    done
    
    echo "After downloading, you can annotate variants with DRAGEN:"
    echo ""
    echo "dragen \\"
    echo "  --enable-variant-annotation true \\"
    echo "  --variant-annotation-data $DATA_DIRECTORY \\"
    echo "  --variant-annotation-assembly <assembly> \\"
    echo "  [... other parameters ...]"
    echo ""
}

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
    
    # Build DataManager command based on credential type
    local dm_cmd=("$datamanager" "download" "-r" "$assembly" "--dir" "$DATA_DIRECTORY" "--versions-config" "$config_path")
    
    # Add credential arguments based on what's available
    if [[ "$USE_ENV_VARS" == true ]]; then
        print_info "Using credentials from environment variables"
        # DataManager will automatically detect environment variables
    elif [[ -n "$CREDENTIALS_FILE" ]]; then
        dm_cmd+=("--credentials-file" "$CREDENTIALS_FILE")
    elif [[ -n "$API_KEY_FILE" ]]; then
        dm_cmd+=("--api-key-file" "$API_KEY_FILE")
    elif [[ -n "$LIC_CREDENTIALS_FILE" ]]; then
        dm_cmd+=("--lic-credentials" "$LIC_CREDENTIALS_FILE")
    else
        print_warning "No explicit credentials specified, relying on default locations or environment variables"
    fi
    
    if [[ "$DRY_RUN" == true ]]; then
        print_info "DRY RUN: Would execute:"
        echo "  ${dm_cmd[*]}"
        return 0
    fi
    
    echo ""
    if "${dm_cmd[@]}"; then
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
    
    if [[ "$USE_ENV_VARS" == true ]]; then
        echo "Note: Your credentials are configured via environment variables."
        echo "Make sure to set them in your shell profile for future sessions."
        echo ""
    fi
    
    echo "For standalone annotation, use:"
    echo ""
    
    # Build Nirvana command with appropriate credential option
    local nirvana_cred_option=""
    if [[ -n "$CREDENTIALS_FILE" ]]; then
        nirvana_cred_option="-l $CREDENTIALS_FILE"
    elif [[ -n "$LIC_CREDENTIALS_FILE" ]]; then
        nirvana_cred_option="--lic-credentials $LIC_CREDENTIALS_FILE"
    elif [[ "$USE_ENV_VARS" == true ]]; then
        nirvana_cred_option="# Credentials will be detected from environment variables"
    fi
    
    echo "  $DRAGEN_INSTALL_PATH/share/nirvana/Nirvana \\"
    echo "    -i <input.vcf> \\"
    echo "    -o <output_prefix> \\"
    echo "    -c $DATA_DIRECTORY/Cache \\"
    echo "    -r $DATA_DIRECTORY/References/Homo_sapiens.<assembly>.Nirvana.dat \\"
    echo "    --sd $DATA_DIRECTORY/SupplementaryAnnotation/<assembly> \\"
    if [[ -n "$nirvana_cred_option" ]]; then
        echo "    $nirvana_cred_option \\"
    fi
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
            --api-key-file)
                API_KEY_FILE="$2"
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
    
    # Remove redundant annotation types if provided via CLI
    if [[ ${#ANNOTATION_TYPES[@]} -gt 0 ]]; then
        remove_redundant_annotation_types
    fi
    
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
