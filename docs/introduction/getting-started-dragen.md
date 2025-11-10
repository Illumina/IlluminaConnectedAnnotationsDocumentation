---
title: Getting Started with DRAGEN
---

## Overview

Illumina Connected Annotations is bundled with DRAGEN and provides comprehensive variant annotation capabilities. You can annotate VCF files either:
- Automatically through DRAGEN pipeline parameters
- Manually using the standalone Illumina Connected Annotations tool

:::info Key Requirements
Before annotating variants, you must:
1. Configure credentials for premium data sources
2. Download annotation data files
3. Specify the data location when running DRAGEN or the standalone tool
:::

## Installation Paths

The annotation binaries location depends on your DRAGEN environment:

| Environment    | Nirvana Path                                  | Resource Path                                        |
|----------------|-----------------------------------------------|------------------------------------------------------|
| **On-Premise** | `/opt/dragen/<DRAGEN_VERSION>/share/nirvana/` | `/opt/dragen/<DRAGEN_VERSION>/resources/annotation/` |
| **Cloud**      | `/opt/edico/share/nirvana/`                   | `/opt/edico/resources/annotation/`                   |

**Available binaries:**
- `Nirvana`: Illumina Connected Annotations tool
- `DataManager`: Annotation data download manager

:::caution Platform Compatibility
`Nirvana` and `DataManager` are compatible with CentOS 7, Oracle 8, and other modern Linux distributions using x64 processors.
:::

## Quick Start Reference

### On-Premise DRAGEN

```bash
# Set DRAGEN serial number as environment variable
export DRAGEN_SERIAL_NUMBER="$(dragen_info -qs)"

# Download annotation data (credentials auto-detected from environment)
/<NIRVANA PATH>/DataManager download \
  -r GRCh38 \
  --dir /data/nirvana_data \
  --versions-config /opt/dragen/<DRAGEN_VERSION>/resources/annotation/all_annotations_GRCh38.json

# Annotate variants via DRAGEN
dragen \
  --enable-variant-annotation true \
  --variant-annotation-data /data/nirvana_data \
  --variant-annotation-assembly GRCh38 \
  [... other parameters ...]
```

### Cloud DRAGEN

```bash
# Download annotation data using DRAGEN API key file
/<NIRVANA PATH>/DataManager download \
  -r GRCh38 \
  --api-key-file /path/to/dragen_api_key.txt \
  --dir /data/nirvana_data \
  --versions-config /opt/edico/resources/annotation/all_annotations_GRCh38.json

# Annotate variants via DRAGEN
dragen \
  --enable-variant-annotation true \
  --variant-annotation-data /data/nirvana_data \
  --variant-annotation-assembly GRCh38 \
  [... other parameters ...]
```

:::tip Alternative Cloud Option
If you already have a DRAGEN `--lic-credentials` file, you can use it directly:
```bash
/<NIRVANA PATH>/DataManager download \
  -r GRCh38 \
  --lic-credentials /path/to/lic_credentials_file \
  --dir /data/nirvana_data \
  --versions-config /opt/edico/resources/annotation/all_annotations_GRCh38.json
```
:::

## Detailed Instructions

### Step 1: Configure Credentials

To access premium annotation data sources, you need to provide credentials. The system supports multiple authentication methods and will automatically search for credentials in several locations.

#### Supported Authentication Methods

The annotation tools support the following authentication methods:

| Authentication Method        | Use Case                          | Environment Variables                                      | Command-Line Options                |
|------------------------------|-----------------------------------|------------------------------------------------------------|-------------------------------------|
| **DRAGEN Serial Number**     | On-premise DRAGEN servers         | `DRAGEN_SERIAL_NUMBER`                                     | `--credentials-file` (JSON)         |
| **DRAGEN API Key**           | DRAGEN cloud/platform deployments | `DRAGEN_API_KEY_VALUE`<br/>`DRAGEN_API_KEY_FILE` (path)   | `--api-key-file`                    |
| **BYOL Credentials**         | Cloud DRAGEN users (legacy)       | `NIRVANA_API_KEY` + `NIRVANA_API_SECRET`<br/>`DRAGEN_LICENSE_CREDENTIALS_FILE` (path) | `--lic-credentials`<br/>`--credentials-file` (JSON) |

