#!/bin/bash

# DRAGEN Provisioning Script
# Automates setup of Illumina Connected Annotations for DRAGEN
# Refer to getting-started-dragen.md for details

set -e

# ============================================================================
# Configuration and Constants
# ============================================================================
YEAR=$(date +"%Y")
VERSION="2.0.0"

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
  1. Configure credentials via environment variables
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
  --credentials-file <path>     Path to credentials.json (passed to DataManager)
  --api-key-file <path>         Path to API key file (passed to DataManager)
  --lic-credentials <path>      Path to DRAGEN license credentials (passed to DataManager)
  --dry-run                     Show actions without downloading
  --non-interactive             Fail if required info is missing
  --help                        Show this help

AUTHENTICATION METHODS:
  On-premise DRAGEN (Serial Number):
    - Set DRAGEN_SERIAL_NUMBER environment variable
    - Or use --credentials-file with serial number JSON

  Cloud/Platform DRAGEN (API Key):
    - Set DRAGEN_API_KEY_VALUE environment variable
    - Or set DRAGEN_API_KEY_FILE environment variable (path to key file)
    - Or use --api-key-file option

  Cloud DRAGEN (BYOL Credentials):
    - Set NIRVANA_API_KEY + NIRVANA_API_SECRET environment variables
    - Or set DRAGEN_LICENSE_CREDENTIALS_FILE environment variable (path)
    - Or use --lic-credentials option

ANNOTATION TYPES:
  all                - Full variant annotation
  germline_tagging   - Germline tagging only
  tmb                - Tumor Mutational Burden (includes germline tagging)

EXAMPLES:
  # Interactive setup (will prompt for credentials)
  $0

  # On-premise with serial number from environment
  export DRAGEN_SERIAL_NUMBER="ABC123456"
  $0 --dragen-path /opt/dragen/4.4.3 --data-dir /data/nirvana_data

  # Cloud with BYOL credentials from environment
  export NIRVANA_API_KEY="your_user_id"
  export NIRVANA_API_SECRET="your_password"
  $0 --dragen-path /opt/edico --data-dir /data/nirvana_data

  # Using credential files (passed to DataManager)
  $0 --dragen-path /opt/edico --data-dir /data/nirvana_data \\
     --lic-credentials /path/to/lic_credentials

  # Dry run to see what would be downloaded
  $0 --dragen-path /opt/dragen/4.4.3 --data-dir /data/nirvana_data --dry-run

EOF
    exit 0
}

