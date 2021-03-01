require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "wp-gatsby",
  },
  plugins: [
      {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/src/markdown-pages`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/markdown-pages`,
      name: `markdown-pages`,
    },
  },
  `gatsby-transformer-remark`,

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
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpcontent",
        // GraphQL endpoint, relative to your WordPress home URL.
        url:  `http://devwork.live/golfaisa/graphql`,
        // GraphQL endpoint using env variable
       // url: "${process.env.WORDPRESS_URL}/graphql",
      },
    },
  ],
};
