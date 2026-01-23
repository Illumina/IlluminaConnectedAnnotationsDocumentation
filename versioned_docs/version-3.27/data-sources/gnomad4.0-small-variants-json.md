```json
"gnomad": {
    "coverage": 154,
    "failedFilter": true,
    "allAf": 0.5,
    "allAn": 152428,
    "allAc": 76214,
    "allHc": 0,
    "afrAf": 0.5,
    "afrAn": 41608,
    "afrAc": 20804,
    "afrHc": 0,
    "amiAf": 0.5,
    "amiAn": 912,
    "amiAc": 456,
    "amiHc": 0,
    "amrAf": 0.5,
    "amrAn": 15314,
    "amrAc": 7657,
    "amrHc": 0,
    "easAf": 0.5,
    "easAn": 5196,
    "easAc": 2598,
    "easHc": 0,
    "finAf": 0.5,
    "finAn": 10632,
    "finAc": 5316,
    "finHc": 0,
    "nfeAf": 0.5,
    "nfeAn": 68050,
    "nfeAc": 34025,
    "nfeHc": 0,
    "asjAf": 0.5,
    "asjAn": 3472,
    "asjAc": 1736,
    "asjHc": 0,
    "sasAf": 0.5,
    "sasAn": 4834,
    "sasAc": 2417,
    "sasHc": 0,
    "midAf": 0.5,
    "midAn": 294,
    "midAc": 147,
    "midHc": 0,
    "remainingAf": 0.5,
    "remainingAn": 2116,
    "remainingAc": 1058,
    "remainingHc": 0,
    "maleAf": 0.5,
    "maleAn": 74544,
    "maleAc": 37272,
    "maleHc": 0,
    "femaleAf": 0.5,
    "femaleAn": 77884,
    "femaleAc": 38942,
    "femaleHc": 0
}
```
```json
"gnomad-exome": {
    "coverage": 53,
    "allAf": 0.495074,
    "allAn": 4060,
    "allAc": 2010,
    "allHc": 11,
    "afrAf": 0.5,
    "afrAn": 86,
    "afrAc": 43,
    "afrHc": 0,
    "amrAf": 0.5,
    "amrAn": 46,
    "amrAc": 23,
    "amrHc": 0,
    "easAf": 0.491071,
    "easAn": 112,
    "easAc": 55,
    "easHc": 0,
    "finAf": 0.5,
    "finAn": 306,
    "finAc": 153,
    "finHc": 0,
    "nfeAf": 0.49503,
    "nfeAn": 3018,
    "nfeAc": 1494,
    "nfeHc": 11,
    "asjAf": 0.461538,
    "asjAn": 26,
    "asjAc": 12,
    "asjHc": 0,
    "sasAf": 0.486111,
    "sasAn": 72,
    "sasAc": 35,
    "sasHc": 0,
    "midAf": 0.5,
    "midAn": 68,
    "midAc": 34,
    "midHc": 0,
    "remainingAf": 0.493865,
    "remainingAn": 326,
    "remainingAc": 161,
    "remainingHc": 0,
    "maleAf": 0.495212,
    "maleAn": 2924,
    "maleAc": 1448,
    "maleHc": 9,
    "femaleAf": 0.494718,
    "femaleAn": 1136,
    "femaleAc": 562,
    "femaleHc": 2
}
```

