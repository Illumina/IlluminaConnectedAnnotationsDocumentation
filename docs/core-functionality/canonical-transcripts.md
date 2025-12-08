---
title: Canonical Transcripts
---

## Overview

Because of alternative splicing, we often have several transcripts for each gene. In the human genome, there are an average of 3.4 transcripts per gene (Tung, 2020). Our users seem to have a need for identifying a representative example of a gene - even if there's no biological basis for the motivation, and hence the demand for identifying a canonical transcript.

![](hk1-transcripts.png)

:::info Golden Helix Blog
A few years ago, the guys over at Golden Helix wrote an excellent post about the pitfalls and issues surrounding the identification of canonical transcripts: [What’s in a Name: The Intricacies of Identifying Variants](https://blog.goldenhelix.com/whats-in-a-name-the-intricacies-of-identifying-variants/).
:::

Here we document how Illumina Connected Annotations flags a transcript as canonical.

## RefSeq
### Tag from Source
RefSeq GFF3 files provide tags that help identify a transcript as canonical. If either `tag=MANE Select` or `tag=RefSeq Select` are present for a transcript entry, it is tagged as canonical.
```scss
NC_000001.11    BestRefSeq      mRNA    65419   71585   .       +       .       ID=rna-NM_001005484.2;Parent=gene-OR4F5;Dbxref=Ensembl:ENST00000641515.2,GeneID:79501,GenBank:NM_001005484.2,HGNC:HGNC:14825;Name=NM_001005484.2;gbkey=mRNA;gene=OR4F5;product=olfactory receptor family 4 subfamily F member 5;tag=MANE Select;transcript_id=NM_001005484.2
NC_000001.11    BestRefSeq      mRNA    41628749        41628816        .       -       .       ID=rna-NM_001415000.1;Parent=gene-LOC128125817;Dbxref=GeneID:128125817,GenBank:NM_001415000.1;Name=NM_001415000.1;Note=The RefSeq transcript aligns at 83%25 coverage compared to this genomic sequence;exception=annotated by transcript or proteomic data;gbkey=mRNA;gene=LOC128125817;inference=similar to RNA sequence%2C mRNA (same species):RefSeq:NM_001415000.1;partial=true;product=uncharacterized protein;start_range=.,41628749;tag=RefSeq Select;transcript_id=NM_001415000.1
```
If only one transcript is marked canonical the algorithm terminates. Otherwise, the following steps are perfromed in the order listed.

### Gene with single transcript
If a gene has only one transcript and it is not marked canonical from `RefSeq`, we mark it as canonical.

### Using HGNC
If the HGNC transcript associated with the gene is found (independent of the version number), it is marked as canonical.

## Known Algorithms

### UCSC

UCSC publishes a list of canonical transcripts in its `knownCanonical` table which is available via the [TableBrowser](https://genome.ucsc.edu/cgi-bin/hgTables). Of the RefSeq data sources, it was the only one we could find that provided canonical transcripts:

> The canonical transcript is defined as either the longest CDS, if the gene has translated transcripts, or the longest cDNA.

If you were to implement this and compare it with the knownCanonical table, you would see a lot of exceptions to the rule.

### Ensembl

The [Ensembl glossary](http://uswest.ensembl.org/Help/Glossary) states:

> The canonical transcript is used in the gene tree analysis in Ensembl and does not necessarily reflect the most biologically relevant transcript of a gene. For human, the canonical transcript for a gene is set according to the following hierarchy:
> 1. Longest CCDS translation with no stop codons.
> 1. If no (1), choose the longest Ensembl/Havana merged translation with no stop codons.
> 1. If no (2), choose the longest translation with no stop codons.
> 1. If no translation, choose the longest non-protein-coding transcript.

### ACMG

From the ACMG Guidelines for the Interpretation of Sequence Variants:

> A reference transcript for each gene should be used and provided in the report when describing coding variants. The transcript should represent either the longest known transcript and/or the most clinically relevant transcript.

### ClinVar

From the ClinVar paper:

> When there are multiple transcripts for a gene, ClinVar selects one HGVS expression to construct a preferred name. By default, this selection is based on the first reference standard transcript identified by the RefSeqGene/LRG (Locus Reference Genomic) collaboration.

## Unified Approach

Our approach is almost identical to the one Golden Helix discussed in their article:

1. If we're looking at RefSeq, only consider NM & NR transcripts as candidates for canonical transcripts.
1. Sort the transcripts in the following order:
   1. [Locus Reference Genomic (LRG)](https://www.lrg-sequence.org/) entries occur before non-LRG entries
   1. Descending CDS length
   1. Descending transcript length
   1. Ascending accession number
1. Grab the first entry
