---
title: Methylation Annotation
---


## Introduction
With the release of Illumina’s 5-base genome for methylation sequencing, Illumina Connected Annotation can annotate regions of interest using methylation data.
Methylation annotation is generated independently of standard variant annotation—Illumina Connected Annotation.
While performing methylation annotation, standard variant annotation will not be produced.
Methylation annotation output, will be written in a file with the suffix `methylation.json.gz` to keep it separate from standard annotation.


## Input file
When performing methylation annotation, Illumina Connected Annotation will accept a gVCF file as input that needs to contain some fields specific to methylation data:

```
##INFO=<ID=M5mC,Number=R,Type=String,Description="Marks nucleotides for which 5mC levels are reportable. The letters z, x and h indicate CG, CHG and CHH contexts, respectively. The lowercase letters z, x and h are used to report methylation of individual cytosines (C), whereas the uppercase Z marks CpG dinucleotides for which methylation reporting is aggregated across the two CpG cytosines on opposite strands. The missing value (.) is used for unreported or not applicable (A/T) nucleotides.">
```

An example of a valid gVCF entry that can be used for methylation annotation is:

```
#CHROM	POS	ID	REF	ALT	QUAL	FILTER	INFO	FORMAT	sample1
chr21	13204471	.	A	<NON_REF>	.	PASS	END=13204512;M5mC=...Z......................................,.	GT:AD:DP:GQ:MIN_DP:PL:SPL:ICNT:M5mC:DPM5mC	0/0:19,0:19:42:15:0,42,588:0,45,255:19,0:0.2381:21
```

In the INFO field, `M5mC` encodes methylation status per nucleotide for each sample (samples are comma-separated).
Methylated cytosines are indicated by `Z` or `z`, while `.` indicates an unmethylated (or not reported) position.
Each record covers the reference interval from `POS` through `END` (inclusive). In the example above, `M5mC` spans positions 13204471–13204512.
In the sample column, the `M5mC` and `DPM5mC` fields report the methylation value and the corresponding read depth, respectively.

## Running Illumina Connected Annotation for methylation annotation
To perform methylation annotation, Illumina Connected Annotation requires transcript annotation data (Ensembl or Refseq) to  be present.
The command line to run Illumina Connected Annotation for methylation annotation is as follows:
```
Annotator
-i [input file path] 
-o [output file path name] 
-c [path to Cance folder] 
-r [path to genome reference file] 
--sd [path to supplementary data folder] 
--versions-config [path to version config json file] 
--enable-methylation-annotation true
```

:::info
Supplementary annotations are limited when performing methylation annotation. Currently, only CpG Islands supplementary data is supported.
:::

## Output file
The output file will be a gzipped JSON file that contains methylation annotation information. The output will contain information of the genomic feature that are methylated.
Example of the genome feature information produce in the output:
```
{
  "regionId": "ENST00000756859.1",
  "biotype": "lncrna",
  "samples": [
    {
      "sampleId": "mate_len_200bp_100X",
      "averageCpGMethylation": 0.4166666666666667,
      "totalCpGCoverage": 12,
      "totalCpGPosition": 1.5
    }
  ],
  "features": [
    {
      "featureId": 3,
      "biotype": "intron",
      "samples": [
        {
          "sampleId": "mate_len_200bp_100X",
          "averageCpGMethylation": 0.4166666666666667,
          "totalCpGCoverage": 12,
          "totalCpGPosition": 1.5
        }
      ]
    }
  ]
}
```

The table below describes the fields in the methylation annotation output:

| Field | Description                                                                                                   |
| :--- |:--------------------------------------------------------------------------------------------------------------|
| `regionId` | Identifier of the genomic feature, such as transcript ID or CpG Island ID.                                    |
| `biotype` | The biotype of the genomic feature, such as transcript, intron, exon, etc.                                    |
| `samples` | Aggregate score for the corresponding genomic region for that particular sample.                              |
| `features` | Detailed information for each genomic feature, for example exon, intron, etc. for that particular transcript. |
| `averageCpGMethylation` | The average score obtained from the gVCF file aggregated for the genomic feature.                             |
| `totalCpGCoverage` | The total depth of CpG sites for that genomic feature.                                                        |
| `totalCpGPosition` | The total number of CpG sites that are methylated for the corresponding genomic feature.                      |

:::info
Adding Cpg Islands supplementary data annotation will produce output region with biotype `cpgIsland`.
There will be more information in the output file for CpG Islands. Please refer to the data source section for more details.
:::
