#!/bin/bash

# DRAGEN Provisioning Script
# This script automates the setup of Illumina Connected Annotations for DRAGEN
# Based on the getting-started-dragen.md documentation

set -eu  # Exit on any error

# Default values
DRAGEN_INSTALL_PATH=""
DATA_DIRECTORY=""
ASSEMBLIES=("GRCh37" "GRCh38")
ANNOTATION_TYPES=()
SERIAL_NUMBER=""

# Constants for better maintainability
RESOURCES_DIR="resources/annotation"
DATAMANAGER_PATH="share/nirvana/DataManager"
DRAGEN_INFO_PATH="bin/dragen_info"

# Function to show usage
show_usage() {
    echo "Usage: $0 --dragen-path <path> --data-dir <path> [options]"
    echo ""
    echo "Required arguments:"
    echo "  --dragen-path <path>     Path to DRAGEN installation directory"
    echo "  --data-dir <path>        Directory where annotation data will be stored"
    echo ""
    echo "Optional arguments:"
    echo "  --assemblies <list>      Comma-separated list of assemblies (default: GRCh37,GRCh38)"
    echo "  --annotation-types <list> Comma-separated list of annotation types (default: auto)"
    echo "  --help                   Show this help message"
    echo ""
    echo "Finding DRAGEN path:"
    echo "  Run 'dragen_versions' command to see available DRAGEN installations"
    echo "  Use one of the displayed paths as the --dragen-path argument"
    echo ""
    echo "Annotation type files location:"
    echo "  Annotation type files are located in: <dragen-path>/$RESOURCES_DIR/"
    echo "  Example: /opt/dragen/$RESOURCES_DIR/all_annotations_GRCh38.json"
    echo ""
    echo "Annotation types:"
    echo "  auto                   - Auto-discover and use all available annotation types (default)"
    echo "  full                   - Full variant annotation files only (all_annotations_*)"
    echo "  germline_tagging       - Germline tagging annotation files only (germline_tagging_annotations_*)"
    echo "  tmb                    - TMB annotation files only (tmb_annotations_*)"
    echo ""
    echo "Note: If 'auto' is included in the list, other types are ignored."
    echo "      You can combine types like: full,tmb or germline_tagging,tmb"
    echo ""
    echo "Examples:"
    echo "  $0 --dragen-path /opt/dragen --data-dir /path/to/nirvana_data"
    echo "  $0 --dragen-path /opt/dragen --data-dir /path/to/nirvana_data --assemblies GRCh38"
    echo "  $0 --dragen-path /opt/dragen --data-dir /path/to/nirvana_data --annotation-types full"
    echo "  $0 --dragen-path /opt/dragen --data-dir /path/to/nirvana_data --annotation-types full,tmb"
    echo "  $0 --dragen-path /opt/dragen --data-dir /path/to/nirvana_data --assemblies GRCh37,GRCh38 --annotation-types auto"
    exit 1
}

# Function to show error and exit
error_exit() {
    local message="$1"
    local exit_code="${2:-1}"
    echo "Error: $message" >&2
    exit "$exit_code"
}

# Function to show warning
show_warning() {
    local message="$1"
    echo "Warning: $message" >&2
}

# Function to show available DRAGEN installations
show_dragen_installations() {
    echo ""
    echo "Available DRAGEN installations:"
    local versions
    if versions=$(dragen_versions 2>/dev/null); then
        echo "$versions"
    else
        echo "Could not retrieve DRAGEN installations"
    fi
    echo ""
    echo "Please select a valid path from the list above and update your command accordingly."
}

# Function to parse command line arguments
parse_arguments() {
    while [[ $# -gt 0 ]]; do
        case $1 in
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
            --help)
                show_usage
                ;;
            *)
                error_exit "Unknown option: $1"
                ;;
        esac
    done

    # Validate required arguments
    if [[ -z "$DRAGEN_INSTALL_PATH" || -z "$DATA_DIRECTORY" ]]; then
        show_usage
        error_exit "--dragen-path and --data-dir are required"
    fi
}

