---
title: Getting Started with DRAGEN
---

## Overview

Illumina Connected Annotations is bundled with DRAGEN and provides comprehensive variant annotation capabilities. You
can annotate VCF files either:

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
`Nirvana` and `DataManager` are compatible with CentOS 7, Oracle 8, and other modern Linux distributions using x64
processors.
:::

## Automated Setup Script

For a streamlined setup experience, use the [**Annotation Setup Script**](../utilities/resources/annotation_setup.sh)
which automates all the configuration steps:

```bash
# Download the provisioning script
wget https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/utilities/resources/annotation_setup.sh

# Make it executable
chmod +x annotation_setup.sh

# Run interactively (guided setup)
./annotation_setup.sh

# Or run with command-line options
./annotation_setup.sh \
  --dragen-path /opt/dragen/4.5.0 \
  --data-dir /data/nirvana_data
```

**Features:**

- **Interactive mode**: Step-by-step guidance for credential setup and data download
- **CLI mode**: Fully automated for scripting and CI/CD pipelines
- **Automatic credential detection**: Uses environment variables or prompts for credentials
- **Multi-download support**: Download multiple assemblies and annotation types in one run
- **Dry-run mode**: Preview commands without downloading (use `--dry-run`)

## Quick Start Reference

### On-Premise DRAGEN

```bash
# Set DRAGEN serial number as environment variable
export DRAGEN_SERIAL_NUMBER="$(dragen_info -qs)"

# Download annotation data (credentials auto-detected from environment)
/opt/dragen/<DRAGEN_VERSION>/share/nirvana/DataManager download \
  -r GRCh38 \
  --dir /data/nirvana_data \
  --versions-config /opt/dragen/<DRAGEN_VERSION>/resources/annotation/all_annotations_GRCh38.json

/opt/dragen/<DRAGEN_VERSION>/share/nirvana/DataManager download \
  -r GRCh38 \
  --dir /data/nirvana_data \
  --versions-config /opt/dragen/<DRAGEN_VERSION>/resources/annotation/tmb_annotations_GRCh38.json

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
/opt/edico/share/nirvana/DataManager download \
  -r GRCh38 \
  --api-key-file /path/to/dragen_api_key.txt \
  --dir /data/nirvana_data \
  --versions-config /opt/edico/resources/annotation/all_annotations_GRCh38.json

/opt/edico/share/nirvana/DataManager download \
  -r GRCh38 \
  --api-key-file /path/to/dragen_api_key.txt \
  --dir /data/nirvana_data \
  --versions-config /opt/edico/resources/annotation/tmb_annotations_GRCh38.json
  
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
/opt/edico/share/nirvana/DataManager download \
  -r GRCh38 \
  --lic-credentials /path/to/lic_credentials_file \
  --dir /data/nirvana_data \
  --versions-config /opt/edico/resources/annotation/all_annotations_GRCh38.json

/opt/edico/share/nirvana/DataManager download \
  -r GRCh38 \
  --lic-credentials /path/to/lic_credentials_file \
  --dir /data/nirvana_data \
  --versions-config /opt/edico/resources/annotation/tmb_annotations_GRCh38.json
```

:::

## Detailed Instructions

### Step 1: Configure Credentials

To access premium annotation data sources, you need to provide credentials. The system supports multiple authentication
methods and will automatically search for credentials in several locations.

#### Supported Authentication Methods

The annotation tools support the following authentication methods:

| Authentication Method    | Use Case                          | Environment Variables                                                                 | Command-Line Options                         |
|--------------------------|-----------------------------------|---------------------------------------------------------------------------------------|----------------------------------------------|
| **DRAGEN Serial Number** | On-premise DRAGEN servers         | `DRAGEN_SERIAL_NUMBER`                                                                | `--credentials-file`                         |
| **DRAGEN API Key**       | DRAGEN cloud/platform deployments | `DRAGEN_API_KEY_VALUE`<br/>`DRAGEN_API_KEY_FILE` (path)                               | `--api-key-file`<br/>`--credentials-file`    |
| **BYOL Credentials**     | Cloud DRAGEN users                | `NIRVANA_API_KEY` + `NIRVANA_API_SECRET`<br/>`DRAGEN_LICENSE_CREDENTIALS_FILE` (path) | `--lic-credentials`<br/>`--credentials-file` |

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

| File Name                | Purpose                                | Format          |
|--------------------------|----------------------------------------|-----------------|
| `credentials.json`       | Main credentials file (all auth types) | JSON            |
| `dragen_api_key.txt`     | DRAGEN API key only                    | Plain text      |
| `dragen_credentials.txt` | BYOL credentials (ApiKey/ApiSecret)    | Key-value pairs |

