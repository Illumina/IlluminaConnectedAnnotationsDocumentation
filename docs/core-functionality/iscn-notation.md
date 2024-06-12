---
title: ISCN Notation
---

## Introduction

The International System for Human Cytogenetic Nomenclature (ISCN) is a standardized system used 
to describe chromosomal abnormalities. It is a standardized system developed to describe the banding pattern of human 
chromosomes as well as any structural variations.
ISCN is used by geneticists and researchers to ensure clarity and uniformity when reporting chromosomal abnormalities.

### Key Components of ISCN Notation:
- **Chromosome Number**: Identifies the chromosome.
- **Arm**: Chromosome arms are labeled "p" (short arm) and "q" (long arm).
- **Banding Pattern**: Each arm is divided into regions, bands, and sub-bands that are numbered starting from the centromere (central part of the chromosome).

## Overview

The provided ISCN notation algorithm processes chromosomal variants and generates ISCN notation by following these steps:

1. **Identify Variant Type**: 
The algorithm recognizes several types of chromosomal variants such as duplications, deletions, copy number gains, and copy number losses.

2. **Locate Cytogenetic Bands**: 
Using the start and end positions of the variant, the algorithm identifies the corresponding cytogenetic bands on the chromosome.

3. **Generate Notation**: 
Constructs the ISCN notation string using the variant type, chromosome number, and identified cytogenetic bands.


### Supported Variant Types

The algorithm supports the following variant types:
- Deletion (del)
- Duplication (dup)
- Copy Number Gain (dup)
- Copy Number Loss (del)

### Example

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

## References

- [An International System for Human Cytogenomic Nomenclature (2020)](https://karger.com/books/book/358/ISCN-2020An-International-System-for-Human)
- [HGVS website describing ISCN](https://hgvs-nomenclature.org/stable/recommendations/DNA/complex)
