# Consequence Prioritization

Depending on the representation of a genetic variant (e.g. right vs. left aligned) the effect on the transcript may differ, leading to a possibility of different set of consequence annotations for the same variant.
Choosing the set of consequences with the highest potential functional impact is useful for filtering and triaging variants in clinical and research settings.
To facilitate this, Nirvana by default, reports the set of consequences with the highest potential functional impact.
The priority of a set is determined by the highest priority consequence within that set.

## Conceptual Priority Tiers
Consequence priorities are organized conceptually from minimal expected impact to substantial potential impact:

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

(Low Probability of Harm)

9. intron_variant
10. upstream_gene_variant
11. downstream_gene_variant
12. exon_variant
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

