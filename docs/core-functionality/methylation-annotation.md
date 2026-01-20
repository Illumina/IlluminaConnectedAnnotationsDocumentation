---
title: Methylation Annotation
---


## Introduction
With the release of Illumina 5-base genome for methylation sequencing, Illumina Connected Annotation will support annotating the methylation calling output from DRAGEN.
The methylation annotation produced by Illumina Connected Annotation will be separate from variant annotation.
Illumina Connected Annotation will not perform variant annotation and will not produce variant annotation output.
Illumina Conneceted Annotation will only produce methylation annotation output with the suffix `methylation.json.gz`.


## Input file
When performing methylation annotation, Illumina Connected Annotation will accept a gVCF file as input that is different than an ordinary VCF file from variant calling.
Illumina Connected Annotation will expect some fields to be present in the gVCF file, which is:

```
##INFO=<ID=M5mC,Number=R,Type=String,Description="Marks nucleotides for which 5mC levels are reportable. The letters z, x and h indicate CG, CHG and CHH contexts, respectively. The lowercase letters z, x and h are used to report methylation of individual cytosines (C), whereas the uppercase Z marks CpG dinucleotides for which methylation reporting is aggregated across the two CpG cytosines on opposite strands. The missing value (.) is used for unreported or not applicable (A/T) nucleotides.">
```

An example of a valid gVCF entry that can be used for methylation annotation is:

```
#CHROM	POS	ID	REF	ALT	QUAL	FILTER	INFO	FORMAT	sample1
chr21	13204471	.	A	<NON_REF>	.	PASS	END=13204512;M5mC=...Z......................................,.	GT:AD:DP:GQ:MIN_DP:PL:SPL:ICNT:M5mC:DPM5mC	0/0:19,0:19:42:15:0,42,588:0,45,255:19,0:0.2381:21
```

In the INFO field, there is a field called `M5mC` that contains the methylation status for each nucleotide for each sample separated by comma.
Methylated nucleotides are marked with `Z` or `z`. The `.` indicated that the sequence is unmethylated. 
Each entry will contains nucleotide information from position start to END inclusive. In the sample above, the `M5mC` will contain methylated nucleotides from position 13204471 to 13204512 inclusive.
In each sample information, there are two fields, `M5mC` and `DPM5mC`, which indicate the score for the methylated nucletodie and the read depth.

## Running Illumina Connected Annotation for methylation annotation
To perform methylation annotation, Illumina Connected Annotation requires transcript annotation data (Ensembl or Refseq) to  be present.
To run the methylation annotation, below is the command:
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
For supplementary data, only supported methylation annotation supplementary data will be used. For now, we only have CpG Islands supplementary data.
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

The `regionId` is basically the name of the genomic feature, such as transcript ID or CpG Island ID.
The `biotype` indicates the biotype of the genomic feature, such as transcript, intron, exon, etc.
In the `sample` section, it will show the aggregate score for the corresponing genomic region for that particular sample.
In the `features` section, it will show more detailed information for each genomic feature, for example exon, intron, etc. for that particulat transcript.
The `averageCpGMethylation` is the average score obtained from the gVCF file aggregated for the genomic feature.
The `totalCpGCoverage` is the total depth of CpG sites for that genomic feature.
The `totalCpGPosition` is the total number of CpG sites that are methylated for the corresponding genomic feature.

:::info
Adding Cpg Islands supplementary data annotation will produce output region with biotype `cpgIsland`.
There will be more information in the output file for CpG Islands. Please refer to the data source section for more details.
:::

