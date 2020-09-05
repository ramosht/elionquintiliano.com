module.exports = {
  siteMetadata: {
    title: `Elion Quintiliano 🎬`,
    name: `Elion Quintiliano`,
    position: `filmmaker & designer`,
    description: `Filmmaker, designer e músico. Jovem, profissional e ensinavel. Apaixonado por comunicar através do que faço.`,
    author: `@elion`,
    lang: `pt-br`,
    siteUrl: 'https://elionquintiliano.com/',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `thumbnails`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `personal_info`,
        path: `${__dirname}/personal_info`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/portfolio`
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images-v2',
            options: {
              name: "uploads"
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            }
          },
          {
            resolve:"@weknow/gatsby-remark-codepen",
            options: {
              theme: "dark",
              height: 400
            }
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elion Quintiliano`,
        short_name: `elionquintiliano`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/elion_quintiliano.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none"
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://ramosht.com/`,
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
  ],
}
