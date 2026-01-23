```json
"promoterAI": [
    {
      "strand": 1,
      "distanceFromTss": -292,
      "geneId": "ENSG00000274391",
      "transcriptId": "ENST00000618007.5",
      "score": 0.032
    }
]
```

| Field           |  Type   | Notes                                                                     |
|:----------------|:-------:|:--------------------------------------------------------------------------|
| strand          |   int   | Strand location of the transcript                                         |
| distanceFromTss |   int   | Number of nucleotides calculated from TSS of teh corresponding transcript |
| geneId          | string  | Gene ID                                                                   |
| transcriptId    | string  | Transcript ID (Ensembl)                                                   |
| score           | decimal | Calculated Promoter AI score                                              |
