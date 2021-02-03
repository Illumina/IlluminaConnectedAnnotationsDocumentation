module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/introduction',
        'introduction/dependencies',
        'introduction/getting-started',
        'introduction/parsing-json',
        'introduction/covid19'
      ],
    },
    {
      type: 'category',
      label: 'Data Sources',
      items: [
        'data-sources/1000Genomes',
        'data-sources/amino-acid-conservation',
        'data-sources/clinvar',
        'data-sources/dbsnp',
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
        'file-formats/nirvana-json-file-format',
        'file-formats/custom-annotations'
      ],
    },
    {
      type: 'category',
      label: 'Core Functionality',
      items: [
        'core-functionality/canonical-transcripts',
        'core-functionality/mnv-recomposition',
        'core-functionality/variant-ids'
      ],
    },
  ],
};
