---
title: Annotation Engine vs Data update
---

## Background

Update to annotations can be broadly categorized into two categories:

- Annotation engine (Annotator) update.
- Annotation data update.

Understanding the nature of these two types of updates is key when it comes to updating annotation.

## Annotator update

The annotator is the engine that contains logic for core annotations such as computing `variant consequences`, `HGVS` notations, mapped positions (e.g. `CDNA`, `CDS`, `protein` positions), detecting `gene fusions`, etc., and perform annotation lookups from external data sources such as `dbSNP`, `gnomAD`, `ClinVar`, `OMIM`, etc. also known as supplementary annotations (SA). Update to the annotator entails new features or bugfixes to the compute or lookup mechanism. This is completely independent of the data update such as updating `dbSNP` from v154 to v155. In other words, the same annotator can annotate with `dbSNP v154` and `dbSNP v155` when provided with the appropriate data files.

## Data update

The annotator uses data from various sources (listed in [Introduction](../introduction/introduction.mdx)). For example, gene models used for core annotations are obtained from `RefSeq` and `Ensembl`. Supplementary annotations come from various sources such as `dbSNP`, `gnomAD`, `ClinVar`, `OMIM`, etc. Any of these data can be updated without updating the annotator as long as the file formats are compatible.

## Update scenarios

Let us look at a few update scenarios.

| Requirement                      | What needs to be updated /added     | Suggested action       |
| -------------------------------- | ----------------------------------- | ---------------------- |
| New transcripts and gene symbols | Cache files from RefSeq and Ensembl | Run Downloader         |
| Update ClinVar                   | ClinVar SA files                    | Run Downloader         |
| New external annotation          | New SA files required               | Submit feature request |
| New annotation feature           | Annotator                           | Submit feature request |