# ============================================================================
# Interactive Helpers
# ============================================================================

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
    
    echo "$prompt" >&2
    for i in "${!options[@]}"; do
        echo "  $((i+1)). ${options[$i]}" >&2
    done
    
    if [[ "$default_behavior" == "all" ]]; then
        echo "  a. All of the above (default)" >&2
        echo "" >&2
        echo "Press Enter for default (all), or enter comma-separated numbers (e.g., 1,2)" >&2
    else
        echo "  a. All of the above" >&2
        echo "" >&2
        echo "Enter your selection (comma-separated numbers or 'a')" >&2
    fi
    
    read -r -p "> " response
    
    if [[ -z "$response" ]]; then
        if [[ "$default_behavior" == "all" ]]; then
            selected=("${options[@]}")
            echo "Using default: all options selected" >&2
        else
            return 1
        fi
    elif [[ "$response" == "a" ]] || [[ "$response" == "A" ]]; then
        selected=("${options[@]}")
    else
        IFS=',' read -ra selections <<< "$response"
        for sel in "${selections[@]}"; do
            sel=$(echo "$sel" | xargs)
            if [[ "$sel" =~ ^[0-9]+$ ]] && [[ "$sel" -ge 1 ]] && [[ "$sel" -le "${#options[@]}" ]]; then
                selected+=("${options[$((sel-1))]}")
            else
                print_warning "Invalid selection ignored: '$sel'"
            fi
        done
        
        if [[ ${#selected[@]} -eq 0 ]]; then
            print_error "No valid selections made"
            return 1
        fi
    fi
    
    printf '%s\n' "${selected[@]}"
}

# ============================================================================
# DRAGEN Detection and Validation
# ============================================================================

detect_dragen_installations() {
    if ! command -v dragen_versions >/dev/null 2>&1; then
        return 1
    fi
    
    dragen_versions 2>/dev/null || return 1
}

validate_dragen_path() {
    local interactive="${1:-false}"
    
    if [[ -z "$DRAGEN_INSTALL_PATH" ]]; then
        if [[ "$interactive" == "true" ]]; then
            print_error "DRAGEN installation path cannot be empty"
            return 1
        else
            error_exit "DRAGEN installation path is empty"
        fi
    fi
    
    if [[ ! -d "$DRAGEN_INSTALL_PATH" ]]; then
        local msg="DRAGEN installation path does not exist: $DRAGEN_INSTALL_PATH"
        [[ "$interactive" == "true" ]] && { print_error "$msg"; return 1; } || error_exit "$msg"
    fi
    
    if [[ ! -r "$DRAGEN_INSTALL_PATH" ]]; then
        local msg="No read permission for DRAGEN path: $DRAGEN_INSTALL_PATH"
        [[ "$interactive" == "true" ]] && { print_error "$msg"; return 1; } || error_exit "$msg"
    fi
    
    local datamanager="$DRAGEN_INSTALL_PATH/$DATAMANAGER_PATH"
    if [[ ! -f "$datamanager" ]]; then
        local msg="DataManager not found at: $datamanager"
        [[ "$interactive" == "true" ]] && { print_error "$msg"; return 1; } || error_exit "$msg"
    fi
    
    if [[ ! -x "$datamanager" ]]; then
        local msg="DataManager is not executable: $datamanager"
        [[ "$interactive" == "true" ]] && { print_error "$msg"; return 1; } || error_exit "$msg"
    fi
    
    local resources="$DRAGEN_INSTALL_PATH/$RESOURCES_DIR"
    if [[ ! -d "$resources" ]]; then
        local msg="Resources directory not found at: $resources"
        [[ "$interactive" == "true" ]] && { print_error "$msg"; return 1; } || error_exit "$msg"
    fi
    
    print_info "DRAGEN installation validated successfully"
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
    
    set +e
    local installations
    installations=$(detect_dragen_installations 2>&1)
    if [[ $? -eq 0 ]]; then
        echo "$installations"
        echo ""
    fi
    set -e
    
    while true; do
        local input
        input=$(prompt_input "Enter DRAGEN installation path" "/opt/edico")
        DRAGEN_INSTALL_PATH=$(echo "$input" | xargs)
        
        if validate_dragen_path "true"; then
            break
        else
            echo ""
            echo "Please try again."
            echo ""
        fi
    done
}

# ============================================================================
# Credential Management
# ============================================================================

check_environment_credentials() {
    local found_creds=false
    
    if [[ -n "${DRAGEN_SERIAL_NUMBER:-}" ]]; then
        print_info "Found DRAGEN_SERIAL_NUMBER in environment"
        CREDENTIAL_TYPE="on-premise"
        found_creds=true
    elif [[ -n "${DRAGEN_API_KEY_VALUE:-}" ]]; then
        print_info "Found DRAGEN_API_KEY_VALUE in environment"
        CREDENTIAL_TYPE="cloud"
        found_creds=true
    elif [[ -n "${DRAGEN_API_KEY_FILE:-}" ]]; then
        print_info "Found DRAGEN_API_KEY_FILE in environment: ${DRAGEN_API_KEY_FILE}"
        API_KEY_FILE="${DRAGEN_API_KEY_FILE}"
        CREDENTIAL_TYPE="cloud"
        found_creds=true
    elif [[ -n "${NIRVANA_API_KEY:-}" ]] && [[ -n "${NIRVANA_API_SECRET:-}" ]]; then
        print_info "Found NIRVANA_API_KEY and NIRVANA_API_SECRET in environment"
        CREDENTIAL_TYPE="cloud"
        found_creds=true
    elif [[ -n "${DRAGEN_LICENSE_CREDENTIALS_FILE:-}" ]]; then
        print_info "Found DRAGEN_LICENSE_CREDENTIALS_FILE in environment: ${DRAGEN_LICENSE_CREDENTIALS_FILE}"
        LIC_CREDENTIALS_FILE="${DRAGEN_LICENSE_CREDENTIALS_FILE}"
        CREDENTIAL_TYPE="cloud"
        found_creds=true
    fi
    
    [[ "$found_creds" == true ]]
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
}

has_credentials() {
    # Check if any credential source is configured
    if [[ -n "${DRAGEN_SERIAL_NUMBER:-}" ]] || \
       [[ -n "${DRAGEN_API_KEY_VALUE:-}" ]] || \
       [[ -n "${DRAGEN_API_KEY_FILE:-}" ]] || \
       [[ -n "${NIRVANA_API_KEY:-}" && -n "${NIRVANA_API_SECRET:-}" ]] || \
       [[ -n "${DRAGEN_LICENSE_CREDENTIALS_FILE:-}" ]] || \
       [[ -n "$CREDENTIALS_FILE" ]] || \
       [[ -n "$API_KEY_FILE" ]] || \
       [[ -n "$LIC_CREDENTIALS_FILE" ]]; then
        return 0
    fi
    return 1
}

prompt_credential_file() {
    local file_type="$1"
    local prompt_msg="$2"
    
    while true; do
        local file_path
        file_path=$(prompt_input "$prompt_msg")
        
        if [[ -z "$file_path" ]]; then
            print_error "Path cannot be empty"
            if ! prompt_yes_no "Try again?"; then
                return 1
            fi
            continue
        fi
        
        if [[ ! -f "$file_path" ]]; then
            print_error "File not found: $file_path"
            if ! prompt_yes_no "Try again?"; then
                return 1
            fi
            continue
        fi
        
        echo "$file_path"
        return 0
    done
}

setup_onpremise_credentials() {
    local dragen_info="$DRAGEN_INSTALL_PATH/$DRAGEN_INFO_PATH"
    
    if [[ -n "${DRAGEN_SERIAL_NUMBER:-}" ]]; then
        print_info "Using DRAGEN_SERIAL_NUMBER from environment"
        return 0
    fi
    
    # Try to retrieve serial number automatically
    if [[ -f "$dragen_info" ]]; then
        local serial
        serial=$("$dragen_info" -qs 2>/dev/null || echo "")
        
        if [[ -n "$serial" ]]; then
            echo ""
            echo "Retrieved DRAGEN serial number: $serial"
            echo "Setting DRAGEN_SERIAL_NUMBER environment variable for this session"
            echo ""
            
            export DRAGEN_SERIAL_NUMBER="$serial"
            return 0
        fi
    fi
    
    print_error "Could not retrieve DRAGEN serial number automatically"
    return 1
}

setup_cloud_credentials() {
    echo ""
    echo "Cloud DRAGEN requires API credentials."
    echo ""
    echo "Choose credential method:"
    echo "  1. Provide path to lic-credentials file"
    echo "  2. Enter user_id and password manually (set as environment variables)"
    echo "  3. Provide path to existing credentials.json file"
    echo ""
    
    while true; do
        read -r -p "Enter your choice (1, 2, or 3): " choice
        case "$choice" in
            1)
                local lic_file
                lic_file=$(prompt_credential_file "lic-credentials" "Enter path to lic-credentials file")
                if [[ $? -eq 0 ]]; then
                    LIC_CREDENTIALS_FILE="$lic_file"
                    print_info "Using lic-credentials file: $LIC_CREDENTIALS_FILE"
                    return 0
                fi
                ;;
            2)
                local api_key api_secret
                api_key=$(prompt_input "Enter user_id (API Key)")
                api_secret=$(prompt_input "Enter password (API Secret)")
                
                if [[ -z "$api_key" ]] || [[ -z "$api_secret" ]]; then
                    print_error "Both user_id and password are required"
                    if ! prompt_yes_no "Try again?"; then
                        return 1
                    fi
                    continue
                fi
                
                export NIRVANA_API_KEY="$api_key"
                export NIRVANA_API_SECRET="$api_secret"
                
                print_info "Credentials set as environment variables (NIRVANA_API_KEY and NIRVANA_API_SECRET)"
                echo ""
                print_warning "To persist these for future sessions, add to your shell profile (~/.bashrc or ~/.zshrc):"
                echo "  export NIRVANA_API_KEY=\"$api_key\""
                echo "  export NIRVANA_API_SECRET=\"<your_secret>\""
                echo ""
                return 0
                ;;
            3)
                local cred_file
                cred_file=$(prompt_credential_file "credentials.json" "Enter path to credentials.json file")
                if [[ $? -eq 0 ]]; then
                    CREDENTIALS_FILE="$cred_file"
                    print_info "Using credentials file: $CREDENTIALS_FILE"
                    return 0
                fi
                ;;
            *)
                echo "Invalid choice. Please enter 1, 2, or 3."
                ;;
        esac
    done
}

