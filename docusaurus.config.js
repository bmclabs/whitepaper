const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Battle Memecoin Club Whitepaper',
  tagline: 'The Ultimate Memecoin Battle Platform',
  url: 'https://battlememecoin.club',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bmc', // Usually your GitHub org/user name.
  projectName: 'whitepaper', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/bmc/whitepaper/edit/main/website/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
      },
      navbar: {
        title: null,
        logo: {
          alt: 'Battle Memecoin Club Logo',
          src: 'img/bmc-logo.gif',
        },
        items: [
          {
            to: 'https://battlememecoin.club',
            label: 'Official Site',
            position: 'right',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          {
            to: 'https://twitter.com/BMCofficial',
            label: 'Twitter',
            position: 'right',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          {
            to: 'https://discord.gg/bmc',
            label: 'Discord',
            position: 'right',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Whitepaper Sections',
            items: [
              {
                label: 'Abstract',
                to: '/abstract',
              },
              {
                label: 'Introduction',
                to: '/introduction',
              },
              {
                label: 'Battle Arena',
                to: '/battle-arena',
              },
              {
                label: 'Tokenomics',
                to: '/tokenomics',
              },
            ],
          },
          {
            title: 'Official Links',
            items: [
              {
                label: 'Main Website',
                to: 'https://battlememecoin.club',
              },
              {
                label: 'Privacy Policy',
                to: 'https://battlememecoin.club/privacy-policy',
              },
              {
                label: 'Terms of Service',
                to: 'https://battlememecoin.club/terms-of-service',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/BMCofficial',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/bmc',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Battle Memecoin Club. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
