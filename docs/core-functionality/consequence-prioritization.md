# Consequence Prioritization

Depending on the representation of a genetic variant (e.g. right vs. left aligned) the effect on the transcript may differ, leading to a possibility of different set of consequence annotations for the same variant. Even though both representations of a genetic variant correspond to the exact same haplotype, one may be annotated as more pathogenic than the other. We hypothesize that reporting of variants as likely pathogenic when the same exact haplotype can be interperted in a less pathogenic way is less likely to reflect the realized functional impact. As such, we report the set of consequences with lowest priority.

The priority of a set of consequences is determined by the highest priority consequence within that set.

## Conceptual Priority Tiers
Variants are ranked using two principles, (1) variant pathogenicity (2) annotation definition. The annotations are first ranked based on pathogenicity, then the annotations are given a lower priority if their definition is loss of a specific sequence. Variants types that are defined as the loss of a specific sequence are ranked at the bottom of the list so that if there exists a representation of the variant that does not result in the loss of that specific sequence, that representation should be preferred.

### Prioritization Ordering
(Very Low Probability of Harm)

1. synonymous_variant
2. start_retained_variant
3. stop_retained_variant
4. transcript_variant
5. non_coding_transcript_variant
6. non_coding_transcript_exon_variant
7. mature_miRNA_variant
8. coding_sequence_variant
9. intron_variant
10. upstream_gene_variant
11. downstream_gene_variant
12. exon_variant

(Low Probability of Harm)

13. splice_region_variant
14. splice_donor_region_variant
15. splice_donor_5th_base_variant
16. splice_polypyrimidine_tract_variant
17. exonic_splice_region_variant
18. regulatory_region_variant
19. three_prime_UTR_variant
20. five_prime_UTR_variant
21. protein_altering_variant

(High Probability of Harm)

22. missense_variant
23. inframe_indel
24. inframe_insertion
25. stop_gained
26. frameshift_variant
27. inframe_deletion
28. start_lost
29. stop_lost
30. splice_donor_variant
31. splice_acceptor_variant


Consequences not in the above list are treated as lowest priority.

## Disabling Consequence Prioritization
If the user is not interested in such consequence prioritization, they can disable it via the `--disable-consequence-prioritization` command line option. 
In this case, the consequence list for the left aligned variant will be reported.

## References
- Ensembl Variant Effect Predictor consequence definitions and prioritization context: https://www.ensembl.org/info/genome/variation/prediction/predicted_data.html

