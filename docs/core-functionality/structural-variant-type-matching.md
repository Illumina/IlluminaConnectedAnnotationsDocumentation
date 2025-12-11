---
title: Structural Variant Type Matching
---

## Overview

Illumina Connected Annotations includes enhanced structural variant annotation matching that considers variant type compatibility when retrieving annotations from supplementary databases. This feature ensures that only relevant annotations are returned for your structural variants, improving annotation accuracy and reducing false matches.

This structural variant type matching functionality is new in recent versions and provides more precise annotation results compared to previous versions that relied solely on genomic position overlap. **The feature is enabled by default but can be disabled using a command line option** if you prefer the legacy position-only matching behavior.


:::caution Version Compatibility
This enhanced matching is available in recent versions only.
Earlier versions performed position-only matching without considering variant types.
When upgrading, you may notice changes in annotation results due to improved precision.

To disable this logic and revert to legacy behavior, use the command line option `--enable-interval-sv-type-matching=false`.

**Disable type matching (legacy behavior):**
```bash
# Explicitly disable type matching
dotnet Nirvana.dll -i input.vcf -o output --sd SupplementaryAnnotation/ --enable-interval-sv-type-matching=false ... other arguments
```
Note:
When type matching is disabled, you may receive more annotations but with potentially lower biological relevance. For example, insertion queries might return deletion annotations from overlapping regions, which may not be biologically meaningful.
:::


## Key Concepts

### Variant Type Classification
Structural variants are classified into specific types that determine how they should be matched against database annotations:

- **Point-like variants**: Insertions and translocations - treated as events occurring at specific genomic positions
- **Span-based variants**: Deletions, duplications, and copy number variants - treated as events affecting genomic regions

### Matching Strategies
The system uses two different matching strategies depending on the variant type:

1. **Windowed Position Matching**: Used for point-like variants (insertions, translocations)
2. **Reciprocal Overlap Matching**: Used for span-based variants (deletions, duplications, CNVs)

## Supported Variant Types & Compatibility

The following table shows all recognized structural variant types, their matching strategies, and compatibility rules:

| Query Variant Type | Category | Matching Strategy | Compatible Annotation Types | Incompatible Types |
|-------------------|----------|-------------------|----------------------------|-------------------|
| **deletion** | Span-based | Reciprocal overlap (≥50%) | deletion<br/>copy_number_loss | insertion, duplication, translocation |
| **insertion** | Point-like | Windowed position (±500bp) | insertion<br/>novel_sequence_insertion<br/>mobile_element_insertion | deletion, duplication, translocation |
| **duplication** | Span-based | Reciprocal overlap (≥50%) | duplication<br/>tandem_duplication<br/>copy_number_gain | deletion, insertion, translocation |
| **tandem_duplication** | Span-based | Reciprocal overlap (≥50%) | duplication<br/>tandem_duplication<br/>copy_number_gain | deletion, insertion, translocation |
| **translocation** | Point-like | Windowed position (±500bp) | translocation only | All other types |
| **copy_number_gain** | Span-based | Reciprocal overlap (≥50%) | duplication<br/>tandem_duplication<br/>copy_number_gain | deletion, insertion, translocation |
| **copy_number_loss** | Span-based | Reciprocal overlap (≥50%) | deletion<br/>copy_number_loss | insertion, duplication, translocation |
| **copy_number_variation** | Span-based | Reciprocal overlap (≥50%) | copy_number_variation<br/>deletion<br/>duplication<br/>copy_number_loss<br/>copy_number_gain | insertion, translocation |
| **mobile_element_insertion** | Point-like | Windowed position (±500bp) | insertion<br/>novel_sequence_insertion<br/>mobile_element_insertion | deletion, duplication, translocation |
| **mobile_element_deletion** | Span-based | Reciprocal overlap (≥50%) | deletion<br/>copy_number_loss | insertion, duplication, translocation |

