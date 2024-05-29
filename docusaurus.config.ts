import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Balíkuj',
    tagline: 'Expedujte rychle, jednoduše a bezchybně',
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
            content: 'Máte nápad na novou funkci, něco Vám v Balíkuj nefunguje nebo chybí? <a target="_blank" rel="noopener noreferrer" href="https://balikuj.cz">Napište nám!</a>',
            backgroundColor: '#303846',
            textColor: '#fff',
            isCloseable: false,
        },
        // Replace with your project's social card
        image: 'img/balikuj.png',
        navbar: {
            logo: {
                alt: 'Balíkuj Dokumentace',
                src: 'img/logo.png',
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
                    sidebarId: 'applicationSidebar',
                    position: 'left',
                    label: 'Aplikace',
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
                            label: 'Úvod do služby Balíkuj',
                            to: '/docs/documentation/intro',
                        },
                        {
                            label: 'Dopravci',
                            to: '/docs/carrier/intro',
                        },
                        {
                            label: 'Aplikace',
                            to: '/docs/application/intro',
                        },
                        {
                            label: 'API',
                            to: '/docs/api/intro',
                        },
                    ],
                },
                {
                    title: 'Podpora Balíkuj',
                    items: [
                        {
                            label: 'Web Balíkuj.cz',
                            href: 'https://balikuj.cz',
                        },
                        {
                            label: 'Diskusní fórum',
                            href: 'https://app.balikuj.cz/help/main',
                        },
                        {
                            label: 'Administrace',
                            href: 'https://app.balikuj.cz',
                        },
                    ],
                },
                {
                    title: 'Ostatní',
                    items: [
                        //{
                        //    label: 'Blog',
                        //    to: '/blog',
                        //},
                        {
                            label: 'GitHub',
                            href: 'https://github.com/balikujcz',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Balíkuj`,
        },
        prism: {
            additionalLanguages: ['csharp', 'php', 'json'],
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
