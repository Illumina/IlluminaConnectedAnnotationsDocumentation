---
title: ISCN-like Simple Nomenclature
---

## Introduction

The International System for Human Cytogenetic Nomenclature (ISCN) is a standardized system used 
to describe chromosomal abnormalities. It is a standardized system developed to describe the banding pattern of human 
chromosomes as well as any structural variations.
ISCN is used by geneticists and researchers to ensure clarity and uniformity when reporting chromosomal abnormalities.

The tool provides ISCN-like simple nomenclature to describe karyotype of the input in sample's and variant's level in both VCF and JSON outputs. 

For VCF output, you can find them in following fields:
```
##INFO=<ID=NOM,Number=.,Type=String,Description="Simple ISCN-like nomanclature for each of the variants">
##FORMAT=<ID=SNOM,Number=1,Type=String,Description="Simple nomenclature of the sample"> 
```

For JSON output, you can find them in following fields:
```json
{
    "header": {...},
    "positions":
    [
        {
            ...
            "samples":
            [
                {
                    ...
                    "simpleNomenclature": "Xq26.2q26.3(133042525_136149357)x2-3" // Simple nomenclature of the sample for this position
                }
            ],
            "variants":
            [
                {
                    ...
                    "simpleNomenclature": "dup(X)(q26.2q26.3)" // Simple ISCN-like nomanclature for each of the variants
                }
            ]
        }
    ],
    "genes": [...],
    "samples":
    [
        {
            "id": "FEMALE_SAMPLE",
            "simpleNomenclature": "3p21.31p21.1(47880200_53573886)x2 hmz,6p11.2(57801514_57827028)x3 hmz,Xq26.2q26.3(133042525_136149357)x2-3" // concated sample's nomenclature
        }
    ]
}
```

### Variant's level ISCN-like Simple Nomenclature:

#### Key Components
- **Chromosome Number**: Identifies the chromosome.
- **Arm**: Chromosome arms are labeled "p" (short arm) and "q" (long arm).
- **Banding Pattern**: Each arm is divided into regions, bands, and sub-bands that are numbered starting from the centromere (central part of the chromosome).

#### Supported Structural Variant Types

The algorithm supports the following structural variant types:
- Deletion (del)
- Duplication (dup)
- Copy Number Gain (dup)
- Copy Number Loss (del)

#### Processing Details

The provided ISCN notation algorithm processes chromosomal variants and generates ISCN notation by following these steps:

1. **Identify Variant Type**:
   The algorithm recognizes several types of chromosomal variants such as duplications, deletions, copy number gains, and copy number losses.

2. **Locate Cytogenetic Bands**:
   Using the start and end positions of the variant, the algorithm identifies the corresponding cytogenetic bands on the chromosome.

3. **Generate Notation**:
   Constructs the ISCN notation string using the variant type, chromosome number, and identified cytogenetic bands.

#### Example

For a deletion on chromosome 8 from position 19200001 to 135400001, the algorithm would:

1. Recognize the variant type as a deletion.
2. Identify the start band as `p21.3` and the end band as `q24.23`.
3. Generate the ISCN notation: `del(8)(p21.3q24.23)`.

More examples:

| Chromosome | Start Position | End Position | Variant Type     | ISCN Notation        |
|------------|----------------|--------------|------------------|----------------------|
| 8          | 1              | 19200001     | deletion         | del(8)(p21.3)        |
| 8          | 1              | 19200001     | duplication      | dup(8)(p21.3)        |
| 8          | 19200001       | 135400001    | deletion         | del(8)(p21.3q24.23)  |
| 8          | 19200001       | 135400001    | duplication      | dup(8)(p21.3q24.23)  |
| 8          | 127300001      | 131500000    | duplication      | dup(8)(q24.21q24.22) |
| 8          | 127300001      | 131500000    | copy number gain | dup(8)(q24.21q24.22) |
| 8          | 128746677      | 128749160    | duplication      | dup(8)(q24.21q24.21) |
| 8          | 128746677      | 128749160    | copy number gain | dup(8)(q24.21q24.21) |
| 8          | 135400001      | 138900001    | duplication      | dup(8)(q24.23q24.3)  |
| 8          | 135400001      | 146364022    | deletion         | del(8)(q24.23)       |
| 8          | 135400001      | 145138635    | duplication      | dup(8)(q24.23q24.3)  |
| 8          | 135400001      | 138900001    | copy number loss | del(8)(q24.23q24.3)  |
| 8          | 135400001      | 146364022    | duplication      | dup(8)(q24.23)       |
| X          | 86200001       | 103700000    | copy number loss | del(X)(q21.31q22.2)  |
| X          | 86200001       | 103700000    | deletion         | del(X)(q21.31q22.2)  |

