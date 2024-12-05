module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/introduction',
        'introduction/licensedContent',
        'introduction/dependencies',
        'introduction/getting-started',
        'introduction/parsing-json'
      ],
    },
    {
      type: 'category',
      label: 'Data Sources',
      items: [
        'data-sources/1000Genomes',
        'data-sources/amino-acid-conservation',
        'data-sources/cancer-hotspots',
        'data-sources/clingen',
        'data-sources/clinvar',
        'data-sources/clinvar-preview',
        'data-sources/cosmic',
        'data-sources/dann',
        'data-sources/dbsnp',
        'data-sources/decipher',
        'data-sources/fusioncatcher',
        'data-sources/gerp',
        'data-sources/gme',
        'data-sources/gnomad',
        'data-sources/mito-heteroplasmy',
        'data-sources/mitomap',
        'data-sources/omim',
        'data-sources/phylop',
        'data-sources/primate-ai',
        'data-sources/revel',
        'data-sources/splice-ai',
        'data-sources/topmed'
      ],
    },
    {
      type: 'category',
      label: 'File Formats',
      items: [
        'file-formats/illumina-annotator-json-file-format',
        'file-formats/illumina-annotator-vcf-file-format',
        'file-formats/custom-annotations',
      ],
    },
    {
      type: 'category',
      label: 'Core Functionality',
      items: [
        'core-functionality/canonical-transcripts',
        'core-functionality/gene-fusions',
        'core-functionality/simple-nomenclature-notation',
        'core-functionality/junction-preserving',
        'core-functionality/transcript-consequence-impacts',
        'core-functionality/variant-ids'
      ],
    },
	 {
      type: 'category',
      label: 'Utilities',
      items: [
        'utilities/jasix',
        'utilities/sautils',
        "utilities/data-manager",
        "utilities/jist",
      ],
    },
    {
      type: 'category',
      label: 'FAQs',
      items: [
        'frequently-asked-questions/Annotator-vs-data-update'
      ],
    },
  ],
};