:::info Quick Reference
- **Loss-type variants** (deletion, copy_number_loss, mobile_element_deletion) match each other
- **Gain-type variants** (duplication, tandem_duplication, copy_number_gain) match each other  
- **Insertion-type variants** (insertion, novel_sequence_insertion, mobile_element_insertion) match each other
- **Copy number variation** matches all span-based variants but not point-like variants
- **Translocation** is exclusive and only matches other translocations
- **Point-like matching** uses ±500bp windows; **Span-based matching** requires ≥50% reciprocal overlap
:::

## Matching Rules

### Windowed Position Matching
Used for insertions and translocations:

- **Window Size**: ±500 base pairs around the variant position
- **Match Condition**: Database annotation must overlap with the expanded window
- **Rationale**: Insertions and translocations are often imprecisely positioned in different datasets

#### Example
For an insertion at position 100,000:
- Matching window: 99,500 - 100,500
- Any annotation overlapping this window will be considered a match
- Annotations outside this window will not match

### Reciprocal Overlap Matching
Used for deletions, duplications, and copy number variants:

- **Overlap Threshold**: 50% reciprocal overlap required
- **Match Condition**: The overlapping region must be at least 50% of both the query variant and the annotation
- **Rationale**: Span-based variants should have substantial positional overlap to be considered equivalent

#### Example
For a deletion from 100,000 to 200,000 (100kb):
- Database annotation from 120,000 to 180,000 (60kb)
- Overlap region: 120,000 to 180,000 (60kb)
- Reciprocal overlap: 60kb/100kb = 0.6 (60%) ✓ Match
- If overlap were only 40kb: 40kb/100kb = 0.4 (40%) ✗ No match

## Special Cases & Impact

### Annotation Handling Rules
- **Missing Type Information**: Annotations without a `variantType` field are always returned (ensures backward compatibility)
- **Unknown Variant Types**: Annotations with unrecognized variant types are filtered out
- **Missing Overlap Data**: Span-based variants require overlap calculations; point-like variants use windowed matching as fallback

### Key Benefits
- **Improved Precision**: Eliminates biologically irrelevant matches (e.g., insertions won't match deletions in the same region)
- **Maintained Sensitivity**: Related types still match (deletion ↔ copy_number_loss), with flexible overlap thresholds
- **Backward Compatibility**: Legacy databases without type information continue to work normally

## Example Scenarios

### Scenario 1: Deletion Query (Span-based Matching)
| Query | Deletion at chr1:1,000,000-1,100,000 |
|-------|-------------------------------------|

| Database Annotation | Location | Result | Reason |
|-------------------|----------|---------|---------|
| `"variantType":"deletion"` | chr1:1,020,000-1,080,000 | **Match** | Compatible type + 60% overlap (>50% threshold) |
| `"variantType":"insertion"` | chr1:1,050,000 | **No match** | Incompatible type (insertion ≠ deletion) |
| `"variantType":"copy_number_loss"` | chr1:990,000-1,110,000 | **Match** | Compatible type + 91% overlap |
| No `variantType` field | chr1:1,000,000-1,100,000 | **Match** | Missing type → always returned (legacy support) |

### Scenario 2: Insertion Query (Window-based Matching)
| Query | Insertion at chr2:5,000,000 |
|-------|----------------------------|

| Database Annotation | Location | Result | Reason |
|-------------------|----------|---------|---------|
| `"variantType":"insertion"` | chr2:4,999,800 | **Match** | Compatible type + within ±500bp window |
| `"variantType":"mobile_element_insertion"` | chr2:5,000,300 | **Match** | Compatible type + within ±500bp window |
| `"variantType":"deletion"` | chr2:5,000,050 | **No match** | Incompatible type (deletion ≠ insertion) |
| `"variantType":"insertion"` | chr2:5,001,000 | **No match** | Compatible type but outside ±500bp window |

:::tip Understanding the Examples
- **Span-based variants** (deletions) require ≥50% reciprocal overlap with compatible types
- **Point-like variants** (insertions) need to be within ±500bp window with compatible types
- **Type compatibility** is checked first - incompatible types never match regardless of position
- **Missing type information** bypasses all type checking for backward compatibility
:::