### Sample's level ISCN-like Simple Nomenclature

#### Supported VCF Types

The tool supports following VCF files for sample level ISCN-like Simple Nomenclature:
- CNV
- Ploidy

#### CNV VCF

For CNV VCFs, the key components of the simple nomenclatures for each sample are:
1. **Chromosome**
2. **Genetic Band** of the CNV
3. **Start/End Position**
4. **Sample's Copy Number**: In the case of Mosaic Copy Number Gain Variant, we calculate the possible copy number range as *floor(ploidy \* segment mean)-ceiling(ploidy \* 
segment mean*). We get *ploidy* based on length of GT field, and *segment mean* from SM field.
5. (Optional) **Loss of Heterozygosity**

An example input VCF line:

| #CHROM | POS       | ID                                 | REF | ALT    | QUAL | FILTER | INFO                             | FORMAT             | FEMALE_SAMPLE             |
|--------|-----------|------------------------------------|-----|--------|------|--------|----------------------------------|--------------------|---------------------------|
| 3      | 47880199  | DRAGEN:CNLOH:3:47880200:53573886   | N   | \<LOH> | 100  | PASS   | END=53573886;REFLEN=5693687      | GT:SM:CN:BC:PE     | 1/1:1.0:2:5694:15,15      |
| 6      | 57801513  | DRAGEN:GAINLOH:6:57801514-57827028 | N   | \<LOH> | 100  | PASS   | END=57827028;REFLEN=25515        | GT:SM:CN:BC:PE     | 1/1:1.5:3:532812:15,15    |
| X      | 133042524 | DRAGEN:GAIN:X:133042525:136149357  | N   | \<DUP> | 100  | PASS   | END=136149357;REFLEN=3106833;HET | GT:SM:CN:CNF:BC:PE | 0/1:1.25:3:2.5:3106:15,15 |


The annotated VCF would look like:

| #CHROM | POS       | ID                                 | ... | INFO                                     | FORMAT                  | FEMALE_SAMPLE                                                  |
|--------|-----------|------------------------------------|-----|------------------------------------------|-------------------------|----------------------------------------------------------------|
| 3      | 47880199  | DRAGEN:CNLOH:3:47880200:53573886   | ... | END=53573886;REFLEN=5693687;CSQ=...      | GT:SM:CN:BC:PE:**SNOM**     | 1/1:1.0:2:5694:15,15:**3p21.31p21.1(47880200_53573886)x2 hmz**     |
| 6      | 57801513  | DRAGEN:GAINLOH:6:57801514-57827028 | ... | END=57827028;REFLEN=25515;CTB=6p11.2     | GT:SM:CN:BC:PE:**SNOM**     | 1/1:1.5:3:532812:15,15:**6p11.2(57801514_57827028)x3 hmz**         |
| X      | 133042524 | DRAGEN:GAIN:X:133042525:136149357  | ... | END=136149357;REFLEN=3106833;HET;CSQ=... | GT:SM:CN:CNF:BC:PE:**SNOM** | 0/1:1.25:3:2.5:3106:15,15:**Xq26.2q26.3(133042525_136149357)x2-3** |


#### Ploidy VCF

For a Ploidy VCF, the key components of the simple nomenclature are:
1. **Reference Sex Karyotype**, which is given in the input VCF header
2. **Chromosome**
3. **Chromosome's Ploidy Number** indicated by `-` or `+`