setup_credentials() {
    # First, check if credentials are already specified via CLI arguments
    if [[ -n "$CREDENTIALS_FILE" ]]; then
        [[ ! -f "$CREDENTIALS_FILE" ]] && error_exit "Credentials file not found: $CREDENTIALS_FILE"
        print_info "Using credentials file: $CREDENTIALS_FILE"
        return 0
    fi
    
    if [[ -n "$API_KEY_FILE" ]]; then
        [[ ! -f "$API_KEY_FILE" ]] && error_exit "API key file not found: $API_KEY_FILE"
        print_info "Using API key file: $API_KEY_FILE"
        CREDENTIAL_TYPE="cloud"
        return 0
    fi
    
    if [[ -n "$LIC_CREDENTIALS_FILE" ]]; then
        [[ ! -f "$LIC_CREDENTIALS_FILE" ]] && error_exit "License credentials file not found: $LIC_CREDENTIALS_FILE"
        print_info "Using license credentials file: $LIC_CREDENTIALS_FILE"
        CREDENTIAL_TYPE="cloud"
        return 0
    fi
    
    # Check for credentials in environment variables
    if check_environment_credentials; then
        print_info "Using credentials from environment variables"
        return 0
    fi
    
    # If we're in non-interactive mode and no credentials found, error out
    if [[ "$NON_INTERACTIVE" == true ]]; then
        error_exit "No credentials found. Use --credentials-file, --api-key-file, --lic-credentials, or set environment variables."
    fi
    
    print_section "Step 2: Configure Credentials"
    
    # Detect credential type
    CREDENTIAL_TYPE=$(detect_credential_type)
    echo "Detected DRAGEN installation type: $CREDENTIAL_TYPE"
    echo ""
    
    if ! prompt_yes_no "Is this correct?"; then
        echo ""
        echo "Select installation type:"
        echo "  1. On-premise"
        echo "  2. Cloud"
        echo ""
        
        while true; do
            read -r -p "Enter your choice (1 or 2): " type_choice
            case "$type_choice" in
                1) CREDENTIAL_TYPE="on-premise"; break ;;
                2) CREDENTIAL_TYPE="cloud"; break ;;
                *) echo "Invalid choice. Please enter 1 or 2." ;;
            esac
        done
        echo ""
    fi
    
    # Setup credentials based on type
    if [[ "$CREDENTIAL_TYPE" == "on-premise" ]]; then
        setup_onpremise_credentials
    else
        setup_cloud_credentials
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
    echo ""
    
    DATA_DIRECTORY=$(prompt_input "Enter data directory path" "/data/nirvana_data")
}

