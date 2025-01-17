**small variants:**

```json
{
  "clinvar-preview": [
    {
      "altAllele": "A",
      "refAllele": "G",
      "variantType": "SNV",
      "accession": "VCV000437934",
      "version": "1",
      "recordType": "classified",
      "dateLastUpdated": "2023-08-06",
      "rcvs": [
        {
          "accession": "RCV000505090",
          "version": "1",
          "classifications": {
            "germlineClassification": {
              "reviewStatus": "no assertion criteria provided",
              "descriptions": [
                {
                  "dateLastEvaluated": "2016-08-31",
                  "classification": "Pathogenic"
                }
              ]
            }
          },
          "classifiedConditions": [
            {
              "condition": "Cleidocranial dysostosis",
              "db": "MedGen",
              "id": "C0008928"
            }
          ]
        }
      ],
      "classifications": {
        "germlineClassification": {
          "reviewStatus": "no assertion criteria provided",
          "classification": "Pathogenic",
          "dateLastEvaluated": "2016-08-31",
          "mostRecentSubmission": "2017-09-09",
          "conditions": [
            {
              "type": "Disease",
              "contributesToAggregateClassification": true,
              "traits": [
                {
                  "id": "820",
                  "name": {
                    "xRefs": [
                      {
                        "db": "Genetic Alliance",
                        "id": "Cleidocranial+Dysplasia/1683"
                      },
                      {
                        "db": "SNOMED CT",
                        "id": "65976001"
                      }
                    ],
                    "value": "Cleidocranial dysostosis"
                  }
                }
              ]
            }
          ]
        }
      },
      "clinicalAssertions": [
        {
          "accession": "SCV000598565"
        }
      ]
    }
  ]
}
```

**large variants:**

```json
{
  "clinvar-preview": [
    {
      "chromosome": "17",
      "begin": 150732,
      "end": 14764202,
      "variantType": "copy_number_gain",
      "accession": "VCV000154089",
      "version": "2",
      "recordType": "classified",
      "dateLastUpdated": "2023-10-15",
      "rcvs": [
        {
          "accession": "RCV000142236",
          "version": "6",
          "classifications": {
            "germlineClassification": {
              "reviewStatus": "no assertion criteria provided",
              "descriptions": [
                {
                  "dateLastEvaluated": "2014-03-10",
                  "classification": "Pathogenic"
                }
              ]
            }
          },
          "classifiedConditions": [
            {
              "condition": "See cases"
            }
          ]
        }
      ],
      "classifications": {
        "germlineClassification": {
          "reviewStatus": "no assertion criteria provided",
          "classification": "Pathogenic",
          "dateLastEvaluated": "2014-03-10",
          "mostRecentSubmission": "2015-07-13",
          "conditions": [
            {
              "type": "PhenotypeInstruction",
              "contributesToAggregateClassification": true,
              "traits": [
                {
                  "id": "18728",
                  "name": {
                    "value": "See cases"
                  }
                }
              ]
            }
          ]
        }
      },
      "clinicalAssertions": [
        {
          "accession": "SCV000183512"
        }
      ]
    }
  ]
}
```

| Field              |  Type   | Notes                                                                               |
|:-------------------|:-------:|:------------------------------------------------------------------------------------|
| chromosome         | string  | Chromosome                                                                          |
| begin              | integer | start position of variant                                                           |
| end                | integer | end of position of variant                                                          |
| refAllele          | string  |                                                                                     |
| altAllele          | string  |                                                                                     |
| accession          | string  | ClinVar ID                                                                          |
| version            | string  | ClinVar version                                                                     |
| variantType        | string  | variant type                                                                        |
| recordType         | string  | record type                                                                         |
| dateLastUpdated    | string  | yyyy-MM-dd                                                                          |
| rcvs               |  array  | RCV objects associated to this VCV                                                  |
| classifications    |  array  | classifications for this VCV                                                        |
| clinicalAssertions |  array  | SCV objects associated to this VCV                                                  |
| isAlleleSpecific   |  bool   | true when the current variant alternate allele matches the ClinVar alternate allele |

#### Variant Types

- copy_number_gain
- copy_number_loss
- deletion
- delins
- duplication
- insertion
- inversion
- SNV
- tandem_duplication

#### Review Statuses

- criteria provided, conflicting classifications
- criteria provided, multiple submitters, no conflicts
- criteria provided, single submitter
- no assertion criteria provided
- no classification provided
- practice guideline
- reviewed by expert panel

#### classification

- Benign
- Likely benign
- Pathogenic
- Uncertain significance
- Likely pathogenic
- Benign/Likely benign
- not provided
- conflicting data from submitters
- Pathogenic/Likely pathogenic
- association
- Conflicting classifications of pathogenicity
- Pathogenic; risk factor
- risk factor
- other
- drug response
- Uncertain significance; Pathogenic/Likely pathogenic
- Likely pathogenic, low penetrance
- Pathogenic; Affects
- Pathogenic, low penetrance
- protective
- Affects
- Benign; other
- Conflicting classifications of pathogenicity; other
- Conflicting classifications of pathogenicity; association
- Uncertain risk allele
- Uncertain significance; risk factor
- Likely pathogenic; risk factor
- Likely benign; association
- Likely risk allele
- Pathogenic/Likely pathogenic; other
- Pathogenic; other
- Pathogenic/Likely pathogenic/Pathogenic, low penetrance
- Pathogenic/Likely pathogenic; risk factor
- Benign/Likely benign; risk factor
- Uncertain significance/Uncertain risk allele
- Pathogenic; association; protective
- protective; risk factor
- Benign/Likely benign; other; risk factor
- Benign/Likely benign; association
- Benign; association
- Affects; association; other
- Pathogenic; protective
- Conflicting classifications of pathogenicity; drug response; other
- Conflicting classifications of pathogenicity; drug response
- Benign; drug response
- Likely pathogenic; other
- Conflicting classifications of pathogenicity; protective
- Pathogenic/Likely pathogenic; drug response
- Benign/Likely benign; other
- Likely pathogenic/Likely risk allele
- Uncertain risk allele; protective
- association not found
- Affects; association
- Uncertain significance; association
- Likely benign; other
- Uncertain significance; other
- Conflicting classifications of pathogenicity; association; risk factor Pathogenic;
- association
- Benign; risk factor
- Conflicting classifications of pathogenicity; other; risk factor
- Pathogenic/Likely risk allele; risk factor
- Uncertain significance; drug response
- Conflicting classifications of pathogenicity; risk factor
- other; risk factor
- Pathogenic/Likely pathogenic/Likely risk allele
- Likely pathogenic; drug response
- Conflicting classifications of pathogenicity; Affects
- association; drug response; risk factor
- Pathogenic; drug response
- Affects; risk factor
- Pathogenic; drug response; other
- Likely pathogenic; protective
- confers sensitivity
- Likely pathogenic; association
- Benign; Affects
- Likely pathogenic; Affects
- Uncertain risk allele; risk factor
- drug response; risk factor
- Pathogenic/Likely risk allele
- Likely benign; drug response; other
- Benign/Likely benign; drug response
- Benign/Likely benign; drug response; other
- drug response; other
- association; drug response
- Pathogenic; confers sensitivity
- association; risk factor
- Pathogenic/Pathogenic, low penetrance; other
- Benign; confers sensitivity
- confers sensitivity; other
- Likely pathogenic/Pathogenic, low penetrance
- Likely benign; risk factor                                             
