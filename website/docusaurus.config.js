const versions = require('./versions.json');

const lastVersion = versions[0];

const commonDocsOptions = {
  breadcrumbs: false,
  showLastUpdateAuthor: false,
  showLastUpdateTime: true,
  editUrl: 'https://github.com/uncefact/vckit-docs/blob/main/website/',
};

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'vc-kit',
  tagline: 'Verifiable credentials for cross border trade facilitation',
  organizationName: 'uncefact',
  projectName: 'vc-kit',
  url: 'https://uncefact.github.io',
  baseUrl: 'vckit/',
  clientModules: [
    require.resolve('./modules/snackPlayerInitializer.js'),
    require.resolve('./modules/jumpToFragment.js'),
  ],
  scripts:[
    'https://cdn.jsdelivr.net/npm/rapidoc@9.3.4/dist/rapidoc-min.min.js'

  ],
  trailingSlash: false,
  favicon: 'img/favicon.ico',
  titleDelimiter: '·',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'ignore',
  webpack: {
    jsLoader: isServer => ({
      loader: require.resolve('esbuild-loader'),
      options: {
        loader: 'tsx',
        format: isServer ? 'cjs' : undefined,
        target: isServer ? 'node12' : 'es2017',
      },
    }),
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.json'),
          editCurrentVersion: true,
          onlyIncludeVersions:
            process.env.PREVIEW_DEPLOY === 'true'
              ? ['current', ...versions.slice(0, 2)]
              : undefined,
          versions: {
            [lastVersion]: {
              badge: false,
            },
          },
          ...commonDocsOptions,
        },
        blog: {
          path: 'blog',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Blog Posts',
          feedOptions: {
            type: 'all',
          },
        },
        theme: {
          customCss: [
            require.resolve('./src/css/customTheme.scss'),
            require.resolve('./src/css/index.scss'),
            require.resolve('./src/css/versions.scss'),
          ],
        },
      }),
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      prism: {
        defaultLanguage: 'jsx',
        theme: require('./core/PrismTheme'),
      },
      navbar: {
        title: 'vc-kit',
        logo: {
          src: 'img/un-logo.svg',
          alt: 'VC Kit',
        },
        style: 'primary',
        items: [
          {
            to: '/docs/introduction',
            label: 'Getting Started',
            position: 'right',
          },
          {
            to: '/docs/features',
            label: 'Features',
            position: 'right',
          },
          {
            to: '/docs/architecture',
            label: 'Architecture',
            position: 'right',
          },
          {
            to: '/open-api',
            label: 'API Docs',
            position: 'right',
          },
          {
            to: '/docs/demos',
            label: 'Demos',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              {
                to: '/versions',
                label: 'All versions',
              },
            ],
          },
          {
            href: 'https://discord.com/channels/1100602714720829543/1103188158373449778',
            'aria-label': 'Discord Server',
            position: 'right',
            className: 'navbar-discord-link',
          },
          {
            href: 'https://github.com/uncefact/project-vckit',
            'aria-label': 'GitHub repository',
            position: 'right',
            className: 'navbar-github-link',
          },
        ],
      },
      image: 'img/logo-og.png',
      footer: {
        style: 'light',
      },
    }),
};
