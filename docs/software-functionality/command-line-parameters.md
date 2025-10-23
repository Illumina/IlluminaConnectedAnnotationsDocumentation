---
title: Command Line Parameters
---

## Introduction

Illumina Connected Annotation supports the following command line parameters:

| Option(s)                                 | Description                                                                 |
|------------------------------------------|-----------------------------------------------------------------------------|
| `--cache, -c `                | Input cache directory                                                       |
| `--in, -i `                        | Input VCF path                                                              |
| `--tsv `                           | Input TSV path                                                              |
| `--out, -o `                  | Output file prefix (.json.gz will be added to complete the file path)                                                            |
| `--ref, -r `                       | Input compressed reference sequence path                                    |
| `--sd `                       | Input supplementary annotation directory                                    |
| `--sources, -s `                  | Annotation data sources to be used (comma-separated list of supported tags)|
| `--credentials-file, -l `         | File path to user credentials (default: `~/.ilmnAnnotations/credentials.json`) |
| `--versions-config `           | Annotation version config file (default: `~/.ilmnAnnotation/<assembly>_annotation_config.json`) |
| `--ignore-license-error`                 | Ignore error due to invalid license and skip related data sources          |
| `--force-mt`                             | Forces annotation of mitochondrial variants                                |
| `--legacy-vids`                          | Enables support for legacy VIDs                                            |
| `--enable-dq`                            | Report DQ from VCF samples field                                           |
| `--enable-bidirectional-fusions`         | Enables support for bidirectional gene fusions                             |
| `--disable-junction-preservation`        | Disable junction preserving functional annotation                          |
| `--str `                          | User-provided STR annotation TSV file                                      |
| `--vcf-info `                     | Additional VCF info field keys (comma-separated) desired in the output     |
| `--vcf-sample-info `              | Additional VCF format field keys (comma-separated) desired in the output   |
| `--sa-cutoff `                    | SVs ≥ this value will not have supplementary annotations                   |
| `--simple-nomenclature-cutoff-length ` | SVs ≥ this value will have simple nomenclature annotation (default: 1000) |
| `--output-format `                | Output file format (options: `json`, `vcf`)                                |
| `--help, -h`                             | Displays the help menu                                                     |
| `--version, -v`                          | Displays the version                                                       |

Most of the options are self explanatory. In the following sections, we provide more details about some that may not be obvious:

### `--force-mt`
For `hg19` genome assembly, the default behavior is to skip annotating the mitochondrial chromosome. This can be overridden using this flag.

### `--disable-junction-preservation`
By default, junction preserving behavior as described in [Junction Preserving Annotation](../core-functionality/junction-preserving.md) is enabled. This flag can turn it off.

### `--vcf-info`
Illumina Connected Annotations does not pass all VCF info fields to the output JSON. If the user is interested in any particular field, they may request them to be passed using this parameter. Multiple info field keys need to be comma separated.

### `--vcf-sample-info`
Illumina Connected Annotations does not pass all sample fields to the output JSON. If the user is interested in any particular field, they may request them to be passed using this parameter. Multiple format field keys need to be comma separated.