---
title: ABraOM
---

## Overview
Illumina Connected Annotation provides allele frequency annotations from [ABraOM](https://ABraOM.ib.usp.br/index.php) which is a repository of genomic variants from individual in Sao Paolo, Brazil.

ABraOM has data for both GRCh37 and GRCh38.

| Assembly | Name | Description                                                                       |
|:---------|:-----|:----------------------------------------------------------------------------------|
| GRCh37 | SABE609 | ABraOM dataset for GRCh37, coming from exome samples from 609 individuals         |
| GRCh38 | SABE-WGS-1171 | ABraOM dataset for GRCh38, coming from whole genome samples from 1171 individuals |  

## Data input
Below are some examples of entry for SABE609 dataset.
```
Chr	Start	Ref	Alt	PredictedFunc.refGene	Gene.refGene	PredConsequence.refGene	avsnp147	FILTER	CEGH Filter	HomozygousALT count	Hemizygous count	Allele number	Allele ALT count	Frequencies	Cohort
1	13116	T	G	ncRNA_intronic	DDX11L1	NA	rs62635286	LowQual	FDP	2	0	598	6	0.010033	SABE609
1	13244	G	A	ncRNA_exonic	DDX11L1	NA	NA	LowQual	FAB	0	0	456	1	0.002193	SABE609
1	13248	C	G	ncRNA_exonic	DDX11L1	NA	NA	VQSRTrancheSNP99.00to99.90	FAB	0	0	482	2	0.004149	SABE609
1	13273	G	C	ncRNA_exonic	DDX11L1	NA	rs531730856	VQSRTrancheSNP99.00to99.90	WK-LowCall	20	0	600	68	0.113333	SABE609
1	13302	C	T	ncRNA_exonic	DDX11L1	NA	rs180734498	VQSRTrancheSNP99.00to99.90	WK-LowCall	1	0	700	12	0.017143	SABE609
1	13380	C	G	ncRNA_exonic	DDX11L1	NA	rs571093408	VQSRTrancheSNP99.00to99.90	FAB	0	0	514	4	0.007782	SABE609
...
```

As for SABE-WGS-1171.
```
Chr	Start	Ref	Alt	PredictedFunc.refGene	Gene.refGene	PredConsequence.refGene	avsnp150	FILTER	CEGH_Filter	HomozygousALT_count	Hemizygous_count	Allele_number	Allele_ALT_count	Frequencies	Cohort
1	10354	C	A	intergenic	DDX11L1;NONE	dist=NONE;dist=1520	rs1015856060	VQSRTrancheSNP99.80to99.90	FDP	6	0	624	12	0.019231	SABE-WGS-1171
1	10378	CCCTAACCCTAACCCCTAACCCCTAACCCTAACCCTAACCCTAACCCTAACCCTAACCCTAAC-intergenic	DDX11L1;NONE	dist=NONE;dist=1434		PASS	FDP	20	1080	6	0.005556	SABE-WGS-1171
1	10379	CCTAA	-	intergenic	DDX11L1;NONE	dist=NONE;dist=1491		VQSRTrancheINDEL99.00to99.30	FDP	1	0	1190	20.001681	SABE-WGS-1171
1	10384	CCCTAACCCCTAACCCCTAACCCTAACCCTAACCCTAACCCTAACCCTAACCCTAAC	-intergenic	DDX11L1;NONE	dist=NONE;dist=1434		PASS	vSR-LowCall	0	0	1042	1	0.000960	SABE-WGS-1171
1	10390	CCCCTAACCCCTAACCCTAACCCTAACCCTAACCCTAACCCTAACCCTAAC	-	intergenic	DDX11L1;NONE	dist=NONE;dist=1434		PASS	vSR-LowCall	0	0	838	1	0.001193	SABE-WGS-1171
1	10390	C	-	intergenic	DDX11L1;NONE	dist=NONE;dist=1484	rs766767872	PASS	FDP	1	0	842	4	0.004751SABE-WGS-1171
1	10391	CCCTAACCCCTAACCCTAACCCTAACCCTAACCCTAACCCTAA	-	intergenic	DDX11L1;NONE	dist=NONE;dist=1441		PASS	WK-LowCall	30	0	902	90	0.099778	SABE-WGS-1171
1	10396	AC	-	intergenic	DDX11L1;NONE	dist=NONE;dist=1477		PASS	FDP	0	0	812	1	0.001232	SABE-WGS-1171
1	10398	CCCTAA	-	intergenic	DDX11L1;NONE	dist=NONE;dist=1471		PASS	FDP	9	0	1004	21	0.020916	SABE-WGS-1171
```

## Parsing
From the TSV file, the following columns are parsed out and provided in the annotation output:

| Column             | Description                        | Illumina Connected Annotatyion JSON key |
|:-------------------|:-----------------------------------|:----------------------------------------|
| HomozygousALT_count	| Homozygous alt allele count number | `homozygote`                            |
| Hemizygous_count	  | Hemizygous allele count number     | `hemizygote`                            |
| Allele_number	     | Total allele number                | `allAn`                                        |
| Allele_ALT_count   | Number of alt allele               |         `allAc`                                |	
| Frequencies        | Frequency of alt allele            |          `allAf`                               |    

## Output
ABraOM supplementary data will have `abraom` key in Illumina Connected Annotation JSON output.
Below is an example of annotation output from ABraOM.
```
"abraom": {
        "homozygote": 532,
        "hemizygote": 0,
        "allAn": 1164,
        "allAc": 1113,
        "allAf": 0.956186
      }
```