# Function to check if command exists in PATH
check_command() {
    local command_name="$1"
    local error_message="$2"
    
    if ! command -v "$command_name" >/dev/null 2>&1; then
        error_exit "$error_message"
    fi
}

# Function to check if dragen_versions is available in PATH
check_dragen_versions() {
    check_command "dragen_versions" \
        "dragen_versions not found in PATH. Please ensure DRAGEN is properly installed and dragen_versions is available in your PATH. If DRAGEN is not installed, please install it first."
}

# Function to check if DRAGEN installation path exists
check_dragen_path() {
    if [[ ! -d "$DRAGEN_INSTALL_PATH" ]]; then
        echo "Error: DRAGEN installation path does not exist: $DRAGEN_INSTALL_PATH"
        show_dragen_installations
        error_exit "Invalid DRAGEN installation path"
    fi
}

# Function to check if DataManager exists
check_datamanager() {
    local datamanager_path="$DRAGEN_INSTALL_PATH/$DATAMANAGER_PATH"
    if [[ ! -f "$datamanager_path" ]]; then
        echo "Error: DataManager not found at: $datamanager_path"
        echo "This suggests the specified DRAGEN path may be incorrect or incomplete."
        show_dragen_installations
        error_exit "DataManager not found"
    fi
}

# Function to get resources directory path
get_resources_dir() {
    echo "$DRAGEN_INSTALL_PATH/$RESOURCES_DIR"
}

# Function to check if resources directory exists
check_resources_dir() {
    local resources_dir
    resources_dir=$(get_resources_dir)
    
    if [[ ! -d "$resources_dir" ]]; then
        error_exit "Annotation resources directory not found: $resources_dir"
    fi
}

