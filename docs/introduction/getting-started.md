---
title: Getting Started
---

Illumina Connected Annotations is written in C# using [.NET Core](https://www.microsoft.com/net/download/core) (an amazing runtime environment that currently runs on Windows, Linux, Mac OS X, and in Docker images). Once .NET Core has been downloaded, all you need to do is grab the source, compile it, and grab the data files.

:::tip
Illumina Connected Annotations currently uses .NET6.0. Please make sure that you have the most current runtime from the [.NET Core downloads](https://www.microsoft.com/net/download/core) page.
:::

## Getting Illumina Connected Annotations

### Latest Release
Please visit [Illumina Connected Annotations](https://developer.illumina.com/IlluminaConnectedAnnotations). to obtain the latest release.

```bash
mkdir -p IlluminaConnectedAnnotations/Data
cd IlluminaConnectedAnnotations
unzip IlluminaConnectedAnnotations-3.18.1-net6.0.zip
```

### Quick Start
If you want to get started right away, we've created [a script](TestIlluminaConnectedAnnotations.sh) that unzips the Illumina Connected Annotations build, downloads the annotation data, and starts annotating a test file:

```bash
bash ./TestIlluminaConnectedAnnotations.sh IlluminaConnectedAnnotationsBuild.zip
```
We have verified that this script works on Windows (using Git Bash or WSL), Linux, and Mac OS X.

### Docker

Obtain the docker image in a zip file (e.g. IlluminaConnectedAnnotations-v3.21.0-net6.0-docker.tar.gz), and load it as follows

```bash
docker load < IlluminaConnectedAnnotations-v3.21.0-net6.0-docker.tar.gz
```

For Docker, we have special instructions for running the Downloader:

```bash
docker run --rm -it -v local/data/folder:/scratch IlluminaConnectedAnnotations:v3.21.0 Downloader --ga GRCh37 -o /scratch
```

Similarly, we have special instructions for running IlluminaConnectedAnnotations (Here's [a toy VCF](https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/files/HiSeq.10000.vcf.gz) in case you need it):

```bash
docker run --rm -it -v local/data/folder:/scratch IlluminaConnectedAnnotations:v3.21.0 IlluminaConnectedAnnotations -c /scratch/Cache/ \
     -r /scratch/References/Homo_sapiens.GRCh37.Nirvana.dat \
     --sd /scratch/SupplementaryAnnotation/GRCh37 \
     -i /scratch/HiSeq.10000.vcf.gz -o /scratch/HiSeq
```
:::caution
Please note that since our data files are usually accessed through a Docker volume, there is a noticeable performance penalty when running Illumina Connected Annotations in Docker.
:::
:::tip
For convenience, the user is encouraged to create aliases for the docker commands. For example:
```bash
alias IlluminaConnectedAnnotations="docker run --rm -it -v local/data/folder:/scratch IlluminaConnectedAnnotations:v3.21.0 IlluminaConnectedAnnotations"
```
:::

## Downloading the data files

To download the latest data sources (or update the ones that you already have), use the following command to automate the download from S3:

```bash
dotnet bin/Release/net6.0/Downloader.dll \
     --ga GRCh37 \
     -o Data
```

* the `--ga` argument specifies the genome assembly which can be `GRCh37`, `GRCh38`, or `both`.
* the `-o` argument specifies the output directory

:::info Glitches in the Matrix
Every once in a while, the download process does not go smoothly. Perhaps the internet connection cut out or you ran out of disk space. The Downloader attempts to detect these situations by checking the file sizes at the very end. If you see that a file was marked `truncated`, try fixing the root cause and running the downloader again.
:::

:::tip
From time to time, you can re-run the Downloader to get the latest annotation files. It will only download the files that changed.
:::

## Download a test VCF file

Here's [a toy VCF file](https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/files/HiSeq.10000.vcf.gz) you can play around with:

```bash
curl -O https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/files/HiSeq.10000.vcf.gz
```

## Running Illumina Connected Annotations

Once you have downloaded the data sets, use the following command to annotate your VCF:

```bash
dotnet Annotator.dll \
     -c Data/Cache \
     --sd Data/SupplementaryAnnotation/GRCh37 \
     -r Data/References/Homo_sapiens.GRCh37.Nirvana.dat \
     -i HiSeq.10000.vcf.gz \
     -o HiSeq.10000
```

* the `-c` argument specifies the cache directory
* the `--sd` argument specifies the supplementary annotation directory
* the `-r` argument specifies the compressed reference path
* the `-i` argument specifies the input VCF path
* the `-o` argument specifies the output filename prefix

When running Illumina Connected Annotations, performance metrics are shown as it evaluates each chromosome in the input VCF file:

```bash
---------------------------------------------------------------------------
IlluminaConnectedAnnotations                                   (c) 2020 Illumina, Inc.
Stromberg, Roy, Platzer, Siddiqui, Ouyang, et al                     3.21.0
---------------------------------------------------------------------------

Initialization                                         Time     Positions/s
---------------------------------------------------------------------------
Cache                                               00:00:00.0
SA Position Scan                                    00:00:00.0      153,634

Reference                                Preload    Annotation   Variants/s
---------------------------------------------------------------------------
chr1                                    00:00:00.2  00:00:00.8       11,873

Summary                                                Time         Percent
---------------------------------------------------------------------------
Initialization                                      00:00:00.0        1.5 %
Preload                                             00:00:00.2        4.9 %
Annotation                                          00:00:00.8       18.5 %

Time: 00:00:04.4
```

The output will be a JSON file called `HiSeq.10000.json.gz`. Here's [the full JSON file](https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/files/HiSeq.10000.json.gz).

## The Illumina Connected Annotations command line
The full command line options can be viewed by using the `-h` option or no options
```bash
dotnet Annotator.dll
---------------------------------------------------------------------------
IlluminaConnectedAnnotations                                   (c) 2020 Illumina, Inc.
Stromberg, Roy, Platzer, Siddiqui, Ouyang, et al                     3.21.0
---------------------------------------------------------------------------

USAGE: dotnet Annotator.dll -i <vcf path> -c <cache dir> --sd <sa dir> -r <ref path> -o <base output filename>
Annotates a set of variants

OPTIONS:
      --cache, -c <directory>
                             input cache directory
      --in, -i <path>        input VCF path
      --out, -o <file path>  output file path
      --ref, -r <path>       input compressed reference sequence path
      --sd <directory>       input supplementary annotation directory
      --sources, -s <VALUE>  annotation data sources to be used (comma
                               separated list of supported tags)
      --force-mt             forces to annotate mitochondrial variants
      --legacy-vids          enables support for legacy VIDs
      --enable-dq            report DQ from VCF samples field
      --enable-bidirectional-fusions
                             enables support for bidirectional gene fusions
      --str <VALUE>          user provided STR annotation TSV file
      --vcf-info <VALUE>     additional vcf info field keys (comma separated)
                               desired in the output
      --vcf-sample-info <VALUE>
                             additional vcf format field keys (comma separated)
                                desired in the output
      --help, -h             displays the help menu
      --version, -v          displays the version

Supplementary annotation version: 69, Reference version: 7
```
### Specifying annotation sources
By default, Illumina Connected Annotations will use all available data sources. However, the user can customize the set of sources using the `--sources|-s` option. If an unknown source is specified, a warning message will be printed.
```bash
dotnet Annotator.dll \
     -c Data/Cache/GRCh37 \
     --sd Data/SupplementaryAnnotation/GRCh37 \
     -r Data/References/Homo_sapiens.GRCh37.Nirvana.dat \
     -i HiSeq.10000.vcf.gz \
     -o HiSeq.10000 \
	 -s omim,gnomad,ense
 ---------------------------------------------------------------------------
 IlluminaConnectedAnnotations                                   (c) 2020 Illumina, Inc.
 Stromberg, Roy, Platzer, Siddiqui, Ouyang, et al                     3.21.0
 ---------------------------------------------------------------------------

 WARNING: Unknown tag in data-sources: ense.
 Available values are: aminoAcidConservation,primateAI,dbsnp,spliceAI,revel,cosmic,clinvar,gnomad,
 mitomap,oneKg,gmeVariome,topmed,clingen,decipher,gnomAD-preview,clingenDosageSensitivityMap,
 gerpScore,dannScore,omim,clingenGeneValidity,phylopScore,lowComplexityRegion,refMinor,
 heteroplasmy,Ensembl,RefSeq

 Initialization                                         Time     Positions/s
 ---------------------------------------------------------------------------
 SA Position Scan                                    00:00:00.3      307,966
 ....
 ..
```
The list of available values is compiled from the files provided (using `-c` and `--sd` options).