Detailed processing logic is described below:
1. Read the **referenceSexKaryotype** from header "##referenceSexKaryotype=XY" which gives the reference_ploidy_number=2, reference_x_ploidy_number=1, reference_y_ploidy_number=1. 
Full sex ploidy reference number table as specified here: [reference sex karyotype of ploidy caller](https://help.dragen.illumina.com/product-guides/dragen-v4.3/dragen-dna-pipeline/ploidy-calling/ploidy-caller#reference-sex-karyotype)
2. For any whole chromosome \<DEL>/\<DUP> variant, calculate *ploidy_diff_count = NDC \* reference_ploidy_number* (use *reference_x_or_y_ploidy_number* if it is sex chromosome) 
for 
each sample, and produce *ploidy_diff_count* times of -/+CHR into SNOM field.

An example ploidy VCF:
```tsv
##referenceSexKaryotype=XY
##INFO=<ID=END,Number=1,Type=Integer,Description="End position of the variant described in this record">
##INFO=<ID=SVTYPE,Number=1,Type=String,Description="Type of structural variant">
##ALT=<ID=DEL,Description="Region of lowered copy number relative to the reference, or a deletion breakpoint">
##ALT=<ID=DUP,Description="Region of elevated copy number relative to the reference, or a tandem duplication breakpoint">
##FILTER=<ID=LowQual,Description="QUAL below 20">
##FORMAT=<ID=DC,Number=1,Type=Float,Description="Depth of coverage">
##FORMAT=<ID=NDC,Number=1,Type=Float,Description="Normalized depth of coverage">
#CHROM	POS	ID	REF	ALT	QUAL	FILTER	INFO	FORMAT	SM-LGH3Z
chr1	1	.	N	.	28.8542	PASS	END=248956422	DC:NDC	62.6489:1.01177
chr2	1	.	N	.	31.4584	PASS	END=242193529	DC:NDC	61.938:1.00029
chr3	1	.	N	.	30.9953	PASS	END=198295559	DC:NDC	61.612:0.995028
chr4	1	.	N	.	21.6147	PASS	END=190214555	DC:NDC	60.5016:0.977094
chr5	1	.	N	.	31.0972	PASS	END=181538259	DC:NDC	61.6479:0.995607
chr6	1	.	N	.	31.4546	PASS	END=170805979	DC:NDC	61.8865:0.999461
chr7	1	.	N	.	31.0756	PASS	END=159345973	DC:NDC	61.6399:0.995478
chr8	1	.	N	.	29.7097	PASS	END=145138636	DC:NDC	61.3224:0.990351
chr9	1	.	N	.	31.1025	PASS	END=138394717	DC:NDC	61.6499:0.995639
chr10	1	.	N	<DEL>	31.3434	PASS	END=133797422	DC:NDC	62.0741:0.00249
chr11	1	.	N	<DEL>	31.4584	PASS	END=135086622	DC:NDC	61.9018:0.49708
chr12	1	.	N	<DUP>	31.1682	PASS	END=133275309	DC:NDC	62.1638:1.50394
chr13	1	.	N	<DUP>	20.9025	PASS	END=114364328	DC:NDC	60.4509:1.976276
chr14	1	.	N	.	31.1918	PASS	END=107043718	DC:NDC	62.1537:1.00378
chr15	1	.	N	.	26.9044	PASS	END=101991189	DC:NDC	62.884:1.01557
chr16	1	.	N	.	29.5543	PASS	END=90338345	DC:NDC	62.5433:1.01007
chr17	1	.	N	.	17.2853	LowQual	END=83257441	DC:NDC	63.6241:1.02752
chr18	1	.	N	.	24.6182	PASS	END=80373285	DC:NDC	60.7381:0.980915
chr19	1	.	N	.	23.6804	PASS	END=58617616	DC:NDC	63.1802:1.02035
chr20	1	.	N	.	29.2849	PASS	END=64444167	DC:NDC	62.5859:1.01076
chr21	1	.	N	.	29.4056	PASS	END=46709983	DC:NDC	61.2726:0.989546
chr22	1	.	N	.	16.8285	LowQual	END=50818468	DC:NDC	63.6517:1.02797
chrX	1	.	N	<DUP>	150	PASS	END=156040895	DC:NDC	88.8375:2.050044
chrY	1	.	N	<DUP>	150	PASS	END=57227415	DC:NDC	88.8375:2.050044
```

The resulted VCF:

| #CHROM | POS | ID | REF | ALT   | QUAL    | FILTER | INFO                              | FORMAT          | SM-LGH3Z                     |
|--------|-----|----|-----|-------|---------|--------|-----------------------------------|-----------------|------------------------------|
| chr10  | 1   | .  | N   | <DEL> | 31.3434 | PASS   | END=133797422;CTB=10p15.3-q26.3   | DC:NDC:**SNOM** | 62.0741:0.00249:**-10,-10**  |
| chr11  | 1   | .  | N   | <DEL> | 31.4584 | PASS   | END=135086622;CTB=11p15.5-q25     | DC:NDC:**SNOM** | 61.9018:0.49708:**-11**      |
| chr12  | 1   | .  | N   | <DUP> | 31.1682 | PASS   | END=133275309;CTB=12p13.33-q24.33 | DC:NDC:**SNOM** | 62.1638:1.50394:**+12**      |
| chr13  | 1   | .  | N   | <DUP> | 20.9025 | PASS   | END=114364328;CTB=13p13-q34       | DC:NDC:**SNOM** | 60.4509:1.976276:**+13,+13** |
| chrX   | 1   | .  | N   | <DUP> | 150     | PASS   | END=156040895;CTB=Xp22.33-q28     | DC:NDC:**SNOM** | 88.8375:2.050044:**+X**      |
| chrY   | 1   | .  | N   | <DUP> | 150     | PASS   | END=57227415;CTB=Yp11.32-q12      | DC:NDC:**SNOM** | 88.8375:2.050044:**+Y**      |



Resulted JSON:
```json
{
  "header": {
    "annotator": "Illumina Connected Annotations 3.24.0",
    ...
    "samples": [
      "SM-LGH3Z"
    ]
  },
  "positions": [
    {
      "chromosome": "chr10",
      "position": 1,
      "svEnd": 133797422,
      "refAllele": "N",
      "altAlleles": [
        "<DEL>"
      ],
      "quality": 31.3434,
      "filters": [
        "PASS"
      ],
      "cytogeneticBand": "10p15.3-q26.3",
      "samples": [
        {
          "simpleNomenclature": "-10,-10",
          "normalizedDepthOfCoverage": 0.0025
        }
      ],
      "variants": [
        ...
      ]
    },
    {
      "chromosome": "chr11",
      "position": 1,
      "svEnd": 135086622,
      "refAllele": "N",
      "altAlleles": [
        "<DEL>"
      ],
      "quality": 31.4584,
      "filters": [
        "PASS"
      ],
      "cytogeneticBand": "11p15.5-q25",
      "samples": [
        {
          "simpleNomenclature": "-11",
          "normalizedDepthOfCoverage": 0.4971
        }
      ],
      "variants": [
        ...
      ]
    },
    {
      "chromosome": "chr12",
      "position": 1,
      "svEnd": 133275309,
      "refAllele": "N",
      "altAlleles": [
        "<DUP>"
      ],
      "quality": 31.1682,
      "filters": [
        "PASS"
      ],
      "cytogeneticBand": "12p13.33-q24.33",
      "samples": [
        {
          "simpleNomenclature": "+12",
          "normalizedDepthOfCoverage": 1.5039
        }
      ],
      "variants": [
        ...
      ]
    },
    {
      "chromosome": "chr13",
      "position": 1,
      "svEnd": 114364328,
      "refAllele": "N",
      "altAlleles": [
        "<DUP>"
      ],
      "quality": 20.9025,
      "filters": [
        "PASS"
      ],
      "cytogeneticBand": "13p13-q34",
      "samples": [
        {
          "simpleNomenclature": "+13,+13",
          "normalizedDepthOfCoverage": 1.9763
        }
      ],
      "variants": [
        ...
      ]
    },
    {
      "chromosome": "chrX",
      "position": 1,
      "svEnd": 156040895,
      "refAllele": "N",
      "altAlleles": [
        "<DUP>"
      ],
      "quality": 150,
      "filters": [
        "PASS"
      ],
      "cytogeneticBand": "Xp22.33-q28",
      "samples": [
        {
          "simpleNomenclature": "+X",
          "normalizedDepthOfCoverage": 2.05
        }
      ],
      "variants": [
        ...
      ]
    },
    {
      "chromosome": "chrY",
      "position": 1,
      "svEnd": 57227415,
      "refAllele": "N",
      "altAlleles": [
        "<DUP>"
      ],
      "quality": 150,
      "filters": [
        "PASS"
      ],
      "cytogeneticBand": "Yp11.32-q12",
      "samples": [
        {
          "simpleNomenclature": "+Y",
          "normalizedDepthOfCoverage": 2.05
        }
      ],
      "variants": [
        ...
      ]
    }
  ],
  "samples": [
    {
      "id": "SM-LGH3Z",
      "simpleNomenclature": "48,XY,-10,-10,-11,+12,+13,+13,+X,+Y"
    }
  ]
}
```


## References

- [An International System for Human Cytogenomic Nomenclature (2020)](https://karger.com/books/book/358/ISCN-2020An-International-System-for-Human)
- [HGVS website describing ISCN](https://hgvs-nomenclature.org/stable/recommendations/DNA/complex)
- [Illumina DRAGEN v4.3 Ploidy Caller](https://help.dragen.illumina.com/product-guides/dragen-v4.3/dragen-dna-pipeline/ploidy-calling/ploidy-caller)
- [Illumina DRAGEN v4.3 CNV Output](https://help.dragen.illumina.com/product-guides/dragen-v4.3/dragen-dna-pipeline/cnv-calling/cnv-output)