#### Option 2: Explicit File Paths

You can specify credential file locations using command-line arguments:

| Tool        | Argument                                   | Description                                         |
|-------------|--------------------------------------------|-----------------------------------------------------|
| DataManager | `--credentials-file <path>` or `-l <path>` | Path to credentials.json                            |
| DataManager | `--api-key-file <path>`                    | Path to raw API key file                            |
| DataManager | `--lic-credentials <path>`                 | Path to license credentials file (key-value format) |

#### Option 3: Environment Variables

Set environment variables for automatic credential detection:

| Environment Variable              | Description                        | Example                           |
|-----------------------------------|------------------------------------|-----------------------------------|
| `MY_ILLUMINA_API_KEY`             | MyIllumina API key                 | `your-api-key`                    |
| `DRAGEN_SERIAL_NUMBER`            | DRAGEN serial number               | `ABCD1234`                        |
| `DRAGEN_API_KEY_VALUE`            | DRAGEN API key value               | `your-dragen-api-key`             |
| `DRAGEN_API_KEY_FILE`             | Path to DRAGEN API key file        | `/path/to/api_key.txt`            |
| `NIRVANA_API_KEY`                 | BYOL API key (user_id)             | `your-user-id`                    |
| `NIRVANA_API_SECRET`              | BYOL API secret (password)         | `your-password`                   |
| `DRAGEN_LICENSE_CREDENTIALS_FILE` | Path to DRAGEN license credentials | `/path/to/dragen_credentials.txt` |

**Examples:**

```bash
**Setting environment variables:**
# DRAGEN Serial Number (on-premise)
export DRAGEN_SERIAL_NUMBER="ABCD1234"

# DRAGEN API Key (cloud/platform)
export DRAGEN_API_KEY_VALUE="your-dragen-api-key"
# or point to a file
export DRAGEN_API_KEY_FILE="/path/to/api_key.txt"

# BYOL Credentials (cloud)
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

**Cloud DRAGEN (BYOL):**

```json
{
  "ApiKey": "<user-id>",
  "ApiSecret": "<password>"
}
```

**MyIllumina Platform:**

Basic, without access to premium data:

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
  "ApiSecret": "<optional-byol-password>",
  "DragenApiKey": "<optional-dragen-api-key>"
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
credentials-1=<user-id>
credentials-2=<password>
```

---

#### Setting Up Credentials by Environment

##### On-Premise DRAGEN

**Required credential:** DRAGEN Serial Number

**Obtaining your DRAGEN serial number:**

If you have a single DRAGEN version:

