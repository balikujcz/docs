import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Balíkuj.cz',
    tagline: 'Rychle. Přehledně. Bezpečně.',
    favicon: 'img/favicon.ico',
    staticDirectories: ['static'],

    // Set the production url of your site here
    url: 'https://docs.balikuj.cz',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',
    trailingSlash: false,
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'balikujcz', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'cs-CZ',
        locales: ['cs-CZ'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/balikujcz/docs/blob/main/',
                },
                //blog: {
                //    showReadingTime: true,
                //    // Please change this to your repo.
                //    // Remove this to remove the "edit this page" links.
                //    editUrl:
                //        'https://github.com/balikujcz/docs/tree/main/packages/create-docusaurus/templates/shared/',
                //},
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        announcementBar: {
            id: 'newfeatures',
            content: 'Máte nápad na novou funkci, něco Vám v balíkuj.cz nefunguje nebo chybí? <a target="_blank" rel="noopener noreferrer" href="https://www.balikuj.cz">Napište nám!</a>',
            backgroundColor: '#303846',
            textColor: '#fff',
            isCloseable: false,
        },
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Balíkuj.cz',
            logo: {
                alt: 'Balíkuj.cz Dokumentace',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'docsSidebar',
                    position: 'left',
                    label: 'Dokumentace',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'carrierSidebar',
                    position: 'left',
                    label: 'Dopravci',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'apiSidebar',
                    position: 'left',
                    label: 'API',
                },
                //{
                //    type: 'docSidebar',
                //    sidebarId: 'tutorialSidebar',
                //    position: 'left',
                //    label: 'Tutorial',
                //},
                //{
                //    to: '/blog',
                //    label: 'Blog',
                //    position: 'left'
                //},
                {
                    href: 'https://github.com/balikujcz/docs',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Dokumentace',
                    items: [
                        {
                            label: 'Úvod do služby balíkuj.cz',
                            to: '/docs/documentation/intro',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/docusaurus',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        //{
                        //    label: 'Blog',
                        //    to: '/blog',
                        //},
                        {
                            label: 'GitHub',
                            href: 'https://github.com/facebook/docusaurus',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} balíkuj.cz`,
        },
        prism: {
            additionalLanguages: ['csharp', 'php', 'json'],
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
