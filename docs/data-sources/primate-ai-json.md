```json
"primateAI-3D": [
  {
    "aminoAcidPosition": 2,
    "refAminoAcid": "V",
    "altAminoAcid": "M",
    "score": 0.616944,
    "scorePercentile": 0.52,
    "genePercentile": 0.7,
    "classification": "pathogenic",    
    "ensemblTranscriptId": "ENST00000335137.4",
    "refSeqTranscriptId": "NM_001005484.1",
    "geneSymbol":"OR4F5" 
  }
]
```

| Field               |  Type  | Notes                               |
|:--------------------|:------:|:------------------------------------|
| aminoAcidPosition   |  int   | Amino Acid Position (1-based)       |
| refAminoAcid        | string | Reference Amino Acid                |
| altAminoAcid        | string | Alternate Amino Acid                |
| ensemblTranscriptId | string | Transcript ID (Ensembl)             |
| refSeqTranscriptId  | string | Transcript ID (RefSeq)              |
| scorePercentile     | float  | range: 0 - 1.0                      |
| genePercentile      | float  | range: 0 - 1.0                      |
| score               | float  | range: 0 - 1.0                      |
| classification      | string | pathogenic or benign classification |
| geneSymbol          | string | HGNC gene symbol                    |