:::tip Credential Priority
If multiple authentication methods are configured, the system will use them in this priority order:
1. DRAGEN Serial Number
2. BYOL Credentials (ApiKey/ApiSecret)
3. DRAGEN API Key

You only need to provide **one** authentication method.
:::

#### Credential Configuration Options

You can configure credentials using any of these methods:

**Option 1: Default credentials directory**
**Option 2: Explicit file paths**
**Option 3: Environment variables**

#### Option 1: Default Credentials Directory

Automatically look for credentials in `~/.ilmnAnnotations/` directory:

| File Name                  | Purpose                                | Format          |
|----------------------------|----------------------------------------|-----------------|
| `credentials.json`         | Main credentials file (all auth types) | JSON            |
| `dragen_api_key.txt`       | DRAGEN API key only                    | Plain text      |
| `dragen_credentials.txt`   | BYOL credentials (ApiKey/ApiSecret)    | Key-value pairs |


#### Option 2: Explicit File Paths

You can specify credential file locations using command-line arguments:

| Tool        | Argument                                   | Description                                         |
|-------------|--------------------------------------------|-----------------------------------------------------|
| DataManager | `--credentials-file <path>` or `-l <path>` | Path to credentials.json                            |
| DataManager | `--api-key-file <path>`                    | Path to raw API key file                            |
| DataManager | `--lic-credentials <path>`                 | Path to license credentials file (key-value format) |
| Nirvana     | `-l <path>` or `--license <path>`          | Path to credentials.json                            |

#### Option 3: Environment Variables

Set environment variables for automatic credential detection:

| Environment Variable                | Description                          | Example                              |
|-------------------------------------|--------------------------------------|--------------------------------------|
| `MY_ILLUMINA_API_KEY`               | MyIllumina API key                   | `your-api-key`                       |
| `DRAGEN_SERIAL_NUMBER`              | DRAGEN serial number                 | `ABCD1234`                           |
| `DRAGEN_API_KEY_VALUE`              | DRAGEN API key value                 | `your-dragen-api-key`                |
| `DRAGEN_API_KEY_FILE`               | Path to DRAGEN API key file          | `/path/to/api_key.txt`               |
| `NIRVANA_API_KEY`                   | BYOL API key (user_id)               | `your-user-id`                       |
| `NIRVANA_API_SECRET`                | BYOL API secret (password)           | `your-password`                      |
| `DRAGEN_LICENSE_CREDENTIALS_FILE`   | Path to DRAGEN license credentials   | `/path/to/dragen_credentials.txt`    |

**Examples:**

```bash
**Setting environment variables:**
# DRAGEN Serial Number (on-premise)
export DRAGEN_SERIAL_NUMBER="ABCD1234"

# DRAGEN API Key (cloud/platform)
export DRAGEN_API_KEY_VALUE="your-dragen-api-key"
# or point to a file
export DRAGEN_API_KEY_FILE="/path/to/api_key.txt"

# BYOL Credentials (legacy cloud)
export NIRVANA_API_KEY="your-user-id"
export NIRVANA_API_SECRET="your-password"
# or point to a file
export DRAGEN_LICENSE_CREDENTIALS_FILE="/path/to/dragen_credentials.txt"
```

---

#### Credentials File Formats

##### Format 1: credentials.json (Recommended)

The `credentials.json` file supports all authentication methods in a single file:

**On-Premise DRAGEN:**
```json
{
  "DragenSerialNo": "<your-serial-number>"
}
```

**Cloud DRAGEN (legacy BYOL):**
```json
{
  "ApiKey": "<user-id>",
  "ApiSecret": "<password>"
}
```

**MyIllumina Platform:**
```json
{
  "MyIlluminaApiKey": "<your-api-key>"
}
```

**All supported fields:**
```json
{
  "MyIlluminaApiKey": "<optional-myillumina-key>",
  "DragenSerialNo": "<optional-serial-number>",
  "ApiKey": "<optional-byol-user-id>",
  "ApiSecret": "<optional-byol-password>"
}
```