# Function to find config files
find_config_files() {
    local resources_dir
    resources_dir=$(get_resources_dir)
    
    local config_files=($(find "$resources_dir" -name "*.json" -type f))
    
    if [[ ${#config_files[@]} -eq 0 ]]; then
        error_exit "No annotation config files found in $resources_dir"
    fi
    
    echo "${config_files[@]}"
}

# Function to extract assembly from filename
extract_assembly() {
    local filename="$1"
    local basename
    basename=$(basename "$filename" .json)
    echo "$basename" | grep -oE '_(GRCh[0-9]+|hg[0-9]+)$' | sed 's/^_//'
}

# Function to extract annotation type from filename
extract_annotation_type() {
    local filename="$1"
    local basename
    basename=$(basename "$filename" .json)
    echo "$basename" | sed -E 's/_(GRCh[0-9]+|hg[0-9]+)$//'
}

# Function to discover available assemblies from config files
discover_assemblies() {
    local config_files
    read -ra config_files <<< "$(find_config_files)"
    
    local available_assemblies=()
    for file in "${config_files[@]}"; do
        local assembly
        assembly=$(extract_assembly "$file")
        if [[ -n "$assembly" && ! " ${available_assemblies[@]} " =~ " ${assembly} " ]]; then
            available_assemblies+=("$assembly")
        fi
    done
    
    # Ensure we have at least one available assembly
    if [[ ${#available_assemblies[@]} -eq 0 ]]; then
        error_exit "Could not extract assemblies from config files"
    fi
    
    echo "Available assemblies: ${available_assemblies[*]}"
    printf '%s\n' "${available_assemblies[@]}"
}

# Function to validate user-specified assemblies
validate_assemblies() {
    local available_assemblies=()
    readarray -t available_assemblies < <(discover_assemblies | tail -n +2)
    
    local valid_assemblies=()
    for assembly in "${ASSEMBLIES[@]}"; do
        local found=false
        for available_assembly in "${available_assemblies[@]}"; do
            if [[ "$assembly" == "$available_assembly" ]]; then
                found=true
                valid_assemblies+=("$assembly")
                break
            fi
        done
        if [[ "$found" == false ]]; then
            show_warning "Assembly '$assembly' not found in available assemblies: ${available_assemblies[*]}"
        fi
    done
    
    # Update ASSEMBLIES to only include valid ones
    if [[ ${#valid_assemblies[@]} -eq 0 ]]; then
        error_exit "No valid assemblies specified. Available assemblies: ${available_assemblies[*]}"
    fi
    
    ASSEMBLIES=("${valid_assemblies[@]}")
    echo "Valid assemblies to process: ${ASSEMBLIES[*]}"
}

# Function to discover available annotation types from config files
discover_annotation_types() {
    local config_files
    read -ra config_files <<< "$(find_config_files)"
    
    # Extract base names by removing assembly suffix and .json extension
    local discovered_types=()
    for file in "${config_files[@]}"; do
        local annotation_type
        annotation_type=$(extract_annotation_type "$file")
        if [[ -n "$annotation_type" && ! " ${discovered_types[@]} " =~ " ${annotation_type} " ]]; then
            discovered_types+=("$annotation_type")
        fi
    done
    
    # Ensure we have at least one discovered type
    if [[ ${#discovered_types[@]} -eq 0 ]]; then
        error_exit "Could not extract annotation types from config files"
    fi
    
    echo "Available annotation types: ${discovered_types[*]}"
    printf '%s\n' "${discovered_types[@]}"
}

# Function to process and validate user-specified annotation types
process_annotation_types() {
    local discovered_types=()
    readarray -t discovered_types < <(discover_annotation_types | tail -n +2)
    
    # If no annotation types were specified, use auto (discover all)
    if [[ ${#ANNOTATION_TYPES[@]} -eq 0 ]]; then
        ANNOTATION_TYPES=("auto")
        echo "No annotation types specified, using auto-discovery"
    fi
    
    # Process the specified annotation types
    local processed_types=()
    local has_auto=false
    
    for type in "${ANNOTATION_TYPES[@]}"; do
        case "$type" in
            "auto")
                has_auto=true
                echo "Auto-discovery enabled - will use all available annotation types"
                break
                ;;
            "full")
                if [[ " ${discovered_types[@]} " =~ " all_annotations " ]]; then
                    processed_types+=("all_annotations")
                    echo "Added: full -> all_annotations"
                else
                    show_warning "all_annotations not found in available types"
                fi
                ;;
            "germline_tagging")
                if [[ " ${discovered_types[@]} " =~ " germline_tagging_annotations " ]]; then
                    processed_types+=("germline_tagging_annotations")
                    echo "Added: germline_tagging -> germline_tagging_annotations"
                else
                    show_warning "germline_tagging_annotations not found in available types"
                fi
                ;;
            "tmb")
                if [[ " ${discovered_types[@]} " =~ " tmb_annotations " ]]; then
                    processed_types+=("tmb_annotations")
                    echo "Added: tmb -> tmb_annotations"
                else
                    show_warning "tmb_annotations not found in available types"
                fi
                ;;
            *)
                show_warning "Unknown annotation type '$type', ignoring"
                ;;
        esac
    done
    
    # If auto is specified, use all discovered types; otherwise use processed types
    if [[ "$has_auto" == true ]]; then
        ANNOTATION_TYPES=("${discovered_types[@]}")
        echo "Using all discovered annotation types: ${ANNOTATION_TYPES[*]}"
    else
        if [[ ${#processed_types[@]} -eq 0 ]]; then
            error_exit "No valid annotation types specified. Available types: ${discovered_types[*]}"
        fi
        ANNOTATION_TYPES=("${processed_types[@]}")
        echo "Using specified annotation types: ${ANNOTATION_TYPES[*]}"
    fi
    
    echo "Final selected types: ${ANNOTATION_TYPES[*]}"
}

# Function to check prerequisites
check_prerequisites() {
    echo "Checking prerequisites..."
    
    # Check basic DRAGEN requirements
    check_dragen_versions
    check_dragen_path
    check_datamanager
    check_resources_dir
    
    # Validate assemblies and annotation types
    echo "Validating assemblies and annotation types..."
    validate_assemblies
    process_annotation_types
    
    echo "Prerequisites check passed"
}

# Function to get DRAGEN serial number
get_serial_number() {
    echo "Getting DRAGEN serial number..."
    
    local dragen_info_path="$DRAGEN_INSTALL_PATH/$DRAGEN_INFO_PATH"
    if [[ -f "$dragen_info_path" ]]; then
        SERIAL_NUMBER=$("$dragen_info_path" -b | grep Serial | awk '{print $3}')
        if [[ -n "$SERIAL_NUMBER" ]]; then
            echo "DRAGEN Serial Number: $SERIAL_NUMBER"
        else
            error_exit "Could not retrieve DRAGEN serial number"
        fi
    else
        error_exit "dragen_info not found at: $dragen_info_path"
    fi
}

# Function to create credentials file
create_credentials() {
    echo "Creating credentials file..."
    
    local credentials_file="$DATA_DIRECTORY/credentials.json"
    cat > "$credentials_file" << EOF
{
  "DragenSerialNo": "$SERIAL_NUMBER"
}
EOF
    echo "Credentials file created: $credentials_file"
}

# Function to download annotation data for a specific assembly and type
download_annotation_data() {
    local assembly="$1"
    local annotation_type="$2"
    
    echo "Downloading $annotation_type for $assembly..."
    
    local config_file
    config_file=$(get_resources_dir)/${annotation_type}_${assembly}.json
    
    if [[ ! -f "$config_file" ]]; then
        show_warning "Config file not found: $config_file"
        return 1
    fi
    
    echo "Using config file: $config_file"
    
    local datamanager_path="$DRAGEN_INSTALL_PATH/$DATAMANAGER_PATH"
    echo "$datamanager_path for downloading"

    if "$datamanager_path" download \
        -r "$assembly" \
        --credentials-file "$DATA_DIRECTORY/credentials.json" \
        --dir "$DATA_DIRECTORY" \
        --versions-config "$config_file"; then
        echo "Successfully downloaded $annotation_type for $assembly"
        return 0
    else
        echo "Failed to download $annotation_type for $assembly"
        return 1
    fi
}

# Function to download all annotation data
download_all_annotations() {
    echo "Starting download of annotation data..."
    echo "This may take a while depending on your internet connection..."
    
    local success_count=0
    local total_count=0
    
    for assembly in "${ASSEMBLIES[@]}"; do
        for annotation_type in "${ANNOTATION_TYPES[@]}"; do
            total_count=$((total_count + 1))
            if download_annotation_data "$assembly" "$annotation_type"; then
                success_count=$((success_count + 1))
            fi
        done
    done
    
    echo "Download completed: $success_count/$total_count successful"
    
    if [[ $success_count -gt 0 ]]; then
        echo "Annotation data download completed successfully!"
        echo "Data directory: $DATA_DIRECTORY"
        echo "You can now use this directory with DRAGEN using:"
        echo "  --variant-annotation-data $DATA_DIRECTORY"
        echo "  --variant-annotation-assembly <assembly>"
    else
        error_exit "No annotation data was downloaded successfully"
    fi
}

# Main function
main() {
    echo "DRAGEN Provisioning Script"
    echo "========================="
    
    parse_arguments "$@"
    
    echo "Configuration:"
    echo "  DRAGEN path: $DRAGEN_INSTALL_PATH"
    echo "  Data directory: $DATA_DIRECTORY"
    echo "  Assemblies: ${ASSEMBLIES[*]}"
    echo ""
    
    # Check prerequisites first
    check_prerequisites
    
    # Get serial number
    get_serial_number
    
    # Create data directory if it doesn't exist
    if [[ ! -d "$DATA_DIRECTORY" ]]; then
        echo "Creating data directory: $DATA_DIRECTORY"
        if ! mkdir -p "$DATA_DIRECTORY"; then
            error_exit "Failed to create data directory: $DATA_DIRECTORY"
        fi
    fi
    
    # Create credentials
    create_credentials
    
    # Download annotation data
    download_all_annotations
    
    echo "DRAGEN provisioning completed successfully!"
}

# Run main function with all arguments
main "$@"