| Field        | Type   | Notes                                                                                            |
|--------------|--------|--------------------------------------------------------------------------------------------------|
| coverage     | int    | average coverage (non-negative integer values)                                                   |
| maleAf       | float  | allele frequency for male population. Range: 0 - 1.0                                             |
| maleAn       | int    | allele number for male population. Non-zero integer.                                             |
| maleAc       | int    | allele count for male population. Integer.                                                       |
| maleHc       | int    | count of homozygous individuals for male population. Non-negative integer.                       |
| femaleAf     | float  | allele frequency for female population. Range: 0 - 1.0                                           |
| femaleAn     | int    | allele number for female population. Non-zero integer.                                           |
| femaleAc     | int    | allele count for female population. Integer.                                                     |
| femaleHc     | int    | count of homozygous individuals for female population. Non-negative integer.                     |
| remainingAf  | float  | allele frequency for the Other population. Range: 0 - 1.0                                        |
| remainingAc  | int    | allele count for the Other population. Integer.                                                  |
| remainingAn  | int    | allele number for the Other population. Non-zero integer.                                        |
| remainingHc  | int    | count of homozygous individuals for Other population. Non-negative integer                       |
| allAf        | float  | allele frequency for all populations. Range: 0 - 1.0                                             |
| allAn        | int    | allele number for all populations. Non-zero integer.                                             |
| allAc        | int    | allele count for all populations. Integer.                                                       |
| allHc        | int    | count of homozygous individuals for all populations. Non-negative integer.                       |
| afrAf        | float  | allele frequency for the African / African American population. Range: 0 - 1.0                   |
| afrAc        | int    | allele count for the African / African American population. Integer.                             |
| afrAn        | int    | allele number for the African / African American population. Non-zero integer.                   |
| afrHc        | int    | count of homozygous individuals for African / African American population. Non-negative integer. |
| amiAf        | float  | allele frequency for Amish populations. Range: 0 - 1.0                                           |
| amiAn        | int    | allele number for Amish populations. Non-zero integer.                                           |
| amiAc        | int    | allele count for Amish populations. Integer.                                                     |
| amiHc        | int    | count of homozygous individuals for Amish populations. Non-negative integer.                     |
| amrAf        | float  | allele frequency for the Latino population. Range: 0 - 1.0                                       |
| amrAc        | int    | allele count for the Latino population. Integer.                                                 |
| amrAn        | int    | allele number for the Latino population. Non-zero integer.                                       |
| amrHc        | int    | count of homozygous individuals for Latino population. Non-negative integer.                     |
| easAf        | float  | allele frequency for the East Asian population. Range: 0 - 1.0                                   |
| easAc        | int    | allele count for the East Asian population. Integer.                                             |
| easAn        | int    | allele number for the East Asian population. Non-zero integer.                                   |
| easHc        | int    | count of homozygous individuals for East Asian population. Non-negative integer.                 |
| finAf        | float  | allele frequency for the Finnish population. Range: 0 - 1.0                                      |
| finAc        | int    | allele count for the Finnish population. Integer.                                                |
| finAn        | int    | allele number for the Finnish population. Non-zero integer.                                      |
| finHc        | int    | count of homozygous individuals for Finnish population. Non-negative integer                     |
| nfeAf        | float  | allele frequency for the Non-Finnish European population. Range: 0 - 1.0                         |
| nfeAc        | int    | allele count for the Non-Finnish European population. Integer.                                   |
| nfeAn        | int    | allele number for the Non-Finnish European population. Non-zero integer.                         |
| nfeHc        | int    | count of homozygous individuals for Non-Finnish European population. Non-negative integer        |
| asjAf        | float  | allele frequency for the Ashkenazi Jewish population. Range: 0 - 1.0                             |
| asjAc        | int    | allele count for the Ashkenazi Jewish population Integer.                                        |
| asjAn        | int    | allele number for the Ashkenazi Jewish population. Non-zero integer.                             |
| asjHc        | int    | count of homozygous individuals for the Ashkenazi Jewish population. Non-negative integer        |
| sasAf        | float  | allele frequency for the South Asian population. Range: 0 - 1.0                                  |
| sasAc        | int    | allele count for the South Asian population Integer.                                             |
| sasAn        | int    | allele number for the South Asian population. Non-zero integer.                                  |
| sasHc        | int    | count of homozygous individuals for the South Asian population. Non-negative integer.            |
| midAf        | float  | allele frequency for the Middle Eastern population. Range: 0 - 1.0                               |
| midAc        | int    | allele count for the iddle Eastern population Integer.                                           |
| midAn        | int    | allele number for the iddle Eastern population. Non-zero integer.                                |
| midHc        | int    | count of homozygous individuals for the iddle Eastern population. Non-negative integer.          |
| failedFilter | bool   | True if this variant failed any filters (Note: we do not list the failed filters)                |