# ============================================================================
# Configuration Display and Confirmation
# ============================================================================

get_config_filename() {
    local type="$1"
    local assembly="$2"
    
    case "$type" in
        all) echo "all_annotations_${assembly}.json" ;;
        germline_tagging) echo "germline_tagging_annotations_${assembly}.json" ;;
        tmb) echo "tmb_annotations_${assembly}.json" ;;
        *) echo "unknown_${assembly}.json" ;;
    esac
}

display_credential_source() {
    if [[ -n "${DRAGEN_SERIAL_NUMBER:-}" ]]; then
        echo "  Source: DRAGEN_SERIAL_NUMBER environment variable"
    elif [[ -n "${DRAGEN_API_KEY_VALUE:-}" ]]; then
        echo "  Source: DRAGEN_API_KEY_VALUE environment variable"
    elif [[ -n "${DRAGEN_API_KEY_FILE:-}" ]]; then
        echo "  Source: DRAGEN_API_KEY_FILE environment variable (${DRAGEN_API_KEY_FILE})"
    elif [[ -n "${NIRVANA_API_KEY:-}" && -n "${NIRVANA_API_SECRET:-}" ]]; then
        echo "  Source: NIRVANA_API_KEY + NIRVANA_API_SECRET environment variables"
    elif [[ -n "${DRAGEN_LICENSE_CREDENTIALS_FILE:-}" ]]; then
        echo "  Source: DRAGEN_LICENSE_CREDENTIALS_FILE environment variable (${DRAGEN_LICENSE_CREDENTIALS_FILE})"
    elif [[ -n "$CREDENTIALS_FILE" ]]; then
        echo "  Source: Credentials file - $CREDENTIALS_FILE"
    elif [[ -n "$API_KEY_FILE" ]]; then
        echo "  Source: API key file - $API_KEY_FILE"
    elif [[ -n "$LIC_CREDENTIALS_FILE" ]]; then
        echo "  Source: License credentials file - $LIC_CREDENTIALS_FILE"
    else
        echo "  Source: NOT CONFIGURED"
    fi
}

