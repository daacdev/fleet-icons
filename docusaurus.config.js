/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Fleet Icons',
  url: 'https://daacdev.github.io',
  baseUrl: '/fleet-icons/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo32x28.ico',
  organizationName: 'daacdev', // Usually your GitHub org/user name.
  projectName: 'fleet-icons', // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  themeConfig: {
    navbar: {
      title: 'Fleet Icons',
      logo: {
        alt: 'Fleet Icons Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'localeDropdown',
          position: 'left',
        },
        {
          href: 'https://github.com/daacdev/fleet-icons',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Introduction',
              to: '/',
            },
            {
              label: 'Installation',
              to: '/getting-started/installation',
            },
            {
              label: 'Icon List',
              to: '/list-icons',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/daacdev/fleet-icons',
            },
          ],
        },
      ],
      copyright: `MIT license. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/daacdev/fleet-icons/edit/documentation/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
