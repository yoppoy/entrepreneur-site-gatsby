const urljoin = require("url-join");
const path = require("path");
const config = require("./data/SiteConfig");
const dotenv = require("dotenv");

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
    siteMetadata: {
        siteUrl: urljoin(config.siteUrl, config.pathPrefix),
        languages: {
            langs: ['fr', 'en'],
            defaultLangKey: 'fr'
        }
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: 'gatsby-plugin-i18n',
            options: {
                langKeyDefault: 'fr',
                useLangKeyLayout: false
            }
        },
        {
            resolve: `gatsby-plugin-webfonts`,
            options: {
                 fonts: {
                    google: [
                        {
                            family: 'Open Sans',
                            variants: ["300italic", "800italic", "400", "300", "600", "700", "800"],
                            subsets: ['latin'],
                        },
                        {
                            family: 'Montserrat',
                            variants: ["400", "700"],
                            subsets: ['latin'],
                            subsets: ['latin']
                        },
                    ],
                },
                //formats: ['woff2', 'woff'],
                useMinify: true,
                usePreload: true,
                usePreconnect: false,
            },
        },
        "gatsby-plugin-lodash",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "assets",
                path: `${__dirname}/static/`
            }
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                downloadLocal: true,
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images-contentful`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 690,
                        },
                    },
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 690
                        }
                    },
                    {
                        resolve: `gatsby-remark-relative-images`
                    },
                    {
                        resolve: "gatsby-remark-responsive-iframe"
                    },
                    "gatsby-remark-copy-linked-files",
                    "gatsby-remark-autolink-headers",
                ]
            }
        },
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: config.googleAnalyticsID
            }
        },
        {
            resolve: "gatsby-plugin-nprogress",
            options: {
                color: config.themeColor
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-catch-links",
        "gatsby-plugin-twitter",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: config.siteTitle,
                short_name: config.siteTitleShort,
                description: config.siteDescription,
                start_url: config.pathPrefix,
                background_color: config.backgroundColor,
                theme_color: config.themeColor,
                display: "minimal-ui",
                icons: [
                    {
                        src: "/logos/logo-192.png",
                        sizes: "192x192",
                        type: "image/png"
                    },
                    {
                        src: "/logos/logo-512.png",
                        sizes: "512x512",
                        type: "image/png"
                    }
                ]
            }
        },
        "gatsby-plugin-offline",
    ]
};