display_configuration() {
    print_header "Configuration Summary"
    
    echo "DRAGEN Installation:"
    echo "  Path: $DRAGEN_INSTALL_PATH"
    echo ""
    
    echo "Credentials:"
    echo "  Type: $CREDENTIAL_TYPE"
    display_credential_source
    echo ""
    
    echo "Data Directory:"
    echo "  Path: $DATA_DIRECTORY"
    echo "  Status: $([ -d "$DATA_DIRECTORY" ] && echo "Directory exists" || echo "Will be created")"
    echo ""
    
    echo "Assemblies:"
    printf '  - %s\n' "${ASSEMBLIES[@]}"
    echo ""
    
    echo "Annotation Types:"
    for type in "${ANNOTATION_TYPES[@]}"; do
        case "$type" in
            all) echo "  - all (Full variant annotation)" ;;
            germline_tagging) echo "  - germline_tagging (Germline tagging)" ;;
            tmb) echo "  - tmb (Tumor Mutational Burden)" ;;
        esac
    done
    echo ""
    
    echo "Download Commands:"
    local job_count=0
    local datamanager="$DRAGEN_INSTALL_PATH/$DATAMANAGER_PATH"
    
    for assembly in "${ASSEMBLIES[@]}"; do
        for type in "${ANNOTATION_TYPES[@]}"; do
            job_count=$((job_count + 1))
            local config_filename config_path
            config_filename=$(get_config_filename "$type" "$assembly")
            config_path="$DRAGEN_INSTALL_PATH/$RESOURCES_DIR/$config_filename"
            
            echo ""
            echo "  Job $job_count: $type ($assembly)"
            echo "  ----------------------------------------"
            
            # Build the command to display
            local display_cmd="$datamanager download -r $assembly --dir $DATA_DIRECTORY"
            local cred_comment=""
            
            if [[ -n "$CREDENTIALS_FILE" ]]; then
                display_cmd="$display_cmd --credentials-file $CREDENTIALS_FILE"
            elif [[ -n "$API_KEY_FILE" ]]; then
                display_cmd="$display_cmd --api-key-file $API_KEY_FILE"
            elif [[ -n "$LIC_CREDENTIALS_FILE" ]]; then
                display_cmd="$display_cmd --lic-credentials $LIC_CREDENTIALS_FILE"
            elif [[ -n "${DRAGEN_SERIAL_NUMBER:-}" ]]; then
                cred_comment=" # (using DRAGEN_SERIAL_NUMBER from environment)"
            elif [[ -n "${DRAGEN_API_KEY_VALUE:-}" ]]; then
                cred_comment=" # (using DRAGEN_API_KEY_VALUE from environment)"
            elif [[ -n "${DRAGEN_API_KEY_FILE:-}" ]]; then
                cred_comment=" # (using DRAGEN_API_KEY_FILE from environment)"
            elif [[ -n "${NIRVANA_API_KEY:-}" && -n "${NIRVANA_API_SECRET:-}" ]]; then
                cred_comment=" # (using NIRVANA_API_KEY + NIRVANA_API_SECRET from environment)"
            elif [[ -n "${DRAGEN_LICENSE_CREDENTIALS_FILE:-}" ]]; then
                cred_comment=" # (using DRAGEN_LICENSE_CREDENTIALS_FILE from environment)"
            fi
            
            display_cmd="$display_cmd --versions-config $config_path $cred_comment"
            
            echo "  $display_cmd"
        done
    done
    echo ""
    
    if [[ "$DRY_RUN" == true ]]; then
        echo "Mode: DRY RUN (no files will be downloaded)"
        echo ""
    fi
}

