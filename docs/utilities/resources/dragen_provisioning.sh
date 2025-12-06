#!/bin/bash

# DRAGEN Provisioning Script
# Automates setup of Illumina Connected Annotations for DRAGEN
# Refer to getting-started-dragen.md for details

set -e

# ============================================================================
# Configuration and Constants
# ============================================================================
YEAR=$(date +"%Y")
VERSION="1.0.1"

# DRAGEN paths
RESOURCES_DIR="resources/annotation"
DATAMANAGER_PATH="share/nirvana/DataManager"
DRAGEN_INFO_PATH="bin/dragen_info"

# User inputs (populated from CLI args or prompts)
DRAGEN_INSTALL_PATH=""
DATA_DIRECTORY=""
ASSEMBLIES=()
CONFIG_FILES=()
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
  1. Select DRAGEN installation path
  2. Configure credentials via environment variables or files
  3. Choose reference assemblies (GRCh37, GRCh38, etc.)
  4. Specify download directory
  5. Auto-discover annotation configuration files
  6. Download annotation data files

USAGE:
  $0 [options]

MODES:
  Interactive:  Run without arguments for guided setup
  CLI:          Provide all required arguments for automation

OPTIONS:
  --dragen-path <path>          Path to DRAGEN installation
  --data-dir <path>             Directory for annotation data
  --assemblies <list>           Comma-separated assemblies (e.g., GRCh37,GRCh38)
                                Default: all available assemblies
  --credentials-file <path>     Path to credentials.json (passed to DataManager)
  --api-key-file <path>         Path to API key file (passed to DataManager)
  --lic-credentials <path>      Path to DRAGEN license credentials file (passed to DataManager)
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

  # Using credential file (passed to DataManager)
  $0 --dragen-path /opt/edico --data-dir /data/nirvana_data \\
     --lic-credentials /path/to/lic_credentials

  # Specify assemblies and dry run
  $0 --dragen-path /opt/dragen/4.4.3 --data-dir /data/nirvana_data \\
     --assemblies GRCh37,GRCh38 --dry-run

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
        read -r -p "$prompt [Y/n]: " response
        # Default to yes if empty
        if [[ -z "$response" ]]; then
            return 0
        fi
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
        echo "Press Enter for default (all), or enter comma-separated numbers or names" >&2
        echo "Examples: '1,2' or 'GRCh37,GRCh38' or '1,GRCh38'" >&2
    else
        echo "  a. All of the above" >&2
        echo "" >&2
        echo "Enter your selection (comma-separated numbers/names or 'a')" >&2
        echo "Examples: '1,2' or 'GRCh37,GRCh38'" >&2
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
        local found_valid=false
        for sel in "${selections[@]}"; do
            sel=$(echo "$sel" | xargs)
            
            # Check if it's a number (existing behavior)
            if [[ "$sel" =~ ^[0-9]+$ ]] && [[ "$sel" -ge 1 ]] && [[ "$sel" -le "${#options[@]}" ]]; then
                selected+=("${options[$((sel-1))]}")
                found_valid=true
            else
                # Check if it's an actual option name (new behavior)
                local matched=false
                for option in "${options[@]}"; do
                    # Case-insensitive match
                    if [[ "${option,,}" == "${sel,,}" ]]; then
                        selected+=("$option")
                        matched=true
                        found_valid=true
                        break
                    fi
                done
                
                if [[ "$matched" == false ]]; then
                    print_warning "Invalid selection ignored: '$sel'"
                fi
            fi
        done
        
        if [[ "$found_valid" == false ]] || [[ ${#selected[@]} -eq 0 ]]; then
            print_error "No valid selections made"
            return 1
        fi
    fi
    
    # Remove duplicates while preserving order
    local -A seen
    local unique_selected=()
    for item in "${selected[@]}"; do
        if [[ -z "${seen[$item]}" ]]; then
            unique_selected+=("$item")
            seen[$item]=1
        fi
    done
    
    printf '%s\n' "${unique_selected[@]}"
}

# ============================================================================
# DRAGEN Detection and Validation
# ============================================================================

detect_dragen_installations() {
    if ! command -v dragen_versions >/dev/null 2>&1; then
        return 1
    fi
    
    local json_output
    json_output=$(dragen_versions --json 2>/dev/null) || return 1
    
    # Check if jq is available for JSON parsing
    if ! command -v jq >/dev/null 2>&1; then
        # Fallback to basic parsing without jq
        echo "$json_output" | grep -v "bitstream" | grep "\"instprefixes\"" -A 1 | grep -o '"/[^"]*"' | tr -d '"' 2>/dev/null || return 1
        return 0
    fi
    
    # Parse JSON with jq, filtering out bitstream packages and returning only paths
    echo "$json_output" | jq -r '
        .packages // {} | 
        to_entries[] | 
        select(.value.properties.category != "bitstream") |
        (.value.properties.root // .value.instprefixes[0] // empty)
    ' 2>/dev/null
    
    return 0
}

validate_dragen_path() {
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
    
    # Try to auto-detect DRAGEN installations
    set +e
    local -a detected_paths
    mapfile -t detected_paths < <(detect_dragen_installations 2>/dev/null)
    local detect_result=$?
    set -e
    
    if [[ $detect_result -eq 0 ]] && [[ ${#detected_paths[@]} -gt 0 ]]; then
        # Show what was detected
        echo "Detected DRAGEN installations:"
        printf '  - %s\n' "${detected_paths[@]}"
        echo ""
        
        # If only one installation found, use it automatically
        if [[ ${#detected_paths[@]} -eq 1 ]]; then
            DRAGEN_INSTALL_PATH="${detected_paths[0]}"
            print_info "Using detected DRAGEN installation: $DRAGEN_INSTALL_PATH"
            echo ""
            
            if validate_dragen_path "true"; then
                return 0
            else
                print_warning "Auto-detected path failed validation, will prompt for manual entry"
                DRAGEN_INSTALL_PATH=""
            fi
        else
            # Multiple installations found, let user choose
            echo "Multiple DRAGEN installations detected."
            echo ""
            
            set +e
            mapfile -t selection < <(prompt_multiselect "Select DRAGEN installation:" "required" "${detected_paths[@]}")
            local select_result=$?
            set -e
            
            # Check if selection was successful
            if [[ $select_result -eq 0 ]] && [[ ${#selection[@]} -gt 0 ]]; then
                DRAGEN_INSTALL_PATH="${selection[0]}"
                echo ""
                print_info "Selected: $DRAGEN_INSTALL_PATH"
                echo ""
            fi
        fi
    fi
    
    # Fallback to manual entry
    while true; do
        local input
        input=$(prompt_input "Enter DRAGEN installation path" "/opt/edico")
        DRAGEN_INSTALL_PATH=$(echo "$input" | xargs)
        
        if validate_dragen_path "true"; then
            break
        else
            echo ""
            echo "Please try again."
            if [[ ${#detected_paths[@]} -gt 0 ]]; then
                echo "Detected DRAGEN installations:"
                printf '  - %s\n' "${detected_paths[@]}"
            fi
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
    echo "  1. Provide path to license credentials file"
    echo "  2. Enter API key and secret manually (set as environment variables)"
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
                api_key=$(prompt_input "Enter API key (user_id)")
                api_secret=$(prompt_input "Enter API secret (password)")
                
                if [[ -z "$api_key" ]] || [[ -z "$api_secret" ]]; then
                    print_error "Both API key and secret are required"
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
            echo ""
            print_info "Selected assemblies: ${ASSEMBLIES[*]}"
            break
        else
            print_error "At least one assembly must be selected"
            echo ""
        fi
    done
}

discover_annotation_files() {
    print_section "Discovering Annotation Configuration Files"
    
    if [[ ${#ASSEMBLIES[@]} -eq 0 ]]; then
        error_exit "No assemblies selected. Cannot discover annotation files."
    fi
    
    local resources="$DRAGEN_INSTALL_PATH/$RESOURCES_DIR"
    CONFIG_FILES=()
    
    # Discover all annotation files for the selected assemblies
    for assembly in "${ASSEMBLIES[@]}"; do
        print_info "Searching for annotation files for $assembly..."
        
        # Find all JSON files matching this assembly and sort them
        while IFS= read -r config; do
            [[ -z "$config" ]] && continue
            CONFIG_FILES+=("$config")
            echo "  - $(basename "$config")"
        done < <(find "$resources" -name "*${assembly}.json" -type f 2>/dev/null | sort)
        
        if [[ ${#CONFIG_FILES[@]} -eq 0 ]]; then
            print_warning "No annotation configuration files found for assembly: $assembly"
        fi
    done
    
    if [[ ${#CONFIG_FILES[@]} -eq 0 ]]; then
        error_exit "No annotation files found for selected assemblies: ${ASSEMBLIES[*]}"
    fi
    
    echo ""
    print_info "Total configuration files to process: ${#CONFIG_FILES[@]}"
}

prompt_data_directory() {
    if [[ -n "$DATA_DIRECTORY" ]]; then
        print_info "Using data directory: $DATA_DIRECTORY"
        return 0
    fi
    
    print_section "Specify Data Directory"
    
    echo "This directory will store all downloaded annotation files."
    echo ""
    
    DATA_DIRECTORY=$(prompt_input "Enter data directory path" "/data/nirvana_data")
}

# ============================================================================
# Configuration Display and Confirmation
# ============================================================================
display_credential_source() {
    if [[ -n "${DRAGEN_SERIAL_NUMBER:-}" ]]; then
        echo "  Source: DRAGEN_SERIAL_NUMBER environment variable"
    elif [[ -n "${DRAGEN_API_KEY_VALUE:-}" ]]; then
        echo "  Source: DRAGEN_API_KEY_VALUE environment variable"
    elif [[ -n "$API_KEY_FILE" ]]; then
        echo "  Source: API key file - $API_KEY_FILE"
    elif [[ -n "${DRAGEN_API_KEY_FILE:-}" ]]; then
        echo "  Source: DRAGEN_API_KEY_FILE environment variable (${DRAGEN_API_KEY_FILE})"
    elif [[ -n "${NIRVANA_API_KEY:-}" ]] && [[ -n "${NIRVANA_API_SECRET:-}" ]]; then
        echo "  Source: NIRVANA_API_KEY + NIRVANA_API_SECRET environment variables"
    elif [[ -n "$LIC_CREDENTIALS_FILE" ]]; then
        echo "  Source: License credentials file - $LIC_CREDENTIALS_FILE"
    elif [[ -n "${DRAGEN_LICENSE_CREDENTIALS_FILE:-}" ]]; then
        echo "  Source: DRAGEN_LICENSE_CREDENTIALS_FILE environment variable (${DRAGEN_LICENSE_CREDENTIALS_FILE})"
    elif [[ -n "$CREDENTIALS_FILE" ]]; then
        echo "  Source: Credentials file - $CREDENTIALS_FILE"
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
    
    echo "Configuration Files:"
    for config in "${CONFIG_FILES[@]}"; do
        echo "  - $(basename "$config")"
    done
    echo ""
    
    echo "Download Commands:"
    local job_count=0
    
    for config_path in "${CONFIG_FILES[@]}"; do
        job_count=$((job_count + 1))
        local config_filename assembly
        config_filename=$(basename "$config_path")
        assembly=$(echo "$config_filename" | grep -oE 'GRCh[0-9]+|hg[0-9]+' || echo "unknown")
        
        echo ""
        echo "  Command $job_count: $config_filename"
        
        # Build and format the command to display
        local display_cmd
        build_datamanager_command "$config_path" display_cmd
        format_command_with_credentials display_cmd "  "
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
    
    echo ""
    if prompt_yes_no "Proceed with this configuration?"; then
        return 0
    else
        echo ""
        print_info "Setup cancelled. You can run the above commands manually."
        echo ""
#        print_datamanager_commands
        exit 0
    fi
}

# ============================================================================
# Download Operations
# ============================================================================

build_datamanager_command() {
    local config_path="$1"
    local -n cmd_array=$2
    
    local config_filename assembly
    config_filename=$(basename "$config_path")
    assembly=$(echo "$config_filename" | grep -oE 'GRCh[0-9]+|hg[0-9]+' || echo "unknown")
    
    local datamanager="$DRAGEN_INSTALL_PATH/$DATAMANAGER_PATH"
    
    cmd_array=("$datamanager" "download" "-r" "$assembly" "--dir" "$DATA_DIRECTORY")
    
    # Add credential arguments
    if [[ -n "$CREDENTIALS_FILE" ]]; then
        cmd_array+=("--credentials-file" "$CREDENTIALS_FILE")
    elif [[ -n "$API_KEY_FILE" ]]; then
        cmd_array+=("--api-key-file" "$API_KEY_FILE")
    elif [[ -n "$LIC_CREDENTIALS_FILE" ]]; then
        cmd_array+=("--lic-credentials" "$LIC_CREDENTIALS_FILE")
    fi
    # If none specified, DataManager will use environment variables
    
    cmd_array+=("--versions-config" "$config_path")
}

get_credential_comment() {
    if [[ -n "$CREDENTIALS_FILE" ]] || [[ -n "$API_KEY_FILE" ]] || [[ -n "$LIC_CREDENTIALS_FILE" ]]; then
        echo ""
    elif [[ -n "${DRAGEN_SERIAL_NUMBER:-}" ]]; then
        echo " # (using DRAGEN_SERIAL_NUMBER from environment)"
    elif [[ -n "${DRAGEN_API_KEY_VALUE:-}" ]]; then
        echo " # (using DRAGEN_API_KEY_VALUE from environment)"
    elif [[ -n "${DRAGEN_API_KEY_FILE:-}" ]]; then
        echo " # (using DRAGEN_API_KEY_FILE from environment)"
    elif [[ -n "${NIRVANA_API_KEY:-}" && -n "${NIRVANA_API_SECRET:-}" ]]; then
        echo " # (using NIRVANA_API_KEY + NIRVANA_API_SECRET from environment)"
    elif [[ -n "${DRAGEN_LICENSE_CREDENTIALS_FILE:-}" ]]; then
        echo " # (using DRAGEN_LICENSE_CREDENTIALS_FILE from environment)"
    else
        echo ""
    fi
}

format_command_with_credentials() {
    local cmd_array_name=$1
    local indent="${3:-}"
    local -n cmd_ref=$cmd_array_name
    
    # Prepend export for specific env variables (with actual values)
    if [[ -n "${DRAGEN_SERIAL_NUMBER:-}" ]]; then
        echo "${indent}export DRAGEN_SERIAL_NUMBER=\"${DRAGEN_SERIAL_NUMBER}\" && ${cmd_ref[*]}"
    elif [[ -n "${DRAGEN_API_KEY_FILE:-}" ]]; then
        echo "${indent}export DRAGEN_API_KEY_FILE=\"${DRAGEN_API_KEY_FILE}\" && ${cmd_ref[*]}"
    elif [[ -n "${DRAGEN_LICENSE_CREDENTIALS_FILE:-}" ]]; then
        echo "${indent}export DRAGEN_LICENSE_CREDENTIALS_FILE=\"${DRAGEN_LICENSE_CREDENTIALS_FILE}\" && ${cmd_ref[*]}"
    else
        echo "${indent}${cmd_ref[*]}$(get_credential_comment)"
    fi
}

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

download_annotation_data() {
    local config_path="$1"
    
    if [[ ! -f "$config_path" ]]; then
        print_warning "Configuration file not found: $config_path"
        return 1
    fi
    
    local config_filename assembly
    config_filename=$(basename "$config_path")
    assembly=$(echo "$config_filename" | grep -oE 'GRCh[0-9]+|hg[0-9]+' || echo "unknown")
    
    print_info "Processing: $config_filename"
    print_info "Assembly: $assembly"
    
    # Build the command using the single source of truth
    local dm_cmd
    build_datamanager_command "$config_path" dm_cmd
    
    if [[ "$DRY_RUN" == true ]]; then
        print_info "DRY RUN: Would execute:"
        echo "  ${dm_cmd[*]}"
        return 0
    fi
    
    echo ""
    if "${dm_cmd[@]}"; then
        print_info "Successfully downloaded annotations from $config_filename"
        return 0
    else
        print_error "Failed to download annotations from $config_filename"
        return 1
    fi
}

execute_downloads() {
    print_header "Downloading Annotation Data"
    
    if [[ ! -d "$DATA_DIRECTORY" ]]; then
        print_info "Creating data directory: $DATA_DIRECTORY"
        mkdir -p "$DATA_DIRECTORY" || error_exit "Failed to create data directory"
    fi
    
    local total=${#CONFIG_FILES[@]}
    local successful=0 failed=0
    local job_count=0
    
    for config_path in "${CONFIG_FILES[@]}"; do
        job_count=$((job_count + 1))
        local config_filename
        config_filename=$(basename "$config_path")
        
        echo ""
        print_section "Download $job_count of $total: $config_filename"
        
        if download_annotation_data "$config_path"; then
            successful=$((successful + 1))
        else
            failed=$((failed + 1))
        fi
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
    echo "This assistant will help you:"
    echo "  - Select your DRAGEN installation"
    echo "  - Configure authentication credentials"
    echo "  - Choose reference genome assemblies"
    echo "  - Specify download directory"
    echo "  - Discover annotation configuration files"
    echo "  - Download annotation data files"
    echo ""
    
    parse_arguments "$@"
    
    if [[ "$NON_INTERACTIVE" == false && -z "$DRAGEN_INSTALL_PATH" ]]; then
#        echo "Setup process:"
#        echo "  1. Select DRAGEN installation"
#        echo "  2. Configure credentials"
#        echo "  3. Choose reference assemblies"
#        echo "  4. Specify download directory"
#        echo "  5. Auto-discover configuration files"
#        echo ""
        
        if ! prompt_yes_no "Ready to begin?"; then
            echo "Setup cancelled."
            exit 0
        fi
    fi
    
    prompt_dragen_path
#    validate_dragen_path
    setup_credentials
    prompt_assemblies
    discover_annotation_files
    prompt_data_directory
    
    display_configuration
    confirm_configuration
    execute_downloads
    show_next_steps
    
    print_info "Provisioning completed successfully!"
}

main "$@"
