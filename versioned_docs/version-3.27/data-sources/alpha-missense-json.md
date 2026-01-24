```json
"alphaMissense": [
  {
    "transcriptId": "ENST00000335137.4",
    "proteinVariant": "V2L",
    "pathogenicity": 0.2937,
    "classification": "likely_benign",
    "isIsoform": false
  }
]
```

| Field          |  Type  | Notes                                                   |
|:---------------|:------:|:--------------------------------------------------------|
| transcriptId   | string | Transcript ID (Ensembl)                                 |
| proteinVariant | string | Protein change (e.g., V2L)                              |
| pathogenicity  | float  | range: 0 - 1.0                                          |
| classification | string | e.g., likely_benign, likely_pathogenic, ambiguous       |
| isIsoform      |  bool  | true if the record originated from the isoforms TSV     |


