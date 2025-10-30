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
### Step 1: Credentials File
Depending on the environment, obtaining credentials will differ. Choose one from the two options below.

#### On-Premise Credentials
```bash
cat > credentials.json << EOF
{
  "DragenSerialNo": "$(dragen_info -b | grep Serial | awk '{print $3}')"
}
EOF
```

#### Cloud Credentials

```bash
cat > credentials.json << EOF
{
  "ApiKey": "$(awk -F' = ' '/^credentials-1/ {print $2}' /path/to/lic_credentials_file)",
  "ApiSecret": "$(awk -F' = ' '/^credentials-2/ {print $2}' /path/to/lic_credentials_file)"
}
EOF
```
### Step 2: Download Annotation Data

```bash
/<NIRVANA PATH>/DataManager download \
  -r GRCh38 \
  --credentials-file credentials.json \
  --dir /data/nirvana_data \
  --versions-config /opt/edico/resources/annotation/all_annotations_GRCh38.json
```
### Step 3: Annotate Variants via DRAGEN
```bash
dragen \
  --enable-variant-annotation true \
  --variant-annotation-data /data/nirvana_data \
  --variant-annotation-assembly GRCh38 \
  [... other parameters ...]
```

## Detailed Instructions

### Step 1: Configure Credentials

To access premium annotation data sources, create a `credentials.json` file with the appropriate credentials for your environment.

#### On-Premise DRAGEN

**Required credentials format:**
```json
{
  "DragenSerialNo": "<your DRAGEN server serial no.>"
}
```

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
/opt/dragen/<DRAGEN_VERSION>/bin/dragen_info -b | grep Serial
```

#### Cloud DRAGEN

:::info
**Cloud users do not have a DRAGEN serial number.** All active DRAGEN cloud users are automatically eligible for premium resources.
:::

**Required credentials format:**
```json
{
  "ApiKey": "<user_id>",
  "ApiSecret": "<password>"
}
```

**Obtaining your cloud credentials:**

Your `user_id` and `password` are found in your DRAGEN license configuration:

**Method 1: From `--lic-server` parameter**

If you run DRAGEN with `--lic-server`, extract credentials from the URL format:
```
--lic-server https://<user_id>:<password>@license.dragen.illumina.com
```

**Method 2: From `--lic-credentials` file**

If you run DRAGEN with `--lic-credentials <file>`, the file contains:
```
credentials-1 = <user_id>
credentials-2 = <password>
```

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
