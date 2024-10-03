const versions = require('./versions.json');

function getNextVersionName() {

  const expectedPrefix = '3.';

  const lastReleasedVersion = versions[0];
  if (!lastReleasedVersion.includes(expectedPrefix)) {
    throw new Error(
      'this code is only meant to be used during the 3.x development phase.',
    );
  }
  const build = parseInt(
    lastReleasedVersion.replace(expectedPrefix, ''),
    10,
  );
  return `${expectedPrefix}${build + 1}`;
}

module.exports = {
  title: 'IlluminaConnectedAnnotations',
  tagline: 'Translational research-grade variant annotation',
  url: 'https://illumina.github.io',
  baseUrl: '/IlluminaConnectedAnnotationsDocumentation/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'illumina',
  projectName: 'IlluminaConnectedAnnotationsDocumentation',
  themeConfig: {
    gtag: {
      trackingID: 'G-5KXNW9LCD7',
    },
    algolia: {
      apiKey: 'e908c17192dca08b01d9d994b576335b',
      indexName: 'illumina_nirvana',
      contextualSearch: true,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      logo: {
        src: 'img/ICAnnotations.png'
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              to: '/versions',
              label: 'All versions',
            },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Illumina, Inc. All rights reserved.`,
    },
  },
  stylesheets: [
      'https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway&family=Source+Code+Pro&display=swap'
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/',
          lastVersion: '3.23',
          versions: {
            current: {
              label: `${getNextVersionName()} (unreleased)`,
              path: '/'
            },
            '3.23': {
              path: '3.23',
              banner: 'none'
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