```shell
dragen_info -s
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
**Cloud users do not have a DRAGEN serial number.** Active DRAGEN cloud users are automatically eligible for premium
resources using BYOL credentials or DRAGEN API keys.
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
credentials-1=<user-id>
credentials-2=<password>
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

- TMB annotation files include germline tagging data. If you download TMB annotations, you don't need to separately
  download germline tagging annotations.
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
DataManager                                         (c) 2025 Illumina, Inc.
                                                                     3.27.0
---------------------------------------------------------------------------

Fetching download information...
Syncing local files with requested files

Starting download of 40 files using 4 threads...

#   File Name                      Source       Version    Local Size Remote Size MD5 Hash                           Status
------------------------------------------------------------------------------------------------------------------------------------------
35  Homo_sapiens.GRCh37.Nirvana... GenomeAss... GRCh37.p13 232.3 MB   0.8 GB      9065784e62b5c8039f189e84cd90fe97   Downloading 30%
29  PrimateAI_0.2.esa              PrimateAI    0.2        134.0 MB   169.7 MB    576c4146c5a0f87e498fd92170682ee6   Downloading 79%
42  DANN_20200205.gsa              DANN         20200205   254.6 MB   3.8 GB      9b76948a939e86e2e24360cf2a953e77   Downloading 7%
41  Gerp_20110522.gsa              Gerp         20110522   263.6 MB   3.1 GB      b86e1734bb6ab685149566a3ae71fc83   Downloading 8%
12  UcscCpgIsland_20200322.mroi    UcscCpgIs... 20200322   0 B        1.0 MB      5187291ab3791a2cf6e0d5a89ce0cac7   Missing 0%
1   MITOMAP_SV_20200819.nsi        mitomap      20200819   0 B        1.7 KB      323e4227ceed4d240b61ee0a13602a28   Missing 0%
18  ClinVarPreview_preview_2025... clinvar-p... 20250601   0 B        2.5 MB      72d7ed870bfe596c27a5752c62524f6f   Missing 0%
43  dbSNP_157.nsa                  dbSNP        157        0 B        7.3 GB      e5dab1c73f6d8195e73c67313aa7089c   Missing 0%
33  gnomAD_exome_2.1.nsa           gnomad-exome 2.1        0 B        0.5 GB      be77803d9d7804d543a52f4158a5eb80   Missing 0%
17  ClinVar_20250601.nsi           clinvar      20250601   0 B        2.3 MB      ae4a3a1b4288dfe53e0107d581e5a22d   Missing 0%
21  gnomAD_LCR_2.1.lcr             gnomad       2.1        0 B        7.5 MB      601f94ba374c2942d5ff8ea2774308e1   Missing 0%
27  ClinVarPreview_preview_2025... clinvar-p... 20250601   0 B        145.5 MB    c651b1922087b753db9ec20691bffddf   Missing 0%
4   ClinGen_Dosage_Sensitivity_... clingen      20250815   0 B        10.4 KB     f9c2dce4b320919601a78ff580bf6b92   Missing 0%
38  phyloP_hg19.npd                phylopScore  hg19       0 B        1.4 GB      023f0a72c4b4678c88cad7f3c46e3b6e   Missing 0%
44  gnomAD_2.1.nsa                 gnomad       2.1        0 B        9.7 GB      2ae0dd89ee52d86296a4e8483d04a2ab   Missing 0%
34  PrimateAI-3D_1.0.esa           primateAI-3D 1.0        0 B        0.7 GB      8b7b89c01a208bfd670cff125ac2c0bc   Missing 0%
10  gnomAD_gene_scores_4.1.nga     gnomad       4.1        0 B        398.1 KB    684a96c10d6cb00111ab6e8eef3d3ab2   Missing 0%
22  gnomAD_SV_2.1.nsi              gnomad       2.1        0 B        12.2 MB     fc5d05b27bf0f99d6a0ed7cea2326ae2   Missing 0%
31  COSMIC_102.esa                 cosmic       102        0 B        329.0 MB    dbd550f01e9d51aae5af22f9f265c66c   Missing 0%
26  ClinVar_20250601.nsa           clinvar      20250601   0 B        109.1 MB    6879431766846ddd42060632bb748840   Missing 0%
30  dbSNP_151_globalMinor.nsa      globalAllele 151        0 B        277.3 MB    1705968d7af569c509005b43e1bbace5   Missing 0%
3   ClinGen_Dosage_Sensitivity_... clingen      20250815   0 B        8.7 KB      9c134d1d321dbb9cb95fa868266aab84   Missing 0%
24  GRCh37.RefSeq.ndb              RefSeq       105.202... 0 B        50.2 MB     de70384b18e82e983e138de610b9a60b   Missing 0%
9   MITOMAP_20200819.nsa           mitomap      20200819   0 B        142.7 KB    66ac99931479e7be721777f72c492a72   Missing 0%
14  1000_Genomes_Project_(SV)_P... oneKg        Phase 3... 0 B        1.2 MB      71b9893cf8dceb9dcb9ccaa8568a786e   Missing 0%
11  ClinGen_20160414.nsi           clingen (... 20160414   0 B        448.6 KB    c879c32cd713ea114ab6645ad136865c   Missing 0%
40  TOPMed_freeze_5.nsa            TOPMed       freeze_5   0 B        1.9 GB      7091ebf36a049645e4d27dd4b89adf08   Missing 0%
37  PromoterAI_1.1.esa             PromoterAI   1.1        0 B        1.3 GB      63740b952fc26dbb9b0b9f0177549220   Missing 0%
2   Cosmic_Cancer_Gene_Census_1... cosmic       102        0 B        2.3 KB      2d1bdfa6a1d2cd71eb5af655fcd10bc1   Missing 0%
36  1000_Genomes_Project_Phase_... oneKg        Phase 3... 0 B        0.9 GB      0d3b5b0324eec691148b21508b431bfe   Missing 0%
39  SpliceAi_1.3.esa               spliceAI     1.3        0 B        1.5 GB      d8689daa7f8a0354e3e6808c25f3096d   Missing 0%
32  AlphaMissense_1.0.nsa          alphaMiss... 1.0        0 B        500.0 MB    466610add1739014e8776ac28d9a6ad5   Missing 0%
16  OMIM_20250815.ega              omim         20250815   0 B        1.6 MB      68219a4695860a96341b262015a8288c   Missing 0%
6   ClinGen_disease_validity_cu... clingen      20250815   0 B        56.7 KB     63c1166d7bd43973140e218dc8f4127c   Missing 0%
5   COSMIC_GeneFusions_102.efj     cosmic       102        0 B        45.5 KB     8bcc682bcbbdd123c33e140b06be90e7   Missing 0%
28  REVEL_20200205.nsa             REVEL        20200205   0 B        166.2 MB    22b81c6e8bac88bf5ebea630d87bd99f   Missing 0%
15  1000_Genomes_Project_Phase_... oneKg        Phase 3... 0 B        1.4 MB      a695d7a0d21bcd3fa897bfa68630f2a0   Missing 0%
25  GRCh37.Ensembl.ndb             Ensembl      110        71.8 MB    71.8 MB     26a66394fd82411658e117d765f9231f   Downloaded 100%
7   MultiZ100Way_20150427.pcs      MultiZ100Way 20150427   59.4 KB    59.4 KB     1f4a5d1592f96c1a3ca489d3aa9b9618   Downloaded 100%
8   GeneSymbols.ndb                HGNC         20240603   134.0 KB   134.0 KB    153fe33bc4d7839257d81db7a3914fe7   Downloaded 100%
20  GME_20160618.nsa               GME          20160618   3.6 MB     3.6 MB      313ca98c770ed69383a8b7e78abd19a7   UpToDate 100%
23  ABRaOM_SABE_609_exomes.nsa     ABRaOM       SABE_60... 16.4 MB    16.4 MB     2670632355457cde4d6f4d62b9b91f58   UpToDate 100%
13  DECIPHER_201509.nsi            DECIPHER     201509     1.1 MB     1.1 MB      784e71f98aff7d30ed17194a490561ae   UpToDate 100%
19  FusionCatcher_1.33.gfs         FusionCat... 1.33       3.5 MB     3.5 MB      9eaf6a33d967dfa34fb1d0e76d63fd50   UpToDate 100%
------------------------------------------------------------------------------------------------------------------------------------------
Total=44(34.6 GB), Failed=0, Downloading=4, Completed=7(1.0 GB) | Speed=38.4 MB/s, Progress=3% | Elapsed=00:25, ETA=14:56
```