##### Format 2: dragen_api_key.txt

A plain text file containing only the DRAGEN API key:

```
your-dragen-api-key-value
```

##### Format 3: dragen_credentials.txt

A key-value pair file for BYOL credentials:

```
credentials-1 = <user-id>
credentials-2 = <password>
```

---

#### Setting Up Credentials by Environment

##### On-Premise DRAGEN

**Required credential:** DRAGEN Serial Number

**Obtaining your DRAGEN serial number:**

If you have a single DRAGEN version:
```shell
dragen_info -b | grep Serial
```

If you have multiple DRAGEN versions:
```shell
# List available versions
dragen_versions

# Get serial number for specific version
/opt/dragen/<DRAGEN_VERSION>/bin/dragen_info -s
```

**Creating credentials.json:**

```bash
# Manual method
cat > ~/.ilmnAnnotations/credentials.json << EOF
{
  "DragenSerialNo": "$(dragen_info -qs)"
}
EOF
```

Or using environment variable:
```bash
export DRAGEN_SERIAL_NUMBER="$(dragen_info -qs)"
```

##### Cloud DRAGEN

:::info
**Cloud users do not have a DRAGEN serial number.** Active DRAGEN cloud users are automatically eligible for premium resources using BYOL credentials or DRAGEN API keys.
:::

**Required credentials:** BYOL ApiKey/ApiSecret **or** DRAGEN API Key

**Method 1: Using DRAGEN API Key**

If you have a DRAGEN API key, you can use it directly:

```bash
# Save to default location
cat > ~/.ilmnAnnotations/dragen_api_key.txt << EOF
your-dragen-api-key-value
EOF
```

Or set as an environment variable:
```bash
export DRAGEN_API_KEY_VALUE="your-dragen-api-key-value"
```

**Method 2: Use existing `--lic-credentials` file directly**

If you run DRAGEN with `--lic-credentials <file>`, you can use the same file directly with DataManager and Nirvana:

```
credentials-1 = <user-id>
credentials-2 = <password>
```

**Using the license credentials file:**
```bash
# With DataManager
/<NIRVANA PATH>/DataManager download --lic-credentials /path/to/lic_credentials_file 
```

**Optional: Convert to credentials.json** (if you prefer the JSON format):
```bash
cat > ~/.ilmnAnnotations/credentials.json << EOF
{
  "ApiKey": "$(awk -F' = ' '/^credentials-1/ {print $2}' /path/to/lic_credentials_file)",
  "ApiSecret": "$(awk -F' = ' '/^credentials-2/ {print $2}' /path/to/lic_credentials_file)"
}
EOF
```

---

:::tip Troubleshooting
If you encounter authentication errors:
1. Verify credentials are in the correct format
2. Check file permissions (credentials files should be readable)
3. Ensure at least one authentication method is configured
4. Try specifying the credentials file path explicitly with `--credentials-file`
:::

### Step 2: Download Annotation Data

Use the `DataManager` tool to download required annotation data sources.

:::tip
For complete DataManager documentation, see the [DataManager guide](../utilities/data-manager).
:::

#### Available Annotation Configurations

