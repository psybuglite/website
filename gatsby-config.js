/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Dennis Dickson`,
    menuLinks: [
      {
        name: "portfolio",
        link: "/",
      },
      {
        name: "about/info.",
        link: "/about",
      },
      {
        name: "resume/CV",
        link: "resume.pdf",
      },
      {
        name: "shots/pixels",
        link: "/pixels",
      },
      {
        name: "blog/writing",
        link: "/writing",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-postcss",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-image",
    "gatsby-plugin-catch-links", 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
