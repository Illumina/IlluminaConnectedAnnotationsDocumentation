#!/bin/bash
if [ $# -ne 2 ]; then
    echo "Usage: $0 <path to data directory containing Cache, Reference and Supplementary Annotations> <path to checksum.txt file>"
    exit 1
fi

directory="$1"
checksum_file="$2"

echo "Starting MD5 checksum verification..."

declare -a mismatched_files
declare -a extra_files
declare -a matched_files
declare -a expected_paths
declare -a expected_md5s

get_relative_path() {
    local full_path=$(realpath "$1")
    local dir_path=$(realpath "$directory")
    echo "${full_path#$dir_path/}"
}

while IFS=$'\t' read -r md5 path; do
    expected_paths+=("$path")
    expected_md5s+=("$md5")
done < "$checksum_file"

while read -r full_path; do
    relative_path=$(get_relative_path "$full_path")
    echo "Checking: $relative_path"

    actual_md5=$(md5sum "$full_path" | cut -d' ' -f1)

    found=false
    for i in "${!expected_paths[@]}"; do
        if [[ "${expected_paths[i]}" == "$relative_path" ]]; then
            found=true
            expected_md5="${expected_md5s[i]}"
            if [ "$actual_md5" = "$expected_md5" ]; then
                echo "  Matched"
                matched_files+=("$relative_path")
            else
                echo "  Mismatch detected"
                mismatched_files+=("$relative_path:$expected_md5:$actual_md5")
            fi
            break
        fi
    done

    if [ "$found" = false ]; then
        echo "  Extra file (not in checksum.txt)"
        extra_files+=("$relative_path:$actual_md5")
    fi
done < <(find "$directory" -type f)

echo "MD5 checksum verification completed."

echo "--------"
echo "Summary:"
echo "--------"

echo "Mismatched files:"
if [ ${#mismatched_files[@]} -eq 0 ]; then
    echo "None"
else
    for file in "${mismatched_files[@]}"; do
        IFS=':' read -r path expected actual <<< "$file"
        echo "  $path"
        echo "    Expected MD5: $expected"
        echo "    Actual MD5:   $actual"
    done
fi

echo -e "\nExtra files (not in checksum.txt):"
if [ ${#extra_files[@]} -eq 0 ]; then
    echo "None"
else
    for file in "${extra_files[@]}"; do
        IFS=':' read -r path actual <<< "$file"
        echo "  $path"
        echo "    Actual MD5: $actual"
    done
fi

echo -e "\nMatched files:"
if [ ${#matched_files[@]} -eq 0 ]; then
    echo "None"
else
    for file in "${matched_files[@]}"; do
        echo "  $file"
    done
fi

echo -e "\nTotal files in directory: $((${#mismatched_files[@]} + ${#extra_files[@]} + ${#matched_files[@]}))"
echo "Mismatched: ${#mismatched_files[@]}"
echo "Extra: ${#extra_files[@]}"
echo "Matched: ${#matched_files[@]}"

echo "MD5 checksum verification completed."