**Example completion message:**

```shell
Summary written to /data/nirvana_data/download_summary.json
Table written to /data/nirvana_data/download_summary.txt

Peak memory usage: 293.1 MB
Time: 00:14:08.6
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
For complete annotation options, see
the [Illumina Connected Annotations guide](./getting-started#the-illumina-connected-annotations-command-line).
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
                                                                     3.27.0
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

Illumina Connected Annotations produces JSON output by default. This format provides comprehensive annotation
information.

**Documentation:** [Illumina Connected Annotations JSON Format](../file-formats/illumina-annotator-json-file-format)

### VCF Output (Optional)

Add `--output-format vcf` to generate VCF output. Note that VCF format has limited annotation capabilities compared to
JSON.

**Documentation:** [Illumina Connected Annotations VCF Format](../file-formats/illumina-annotator-vcf-file-format)

## Version History

| DRAGEN Version           | Annotations Version | AI Annotations        | Documentation                                                                      | Data Utility                                                                                                                                    |
|--------------------------|---------------------|-----------------------|------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| 4.5                      | 3.27.0              | spliceAI, primateAI3D | [3.27](https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/3.27/) | [Data Manager](https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/3.27/utilities/data-manager)                                |
| 4.4                      | 3.25.1              | spliceAI, primateAI3D | [3.25](https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/3.25/) | [Data Manager](https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/3.25/utilities/data-manager)                                |
| 4.3                      | 3.23                | spliceAI, primateAI3D | [3.23](https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/3.23/) | [Downloader](https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/3.23/introduction/getting-started#downloading-the-data-files) |
| 3.9, 3.10, 4.0, 4.1, 4.2 | 3.16.1              | spliceAI, primateAI   | [3.16](https://illumina.github.io/NirvanaDocumentation/3.16/)                      | [Downloader](https://illumina.github.io/NirvanaDocumentation/3.16/introduction/getting-started#downloading-the-data-files)                      |
| 3.8                      | 3.14                | spliceAI, primateAI   | [3.14](https://illumina.github.io/NirvanaDocumentation/3.14/)                      | [Downloader](https://illumina.github.io/NirvanaDocumentation/3.14/introduction/getting-started#downloading-the-data-files)                      |
| 3.6, 3.7                 | 3.9.0               | spliceAI, primateAI   | Not Available                                                                      | Not Available                                                                                                                                   |
| 3.5                      | 3.6.0               | spliceAI, primateAI   | Not Available                                                                      | Not Available                                                                                                                                   |

:::note
Annotations binaries have been included with DRAGEN since v3.5. Newer versions are backward compatible and can annotate
output files from older DRAGEN releases.
:::