confirm_configuration() {
    if [[ "$NON_INTERACTIVE" == true ]]; then
        if [[ "$CREDENTIAL_TYPE" == "cloud" ]] && ! has_credentials; then
            error_exit "Cloud credentials required. Use --credentials-file, --api-key-file, --lic-credentials, or set environment variables."
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
            echo "  1. Review commands and decide"
            echo "  2. Start over"
            echo "  3. Exit without downloading"
            echo ""
            
            read -r -p "> " choice
            case "$choice" in
                1)
                    print_datamanager_commands
                    echo ""
                    if prompt_yes_no "Proceed with downloads?"; then
                        return 0
                    else
                        print_info "Downloads cancelled"
                        exit 0
                    fi
                    ;;
                2)
                    exec "$0"
                    ;;
                3)
                    print_info "Exiting without downloading"
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

build_credential_args() {
    local -n args=$1
    
    if [[ -n "$CREDENTIALS_FILE" ]]; then
        args+=("--credentials-file" "$CREDENTIALS_FILE")
    elif [[ -n "$API_KEY_FILE" ]]; then
        args+=("--api-key-file" "$API_KEY_FILE")
    elif [[ -n "$LIC_CREDENTIALS_FILE" ]]; then
        args+=("--lic-credentials" "$LIC_CREDENTIALS_FILE")
    fi
    # If none specified, DataManager will use environment variables
}

print_datamanager_commands() {
    print_header "DataManager Commands"
    
    echo "You can run the following commands to download annotation data:"
    echo ""
    
    local has_env_creds=false
    [[ -n "${DRAGEN_SERIAL_NUMBER:-}" ]] || \
    [[ -n "${DRAGEN_API_KEY_VALUE:-}" ]] || \
    [[ -n "${DRAGEN_API_KEY_FILE:-}" ]] || \
    [[ -n "${NIRVANA_API_KEY:-}" && -n "${NIRVANA_API_SECRET:-}" ]] || \
    [[ -n "${DRAGEN_LICENSE_CREDENTIALS_FILE:-}" ]] && has_env_creds=true
    
    if [[ "$has_env_creds" == true ]]; then
        echo "Note: Commands will use credentials from environment variables"
        echo ""
    fi
    
    local datamanager="$DRAGEN_INSTALL_PATH/$DATAMANAGER_PATH"
    local cred_arg=""
    
    if [[ -n "$CREDENTIALS_FILE" ]]; then
        cred_arg="--credentials-file $CREDENTIALS_FILE"
    elif [[ -n "$API_KEY_FILE" ]]; then
        cred_arg="--api-key-file $API_KEY_FILE"
    elif [[ -n "$LIC_CREDENTIALS_FILE" ]]; then
        cred_arg="--lic-credentials $LIC_CREDENTIALS_FILE"
    fi
    
    for assembly in "${ASSEMBLIES[@]}"; do
        for type in "${ANNOTATION_TYPES[@]}"; do
            local config_filename config_path
            config_filename=$(get_config_filename "$type" "$assembly")
            config_path="$DRAGEN_INSTALL_PATH/$RESOURCES_DIR/$config_filename"
            
            echo "# Download $type annotations for $assembly"
            echo "$datamanager download \\"
            echo "  -r $assembly \\"
            [[ -n "$cred_arg" ]] && echo "  $cred_arg \\"
            echo "  --dir $DATA_DIRECTORY \\"
            echo "  --versions-config $config_path"
            echo ""
        done
    done
}

