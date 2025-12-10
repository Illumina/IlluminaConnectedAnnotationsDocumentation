---
title: Canonical Transcripts
---

## Overview

Because of alternative splicing, for each gene, there are often several transcripts. In the human genome, there are an average of 3.4 transcripts per gene (Tung, 2020). Users often want to identify a representative example of a gene - even if there's no biological basis for the motivation, and hence the demand for identifying a canonical transcript.

![](hk1-transcripts.png)

:::info Golden Helix Blog
A few years ago, the scientists at Golden Helix wrote an excellent post about the pitfalls and issues surrounding the identification of canonical transcripts: [What’s in a Name: The Intricacies of Identifying Variants](https://blog.goldenhelix.com/whats-in-a-name-the-intricacies-of-identifying-variants/).
:::


## RefSeq Canonical
### Tag from Source
RefSeq GFF3 files provide tags that help identify a transcript as canonical. If either `tag=MANE Select` or `tag=RefSeq Select` is present for a transcript entry, it is tagged as canonical.
```scss
NC_000001.11    BestRefSeq      mRNA    65419   71585   .       +       .       ID=rna-NM_001005484.2;Parent=gene-OR4F5;Dbxref=Ensembl:ENST00000641515.2,GeneID:79501,GenBank:NM_001005484.2,HGNC:HGNC:14825;Name=NM_001005484.2;gbkey=mRNA;gene=OR4F5;product=olfactory receptor family 4 subfamily F member 5;tag=MANE Select;transcript_id=NM_001005484.2
NC_000001.11    BestRefSeq      mRNA    41628749        41628816        .       -       .       ID=rna-NM_001415000.1;Parent=gene-LOC128125817;Dbxref=GeneID:128125817,GenBank:NM_001415000.1;Name=NM_001415000.1;Note=The RefSeq transcript aligns at 83%25 coverage compared to this genomic sequence;exception=annotated by transcript or proteomic data;gbkey=mRNA;gene=LOC128125817;inference=similar to RNA sequence%2C mRNA (same species):RefSeq:NM_001415000.1;partial=true;product=uncharacterized protein;start_range=.,41628749;tag=RefSeq Select;transcript_id=NM_001415000.1
```

If only one transcript is marked canonical the algorithm terminates. Otherwise, the following steps are performed in the order listed.

### Gene with single transcript
If a gene has only one transcript and it is not marked canonical from `RefSeq`, we mark it as canonical.

### Using HGNC
If the HGNC transcript associated with the gene is found (independent of the version number), it is marked as canonical. The same strategy is applied if multiple transcripts are marked canonical for a gene.

### Longest CDS/cDNA Heuristic
The canonical transcript is defined as either the longest CDS, if the gene has translated transcripts, or the longest cDNA.


## Ensembl Canonical
The algorithm used to select the canonical transcript is described [here](https://useast.ensembl.org/info/genome/genebuild/canonical.html). With every release, Ensembl publishes a file named `gene.txt.gz` that marks the canonical transcript for every gene. For example, for Release 113 the file can be found [here](https://ftp.ensembl.org/pub/release-113/mysql/homo_sapiens_core_113_38/gene.txt.gz). The canonical transcript id is the 12th column in gene.txt.gz.
