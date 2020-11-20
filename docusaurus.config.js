module.exports = {
    title: 'bookBnB',
    tagline: 'Documentación de la app bookBnB',
    url: 'https://bookbnb.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'bookBnB', // Usually your GitHub org/user name.
    projectName: 'bookbnb.github.io', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'bookBnb Docs',
            logo: {
                alt: ' ',
                src: 'img/logo.svg',
            },
            items: [
                {
                    to: 'servicios/',
                    activeBasePath: 'servicios',
                    label: 'Servicios',
                    position: 'left',
                },
                {
                    to: 'guias/',
                    activeBasePath: 'guias',
                    label: 'Guías de usuario',
                    position: 'left',
                },
                {
                    to: 'bitacora/',
                    activeBasePath: 'bitacora',
                    label: 'Bitácora',
                    position: 'left',
                },
                {
                    to: 'postmortem/',
                    activeBasePath: 'postmortem',
                    label: 'Análisis postmortem',
                    position: 'left',
                },
                {
                    href: 'https://github.com/bookBnB',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Enlaces',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/bookBnB',
                        },
                        {
                            label: 'Enunciado',
                            href: 'https://taller-de-programacion-2.github.io/2020-10-04-trabajo-practico',
                        }
                    ],
                },
                {
                    title: 'Componentes',
                    items: [
                        {
                            label: 'Servicios',
                            to: 'servicios',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} bookBnB. Hecho con Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    id: 'servicios',
                    path: 'servicios',
                    editUrl: 'https://github.com/bookBnB/bookBnB.github.io/edit/doc/',
                    routeBasePath: 'servicios',
                    sidebarPath: require.resolve('./servicios/sidebars.js'),
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'guias',
                path: 'guias',
                routeBasePath: 'guias',
                sidebarPath: require.resolve('./guias/sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-blog',
            {
                id: 'bitacora',
                path: 'bitacora',
                routeBasePath: 'bitacora',
            },
        ],
    ]
};