download_annotation_data() {
    local assembly="$1"
    local type="$2"
    local config_filename config_path
    
    config_filename=$(get_config_filename "$type" "$assembly")
    config_path="$DRAGEN_INSTALL_PATH/$RESOURCES_DIR/$config_filename"
    
    if [[ ! -f "$config_path" ]]; then
        print_warning "Configuration file not found: $config_path"
        return 1
    fi
    
    local datamanager="$DRAGEN_INSTALL_PATH/$DATAMANAGER_PATH"
    
    print_info "Downloading $type annotations for $assembly"
    print_info "Using config: $config_filename"
    
    local dm_cmd=("$datamanager" "download" "-r" "$assembly" "--dir" "$DATA_DIRECTORY" "--versions-config" "$config_path")
    build_credential_args dm_cmd
    
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
    
    local total=0 successful=0 failed=0
    
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
    
    [[ $failed -gt 0 ]] && print_warning "Some downloads failed. Check the logs above."
    [[ $successful -eq 0 ]] && error_exit "No annotation data was downloaded successfully"
}

# ============================================================================
# Final Instructions
# ============================================================================

show_next_steps() {
    print_header "Setup Complete"
    
    if [[ "$DRY_RUN" == true ]]; then
        echo "This was a dry run. Remove --dry-run to perform actual downloads."
        echo ""
        return
    fi
    
    echo "Annotation data downloaded to: $DATA_DIRECTORY"
    echo ""
    echo "To annotate variants with DRAGEN:"
    echo ""
    echo "  dragen \\"
    echo "    --enable-variant-annotation true \\"
    echo "    --variant-annotation-data $DATA_DIRECTORY \\"
    echo "    --variant-annotation-assembly <assembly> \\"
    echo "    [... other parameters ...]"
    echo ""
    echo "Where <assembly> is one of: ${ASSEMBLIES[*]}"
    echo ""
}

# ============================================================================
# Command Line Argument Parsing
# ============================================================================

parse_arguments() {
    while [[ $# -gt 0 ]]; do
        case "$1" in
            --help) show_usage ;;
            --dragen-path) DRAGEN_INSTALL_PATH="$2"; shift 2 ;;
            --data-dir) DATA_DIRECTORY="$2"; shift 2 ;;
            --assemblies) IFS=',' read -ra ASSEMBLIES <<< "$2"; shift 2 ;;
            --annotation-types) IFS=',' read -ra ANNOTATION_TYPES <<< "$2"; shift 2 ;;
            --credentials-file) CREDENTIALS_FILE="$2"; shift 2 ;;
            --api-key-file) API_KEY_FILE="$2"; shift 2 ;;
            --lic-credentials) LIC_CREDENTIALS_FILE="$2"; shift 2 ;;
            --dry-run) DRY_RUN=true; shift ;;
            --non-interactive) NON_INTERACTIVE=true; shift ;;
            *) error_exit "Unknown option: $1. Use --help for usage information." ;;
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
    echo "This assistant will help you configure credentials and download annotation data."
    echo ""
    
    parse_arguments "$@"
    
    [[ ${#ANNOTATION_TYPES[@]} -gt 0 ]] && remove_redundant_annotation_types
    
    if [[ "$NON_INTERACTIVE" == false && -z "$DRAGEN_INSTALL_PATH" ]]; then
        echo "Setup steps:"
        echo "  1. Select DRAGEN installation"
        echo "  2. Configure credentials (environment variables)"
        echo "  3. Choose reference assemblies"
        echo "  4. Choose annotation types"
        echo "  5. Specify download directory"
        echo ""
        
        if ! prompt_yes_no "Ready to begin?"; then
            echo "Setup cancelled."
            exit 0
        fi
    fi
    
    prompt_dragen_path
    validate_dragen_path
    setup_credentials
    prompt_assemblies
    prompt_annotation_types
    prompt_data_directory
    
    display_configuration
    confirm_configuration
    execute_downloads
    show_next_steps
    
    print_info "Provisioning completed successfully!"
}

main "$@"
