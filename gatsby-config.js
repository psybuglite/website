/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `UX/UI Designer & Developer - Dennis Tamunotonye Dickson`,
    description: `Hi, I am a designer, building websites and designing web applications and mobile applications. I'm in love with finding solutions to unique problems through design. Let's talk.`,
    twitterUsername: `@psybuglite`,
    image: `/src/og.jpg`,
    siteUrl: `https://tonye.design`,
    menuLinks: [
      {
        name: "portfolio",
        link: "/",
      },
      {
        name: "about/info.",
        link: "/about",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-postcss",
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
