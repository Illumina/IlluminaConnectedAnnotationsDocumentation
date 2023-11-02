module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/introduction',
        'introduction/dependencies',
        'introduction/getting-started'
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
        'file-formats/custom-annotations'
      ],
    },
    {
      type: 'category',
      label: 'Core Functionality',
      items: [
        'core-functionality/canonical-transcripts',
        'core-functionality/transcript-consequence-impacts',
        'core-functionality/gene-fusions',
        'core-functionality/variant-ids'
      ],
    },
	{
      type: 'category',
      label: 'Utilities',
      items: [
        'utilities/jasix',
        'utilities/sautils'
      ],
    },
  ],
};