Configuration files are located in the resources directory (see [Installation Paths](#installation-paths) above):

| Configuration File                         | Assembly | Use Case                | DRAGEN Parameter                    |
|--------------------------------------------|----------|-------------------------|-------------------------------------|
| `all_annotations_GRCh37.json`              | GRCh37   | Full variant annotation | `--enable-variant-annotation true`  |
| `all_annotations_GRCh38.json`              | GRCh38   | Full variant annotation | `--enable-variant-annotation true`  |
| `germline_tagging_annotations_GRCh37.json` | GRCh37   | Germline tagging        | `--vc-enable-germline-tagging true` |
| `germline_tagging_annotations_GRCh38.json` | GRCh38   | Germline tagging        | `--vc-enable-germline-tagging true` |
| `tmb_annotations_GRCh37.json`              | GRCh37   | Tumor Mutational Burden | `--enable-tmb true`                 |
| `tmb_annotations_GRCh38.json`              | GRCh38   | Tumor Mutational Burden | `--enable-tmb true`                 |

:::caution Important Notes
- TMB annotation files include germline tagging data. If you download TMB annotations, you don't need to separately download germline tagging annotations.
- Running DRAGEN with `--enable-tmb true` requires TMB annotation data.
- Running DRAGEN with `--vc-enable-germline-tagging true` requires germline tagging annotation data.
- Missing required data will cause DRAGEN to fail with an error.
:::

#### Download Commands
```bash
/<NIRVANA PATH>/DataManager download \
  -r <assembly> \
  --credentials-file <path/to/credentials.json> \
  --dir <path/to/data/directory> \
  --versions-config /opt/dragen/<DRAGEN_VERSION>/resources/annotation/<config_file.json>
```

**Parameters:**
- `<assembly>`: `GRCh37` or `GRCh38`
- `<path/to/credentials.json>`: Path to your credentials file from Step 1
- `<path/to/data/directory>`: Destination directory for annotation files
- `<config_file.json>`: One of the configuration files listed above

:::tip Storage Best Practice
Use the same data directory for all configuration files. 
This consolidated location will be used with the `--variant-annotation-data` parameter when running DRAGEN.
:::

#### Download Example

Example command for full GRCh38 annotations:

```shell
/<NIRVANA PATH>/DataManager download \
  -r GRCh38 \
  --credentials-file /home/user/credentials.json \
  --dir /data/nirvana_data \
  --versions-config /opt/dragen/4.4.3/resources/annotation/all_annotations_GRCh38.json
```

**Expected output:**
```shell
---------------------------------------------------------------------------
DataManager                                         (c) 2024 Illumina, Inc.
                                                                     3.25.0
---------------------------------------------------------------------------

Listing annotation files in local directory...
Requesting remote file information to be downloaded...
Remote file list received!
Syncing local files with requested files
Start downloading files.
Downloading file DANN_20200205.gsa...
Downloading file Homo_sapiens.GRCh38.Nirvana.dat...
Downloading file Gerp_20110522.gsa...
Downloading file PrimateAI_0.2.nsa...
...
============= Downloading ==============

SpliceAi_1.3.esa (with index)           : [##################################################] 100%
PhyloPPrimate_1.0.gsa (with index)      : [##################################################] 100%
PrimateAI-3D_1.0.esa (with index)       : [##################################################] 100%
======== Download Completed =========   : [##################################################] 100%

---------------------------------------------------------------------------
                            Download Summary
---------------------------------------------------------------------------
Download success:
Total size: 63.61 GB
Downloaded files: [56 files listed]
Data license saved: /data/nirvana_data/premium.lic

Peak memory usage: 2.514 GB
Time: 00:04:08.6
```

### Step 3: Annotate Variants

Once credentials are configured and data is downloaded, you can annotate variants through DRAGEN or the standalone tool.

#### Option A: Annotate via DRAGEN Pipeline

Add these parameters to your DRAGEN command:

| Parameter                       | Value                     | Description                                     |
|---------------------------------|---------------------------|-------------------------------------------------|
| `--enable-variant-annotation`   | `true`                    | Enables variant annotation                      |
| `--variant-annotation-data`     | `/path/to/data/directory` | Location of downloaded annotation files         |
| `--variant-annotation-assembly` | `GRCh37` or `GRCh38`      | Reference genome assembly (use GRCh37 for hg19) |

**Example:**
```bash
dragen \
  --enable-variant-annotation true \
  --variant-annotation-data /data/nirvana_data \
  --variant-annotation-assembly GRCh38 \
  [... other DRAGEN parameters ...]
```

#### Option B: Annotate via Standalone Tool

Use the standalone `Nirvana` tool to annotate existing VCF files.

:::tip
For complete annotation options, see the [Illumina Connected Annotations guide](./getting-started#the-illumina-connected-annotations-command-line).
:::

```shell
/<NIRVANA PATH>/Nirvana \
  -i <input.vcf> \
  -o <output_prefix> \
  -c <data_dir>/Cache \
  -r <data_dir>/References/Homo_sapiens.GRCh38.Nirvana.dat \
  --sd <data_dir>/SupplementaryAnnotation/GRCh38 \
  -l <credentials.json> \
  --versions-config /opt/dragen/<DRAGEN_VERSION>/resources/annotation/all_annotations_GRCh38.json
```

**Parameters:**

| Option              | Description                               | Example                                                         |
|---------------------|-------------------------------------------|-----------------------------------------------------------------|
| `-i`                | Input VCF file (uncompressed or bgzipped) | `input.vcf.gz`                                                  |
| `-o`                | Output file prefix                        | `output`                                                        |
| `-c`                | Cache directory                           | `/data/nirvana_data/Cache`                                      |
| `-r`                | Reference file                            | `/data/nirvana_data/References/Homo_sapiens.GRCh38.Nirvana.dat` |
| `--sd`              | Supplementary annotation directory        | `/data/nirvana_data/SupplementaryAnnotation/GRCh38`             |
| `-l`                | Credentials file                          | `credentials.json`                                              |
| `--versions-config` | Version configuration file                | Path from resources directory                                   |

**Example output:**
```shell
---------------------------------------------------------------------------
Illumina Connected Annotations                      (c) 2024 Illumina, Inc.
                                                                     3.25.0
---------------------------------------------------------------------------

Data Source              Type                     Status    Comments
---------------------------------------------------------------------------
DANN                     Score                    Loaded    20200205
Ensembl                  GeneModels               Loaded    112
...
spliceAI                 SmallVariant             Loaded    1.3
---------------------------------------------------------------------------

Summary                                                Time         Percent
---------------------------------------------------------------------------
Initialization                                      00:00:11.7       84.9 %
Annotation                                          00:00:02.0       14.4 %
---------------------------------------------------------------------------
Gross Annotation rate:                                  718.84 positions/sec

Peak memory usage: 5.867 GB
Time: 00:00:13.8
```

## Output Formats

### JSON Output (Default)

Illumina Connected Annotations produces JSON output by default. This format provides comprehensive annotation information.

**Documentation:** [Illumina Connected Annotations JSON Format](../file-formats/illumina-annotator-json-file-format)

### VCF Output (Optional)

Add `--output-format vcf` to generate VCF output. Note that VCF format has limited annotation capabilities compared to JSON.

**Documentation:** [Illumina Connected Annotations VCF Format](../file-formats/illumina-annotator-vcf-file-format)

## Version History

| DRAGEN Version           | Annotations Version | AI Annotations        | Documentation                                                                      | Data Utility                                                                                                                                    |
|--------------------------|---------------------|-----------------------|------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| 4.4                      | 3.25.1              | spliceAI, primateAI3D | [3.25](https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/3.25/) | [Data Manager](https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/3.25/utilities/data-manager)                                |
| 4.3                      | 3.23                | spliceAI, primateAI3D | [3.23](https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/3.23/) | [Downloader](https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/3.23/introduction/getting-started#downloading-the-data-files) |
| 3.9, 3.10, 4.0, 4.1, 4.2 | 3.16.1              | spliceAI, primateAI   | [3.16](https://illumina.github.io/NirvanaDocumentation/3.16/)                      | [Downloader](https://illumina.github.io/NirvanaDocumentation/3.16/introduction/getting-started#downloading-the-data-files)                      |
| 3.8                      | 3.14                | spliceAI, primateAI   | [3.14](https://illumina.github.io/NirvanaDocumentation/3.14/)                      | [Downloader](https://illumina.github.io/NirvanaDocumentation/3.14/introduction/getting-started#downloading-the-data-files)                      |
| 3.6, 3.7                 | 3.9.0               | spliceAI, primateAI   | Not Available                                                                      | Not Available                                                                                                                                   |
| 3.5                      | 3.6.0               | spliceAI, primateAI   | Not Available                                                                      | Not Available                                                                                                                                   |

:::note
Annotations binaries have been included with DRAGEN since v3.5. Newer versions are backward compatible and can annotate output files from older DRAGEN releases.
:::
