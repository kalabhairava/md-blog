/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: `Manjunatha's blog`,
    description: `Manjunatha's blog on JavaScript and its relatives.`,
    author: `Manjunatha D (https://twitter.com/__manjunathad)`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // This plugin adds the babel preset `@babel/preset-typescript` to instruct babel
    // to transpile TS files
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
  ],
};
