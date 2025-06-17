---
title: Getting Started with DRAGEN
---

Illumina Connected Annotations is bundled with DRAGEN. Users can annotate VCF files by enabling annotation through the DRAGEN command-line or by running the standalone Illumina Connected Annotations tool.

By default, the Annotations binaries are located in the `<INSTALL_PATH>/share/nirvana` directory. This directory contains these two files:

1. `Nirvana`: Illumina Connected Annotations
2. `DataManager`: Manage annotation data sources

:::caution

`Nirvana` and `DataManager` are compatible with the following platforms:

- CentOS 7, Oracle 8 and other modern Linux distributions using x64 processors.

:::

## Downloading Annotation Data Files

Variant annotation in DRAGEN requires additional annotation data files, which must be downloaded prior to running any
DRAGEN pipeline that requires variant annotation. The `DataManager` tool can be used to download those sources. Prior to that, the
credentials must be configured to gain access to the data sources.

### Credentials

Credentials are stored in a credentials JSON file. It will contain an Illumina API key to access Illumina platform.
To access premium data sources, there are two options
1. DRAGEN server users will use DRAGEN serial number
2. DRAGEN cloud users will use their username and password

#### Illumina API Key
To generate an Illumina API key, create an Illumina account via [https://accounts.login.illumina.com](https://accounts.login.illumina.com). 
Refer to [this guide](./prerequisite) for instructions on obtaining your `MyIlluminaApiKey`.

#### Premium Sources
##### DRAGEN Users
To access premium sources, retrieve the DRAGEN serial number using the following command:

```shell
dragen_info -b | grep Serial
```
If you have multiple versions of DRAGEN installed, you have to execute the following command
to get the versions
```shell
dragen_versions
```

And then using the selected `DRAGEN_VERSION` execute the following to find the serial number
```shell
/opt/dragen/<DRAGEN_VERSION>/bin/dragen_info -b | grep Serial
```

Finally, copy the serial number and create a `credentials.json` file as follows:
```json
{
  "MyIlluminaApiKey": "<your Illumina account api key>",
  "DragenSerialNo": "<your DRAGEN server serial no.>"
}
```

##### DRAGEN Cloud users 
The serial number will not work for DRAGEN cloud users.
Instead, the BYOL username and password needs to be used. 
Following template can be used to create the `credentials.json`.
```json
{
  "MyIlluminaApiKey": "<your Illumina account api key>",
  "ApiKey": "<BYOL Username>",
  "ApiSecret": "<BYOL Password>"
}
```

### Download Sources

:::tip

Please see the complete [DataManager guide](../utilities/data-manager).
:::

Once the credential file is created, `DataManager` can be used for downloading data sources. Data sources can be explicitly defined in a JSON format. DRAGEN has a predefined set of version configuration files that can be used for download these sources. The configurations are located in DRAGEN resources directory `<INSTALL_PATH>/resources/annotation`. There are several JSON config files in the directory, each describing the version of each data source that will be used to annotate:

- `all_annotations_GRCh37.json` : configurations for producing full variant annotation (running DRAGEN with
  parameter `--enable-variant-annotation true`) for GRCh37 assembly
- `all_annotations_GRCh38.json` : configurations for producing full variant annotation (running DRAGEN with
  parameter `--enable-variant-annotation true`) for GRCh38 assembly
- `germline_tagging_annotations_GRCh37.json` : configurations required when running DRAGEN pipeline that perform
  germline tagging step for GRCh37 assembly
- `germline_tagging_annotations_GRCh38.json` : configurations required when running DRAGEN pipeline that perform
  germline tagging step for GRCh38 assembly
- `tmb_annotations_GRCh37.json` : configurations required when running DRAGEN pipeline that perform TMB step for GRCh37
  assembly (this file will also contain all data that are defined in `germline_tagging_annotations_GRCh37.json`)
- `tmb_annotations_GRCh38.json` : configurations required when running DRAGEN pipeline that perform TMB step for GRCh38
  assembly (this file will also contain all data that are defined in `germline_tagging_annotations_GRCh38.json`)

Download the data files, for each JSON above, using the command:

```bash
.<INSTALL_PATH>/share/nirvana/DataManager download -r [assembly] --credentials-file [path to credential file] --dir [path to directory for the downloaded data] --versions-config [path to the JSON file in the resources folder]
```

For the `--dir` argument you can use the same directory for all config files so that it is stored in the same directory.
This directory path will be used for the `--variant-annotation-data` parameter when running DRAGEN.

:::caution

- If DataManager was run for `tmb_annotations_[assembly].json`, it is not required to run again
  for `germline_tagging_annotations_[assembly].json`.

- Data defined in `tmb_annotations_[assembly].json` are needed if DRAGEN is run with `--enable-tmb true` parameter.
  Without data defined in `tmb_annotations_[assembly].json` available, running DRAGEN will result in error.

- Data defined in `germline_tagging_annotations_[assembly].json` are needed if DRAGEN is run
  with `--vc-enable-germline-tagging true` parameter. Without data defined in `tmb_annotations_[assembly].json`
  available, running DRAGEN will result in error.

:::

Below is the output example when running the DataManager to download using `all_annotations_GRCh38.json` config file:

```shell
[INSTALL_PATH]/DataManager download -r GRCh38 --credentials-file [path to credential file] --dir [path to dir] --versions-config [path to resource directory]/all_annotations_GRCh38.json

---------------------------------------------------------------------------
DataManager                                         (c) 2024 Illumina, Inc.
                                                                     3.25.0
---------------------------------------------------------------------------

Listing annotation files in local directory...
Requesting remote file information to be downloaded...
Remote file list received!
Syncing local files with requested files
Requesting remote file information to be downloaded...
Start downloading files.
Downloading file DANN_20200205.gsa...
Downloading file Homo_sapiens.GRCh38.Nirvana.dat...
Downloading file Gerp_20110522.gsa...
Downloading file PrimateAI_0.2.nsa...
Downloading file PromoterAI_1.0.esa...
Downloading file REVEL_20200205.nsa...
Downloading file GRCh38.RefSeq.ndb...
Downloading file TOPMed_freeze_5.nsa...
Downloading file ClinGen_disease_validity_curations_20240910.nga...
Downloading file ClinGen_Dosage_Sensitivity_Map_20240910.nga...
Downloading file ClinGen_Dosage_Sensitivity_Map_20240910.nsi...
Downloading file ClinGen_20160414.nsi...
Downloading file ClinVar_20240902.nsa...
Downloading file ClinVar_20240902.nsi...
Downloading file ClinVarPreview_preview_20240902.nsa...
Downloading file ClinVarPreview_preview_20240902.nsi...
Downloading file Cosmic_Cancer_Gene_Census_99.ega...
Downloading file COSMIC_GeneFusions_99.efj...
Downloading file COSMIC_99.esa...
Downloading file dbSNP_156.nsa...
Downloading file dbSNP_151_globalMinor.nsa...
Downloading file gnomAD_gene_scores_4.1.nga...
Downloading file gnomAD_LCR_2.1.lcr...
Downloading file gnomAD_4.1.nsa...
Downloading file gnomAD_SV_4.1.nsi...
Downloading file gnomAD-cnv_4.1.nsi...
Downloading file gnomAD_exome_4.1.nsa...
Downloading file MITOMAP_20200819.nsa...
Downloading file MITOMAP_SV_20200819.nsi...
Downloading file OMIM_20240910.ega...
Downloading file 1000_Genomes_Project_Phase_3_v3_plus_refMinor.rma...
Downloading file 1000_Genomes_Project_Phase_3_v3_plus.nsa...
Downloading file 1000_Genomes_Project_(SV)_Phase_3_v5a.nsi...
Downloading file phyloP_hg38.npd...
Downloading file PhyloPPrimate_1.0.gsa...
Downloading file PrimateAI-3D_1.0.esa...
Downloading file SpliceAi_1.3.esa...
============= Downloading ==============

SpliceAi_1.3.esa (with index)           : [##################################################] 100%
PhyloPPrimate_1.0.gsa (with index)      : [##################################################] 100%
PrimateAI-3D_1.0.esa (with index)       : [##################################################] 100%
======== Download Completed =========   : [##################################################] 100%
Submitting download usage...
Submitting download usage finished!
Obtaining Data License...


---------------------------------------------------------------------------
                            Download Summary
---------------------------------------------------------------------------
Download success:
Total size: 63.61 GB
Downloaded files:
- DANN_20200205.gsa.idx
- PrimateAI_0.2.nsa.idx
- Gerp_20110522.gsa.idx
- PrimateAI_0.2.nsa
- PromoterAI_1.0.esa.idx
- PromoterAI_1.0.esa
- Homo_sapiens.GRCh38.Nirvana.dat
- REVEL_20200205.nsa.idx
- GRCh38.RefSeq.ndb.idx
- GRCh38.RefSeq.ndb
- REVEL_20200205.nsa
- TOPMed_freeze_5.nsa.idx
- ClinGen_disease_validity_curations_20240910.nga
- ClinGen_Dosage_Sensitivity_Map_20240910.nga
- ClinGen_Dosage_Sensitivity_Map_20240910.nsi
- ClinGen_20160414.nsi
- ClinVar_20240902.nsa.idx
- ClinVar_20240902.nsa
- ClinVar_20240902.nsi
- ClinVarPreview_preview_20240902.nsa.idx
- ClinVarPreview_preview_20240902.nsa
- ClinVarPreview_preview_20240902.nsi
- Cosmic_Cancer_Gene_Census_99.ega
- COSMIC_GeneFusions_99.efj
- COSMIC_99.esa.idx
- TOPMed_freeze_5.nsa
- COSMIC_99.esa
- dbSNP_156.nsa.idx
- dbSNP_151_globalMinor.nsa.idx
- dbSNP_151_globalMinor.nsa
- gnomAD_gene_scores_4.1.nga
- gnomAD_LCR_2.1.lcr
- gnomAD_4.1.nsa.idx
- Gerp_20110522.gsa
- gnomAD_SV_4.1.nsi
- gnomAD-cnv_4.1.nsi
- gnomAD_exome_4.1.nsa.idx
- DANN_20200205.gsa
- MITOMAP_20200819.nsa.idx
- MITOMAP_20200819.nsa
- MITOMAP_SV_20200819.nsi
- OMIM_20240910.ega
- 1000_Genomes_Project_Phase_3_v3_plus_refMinor.rma.idx
- 1000_Genomes_Project_Phase_3_v3_plus_refMinor.rma
- 1000_Genomes_Project_Phase_3_v3_plus.nsa.idx
- 1000_Genomes_Project_Phase_3_v3_plus.nsa
- 1000_Genomes_Project_(SV)_Phase_3_v5a.nsi
- phyloP_hg38.npd.idx
- dbSNP_156.nsa
- PhyloPPrimate_1.0.gsa.idx
- gnomAD_exome_4.1.nsa
- PrimateAI-3D_1.0.esa.idx
- phyloP_hg38.npd
- SpliceAi_1.3.esa.idx
- PrimateAI-3D_1.0.esa
- SpliceAi_1.3.esa
- PhyloPPrimate_1.0.gsa
- gnomAD_4.1.nsa
Data license saved: /home/nirvana_resources/nirvana_bin/premium.lic

Peak memory usage: 2.514 GB
Time: 00:04:08.6
```

## Annotate Files (via DRAGEN command-line)

To automatically annotate output VCFs when running DRAGEN, please add the following command-line arguments:

| Argument                      | Example                   | Description                                                                                 |
| ----------------------------- | ------------------------- | ------------------------------------------------------------------------------------------- |
| --enable-variant-annotation   | true                      | enables annotation if the pipeline supports it                                              |
| --variant-annotation-data     | /path/to/your/NirvanaData | the location where you downloaded the Nirvana annotation files                              |
| --variant-annotation-assembly | GRCh38                    | the genome assembly - either GRCh37 or GRCh38. To annotate hg19 variants, please use GRCh37 |

Example DRAGEN parameters for obtaining full annotation data:

```bash
--enable-variant-annotation true \
--variant-annotation-data /path/to/your/NirvanaData \
--variant-annotation-assembly GRCh38
```

## Annotate Files (via standalone Illumina Connected Annotations)

:::tip

Refer to the [Annotation guide](./getting-started#the-illumina-connected-annotations-command-line).
:::

To annotate an uncompressed VCF (or bgzipped VCF) file, enter the following command:

```shell
<INSTALL_PATH>/share/nirvana/Nirvana \
 -i <input_VCF> \
 -o <output_prefix> \
 -c [path to data dir]/Cache \
 -r [path to data dir]/References/Homo_sapiens.GRCh38.Nirvana.dat \
 --sd [path to data dir]/SupplementaryAnnotation/GRCh38 \
 -l [path to credential file] \
 --versions-config [path to resource directory]/all_annotations_GRCh38.json
```

The following command line options are available:

| Option            | Value     | Example                                           | Description                        |
| ----------------- | --------- | ------------------------------------------------- | ---------------------------------- |
| -i                | path      | <input_VCF>                                       | Input VCF path                     |
| -o                | prefix    | <output_prefix>                                   | Output path prefix                 |
| -c                | directory | ~/Data/Cache/                                     | Cache directory                    |
| -r                | directory | ~/Data/References/Homo_sapiens.GRCh38.Nirvana.dat | Reference directory                |
| --sd              | directory | ~/Data/SupplementaryAnnotation/GRCh38             | Supplementary annotation directory |
| -l                | file path | credentials.json                                  | path to credential file            |
| --versions-config | file path | all_annotations_GRCh38.json                       | path to versions config file       |

Above example generates the following output.

```shell
---------------------------------------------------------------------------
Illumina Connected Annotations                      (c) 2024 Illumina, Inc.
                                                                     3.25.0
---------------------------------------------------------------------------

Data Source              Type                     Status    Comments
---------------------------------------------------------------------------
DANN                     Score                    Loaded    20200205
DECIPHER                 StructuralVariant        Loaded    201509
Ensembl                  GeneModels               Loaded    112
FusionCatcher            GeneFusion               Loaded    1.33
GME                      SmallVariant             Loaded    20160618
GenomeAssembly           GenomeAssembly           Loaded    GRCh38.p14
Gerp                     Score                    Loaded    20110522
HGNC                     GeneModels               Loaded    20240603
MultiZ100Way             Protein                  Loaded    20171006
PrimateAI                SmallVariant             Loaded    0.2
PromoterAI               SmallVariant             Loaded    1.0
REVEL                    SmallVariant             Loaded    20200205
RefSeq                   GeneModels               Loaded    GCF_000001405.40-RS_2023_10
TOPMed                   SmallVariant             Loaded    freeze_5
clingen                  Gene                     Loaded    20240910
clingen                  StructuralVariant        Loaded    20240910
clingen (legacy)         StructuralVariant        Loaded    20160414
clinvar                  SmallVariant             Loaded    20240902
clinvar                  StructuralVariant        Loaded    20240902
clinvar-preview          SmallVariant             Loaded    20240902
clinvar-preview          StructuralVariant        Loaded    20240902
cosmic                   Gene                     Loaded    99
cosmic                   GeneFusion               Loaded    99
cosmic                   SmallVariant             Loaded    99
dbSNP                    SmallVariant             Loaded    156
globalAllele             SmallVariant             Loaded    151
gnomad                   Gene                     Loaded    4.1
gnomad                   LowComplexityRegions     Loaded    2.1
gnomad                   SmallVariant             Loaded    4.1
gnomad                   StructuralVariant        Loaded    4.1
gnomad-exome             SmallVariant             Loaded    4.1
mitomap                  SmallVariant             Loaded    20200819
mitomap                  StructuralVariant        Loaded    20200819
omim                     Gene                     Loaded    20240910
oneKg                    RefMinor                 Loaded    Phase 3 v3plus
oneKg                    SmallVariant             Loaded    Phase 3 v3plus
oneKg                    StructuralVariant        Loaded    Phase 3 v5a
phylopScore              ConservationScore        Loaded    hg38
phylopScore              Score                    Loaded    1.0
primateAI-3D             SmallVariant             Loaded    1.0
spliceAI                 SmallVariant             Loaded    1.3
---------------------------------------------------------------------------

Initialization                                         Time     Positions/s
---------------------------------------------------------------------------
Cache                                               00:00:03.6
SA initialization                                   00:00:08.0
VCF Position Scan                                   00:00:00.0      115,442

Reference                             SA Loading    Annotation   Variants/s
---------------------------------------------------------------------------
chr1                                    00:00:00.5  00:00:02.0        4,980

Summary                                                Time         Percent
---------------------------------------------------------------------------
Initialization                                      00:00:11.7       84.9 %
Annotation                                          00:00:02.0       14.4 %
 |--SA Loading                                      00:00:00.5        4.2 %
 |--Output writing                                  00:00:00.3        2.2 %
License Check                                       00:00:00.0        0.0 %
Usage Report                                        00:00:00.0        0.0 %
---------------------------------------------------------------------------
Gross Annotation rate:                                  718.84 positions/sec

Peak memory usage: 5.867 GB
Time: 00:00:13.8
```

## Output File

Illumina Connected Annotation produces an output file in JSON format by default.
Refer to [Illumina Connected Annotations JSON](../file-formats/illumina-annotator-json-file-format) for detailed description of the JSON file.

A VCF output format is also possible by `--output-format vcf` command line parameter, though VCF annotations are limited.
Refer to [Illumina Connected Annotations VCF](../file-formats/illumina-annotator-vcf-file-format) for detailed description of the VCF file.

## Version History

Annotations binaries have been included with DRAGEN since v3.5. The table below indicates which version of Annotations
binaries were included with different DRAGEN releases, and their AI annotation capabilities.

The Annotations binaries distributed with DRAGEN can not be changed. Newer versions of Annotations are backward compatible, and can therefore annotate output files from older DRAGEN releases.

| DRAGEN version(s)        | Annotations version | AI annotations        | Documentation         | Data Utility         |
| :----------------------- | :------------------ | :-------------------- | :-------------------- | :-------------------- |
| 4.4                      | 3.25.1              | spliceAI, primateAI3D | [3.25](https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/3.25/)|[Data Manager](https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/3.25/utilities/data-manager)|
| 4.3                      | 3.23                | spliceAI, primateAI3D |[3.23](https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/3.23/)|[Downloader](https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/3.23/introduction/getting-started#downloading-the-data-files)|
| 3.9, 3.10, 4.0, 4.1, 4.2 | 3.16.1              | spliceAI, primateAI   |[3.16](https://illumina.github.io/NirvanaDocumentation/3.16/)|[Downloader](https://illumina.github.io/NirvanaDocumentation/3.16/introduction/getting-started#downloading-the-data-files)|
| 3.8                      | 3.14                | spliceAI, primateAI   |[3.14](https://illumina.github.io/NirvanaDocumentation/3.14/)|[Downloader](https://illumina.github.io/NirvanaDocumentation/3.14/introduction/getting-started#downloading-the-data-files)|
| 3.6, 3.7                 | 3.9.0               | spliceAI, primateAI   | Not Available | Not Available |
| 3.5                      | 3.6.0               | spliceAI, primateAI   | Not Available | Not Available |


