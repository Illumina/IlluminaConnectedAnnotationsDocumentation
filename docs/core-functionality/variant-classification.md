---
title: Variant Classification
---

## Introduction

Illumina Connected Annotation follows the [VCF Specification](https://samtools.github.io/hts-specs/VCFv4.5.pdf)
when parsing the VCF files. VCF files classify the variants based on alleles and certain `INFO` fields. 

While the VCF variant type does not depend on the size of the variant, (both a `ATG->A` and `A-><DEL>` are `deletion`) for the purpose of annotation, it is useful to classify variants into small and structural (large) variants. This is due to the realization that reporting annotations for a deletion like `1-1000-ATG-A` from `ClinVar` for a 20kbp `<DEL>` at that same location is not helpful and vice versa.
Following guidelines are used by Illumina Connected Annotations.

:::info
Structural variants are treated as intervals when providing supplementary annotations such as ClinVar, gnomAD etc.
:::

### Classifying Small and Structural Variants

| Variant Classification       | Criteria                                                    | Example                                       | 
|--------------------|-------------------------------------------------------------|-----------------------------------------------|
| Small Variant      | Single nucleotide changes                                   | `G -> A` SNP or `T -> TAA` insertion          | 
| Small Variant      | Short insertions/deletions                                  | `T -> TAA` insertion                          | 
| Structural Variant | Explicit alleles with `SVTYPE`,                             | `ACCCCT....` with `SVLEN=200` or `SVTYPE=DEL` | 
| Structural Variant | Symbolic notation (`<DEL>`, `<DUP>`, etc.),                 | `<DEL>`                                       | 
| Structural Variant | `IMPRECISE` in `INFO` field                                 | `IMPRECISE` in `INFO` field                   | 
| Structural Variant | Breakend notation (`[ ]`)                                   | `N[chr10:1234567[` translocation              | 
| Structural Variant | Expansion of short tandem repeats (STRs)                    | `<STR>` with `SVTYPE=STR`                     | 
| Structural Variant | Copy number variation (CNV) or loss of heterozygosity (LOH) | `SVTYPE=CNV` or `SVTYPE=LOH`                  | 

## Examples

### Small Variants

#### SNP

##### Input Data:

```vcf
chr1    1234567    .    G    A    .    PASS    .
```

##### Classification:

- This is a single nucleotide polymorphism (SNP)
- It does not contain breakend notation or symbolic alleles
- It does not contain `SVTYPE` or `SVLEN` in the `INFO` field

#### Short Indel

##### Input Data:

```vcf
chr2    8901234    .    T    TAA    .    PASS    .
```

##### Classification:

- This is an insertion of 2 base pairs
- The length of change is small, so it falls under small variant
- It does not contain `SVTYPE` or `SVLEN` in the `INFO` field

#### Multiallelic SNP

##### Input Data:

```vcf
chr7    2345678    .    G    A,C    .    PASS    .
```

##### Classification:

- This represents a multiallelic SNP, where two different alternative alleles exist (`A` and `C`)
- Despite multiple alleles, it does not involve large rearrangements
- It does not contain `SVTYPE` or `SVLEN` in the `INFO` field

### Structural Variants

#### Deletion

##### Input Data:

```vcf
chr3    3456789    .    N    <DEL>    .    PASS    SVTYPE=DEL;END=3457890
```

##### Classification:

- The alternate allele (`<DEL>`) is symbolic
- The `SVTYPE=DEL` confirms it is a structural variant

#### Deletion with explicit alleles

##### Input Data:

```vcf
chr1    934064    .    AGGGGAGGCGGCTGCGTTACAGGTGGGCAGGGGAGGCGGCTCCGTTACAGGTGGGCAGGGGAGGCGGCTGCGTTACA    A    .    .    END=934904;SVTYPE=DEL
```

##### Classification:

- The alternate and reference allels are precise but  `SVTYPE=DEL` indicates it is a structural variant

#### Run Of Homozygosity

##### Input Data:

```vcf
1   4000000    .    N    <ROH>    .    ROHLC    SVTYPE=ROH;END=4001000    GT    .    .    1
```

##### Classification:

- The alternate allele (`<ROH>`) is symbolic
- The `SVTYPE=ROH` confirms it is a structural variant

#### Repeat Expansion

##### Input Data:

```vcf
chrX    9876543    .    CAG    <STR>    .    PASS    SVTYPE=STR;REPEAT_UNIT=CAG
```

##### Classification:

- The alternate allele `<STR>` is symbolic, indicating a repeat expansion
- `SVTYPE=STR` confirms it is a structural variant related to repeat instability

#### Translocation

##### Input Data:

```vcf
chr7    110541589    .    N    <DEL>    27    cnvLength    SVTYPE=CNV;END=110548681;REFLEN=7092
```

##### Classification:

- The alternate allele `<DEL>` is symbolic
- `SVTYPE=CNV` confirms it is a structural variant (copy number loss)

#### Translocation

##### Input Data:

```vcf
chr4    5678901    .    N    N[chr10:1234567[    .    PASS    SVTYPE=BND
```

##### Classification:

- The alternate allele contains `[` and `]`, signifying a breakend
- `SVTYPE=BND` confirms this is a structural variant (translocation)
