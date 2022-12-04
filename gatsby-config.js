/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Counter for live-streaming`,
    description: `配信者向けのシンプルな手動カウンターWebアプリです。OBSでクロマキーフィルタを使用する事で透過させて使うことが出来ます。`,
    siteUrl: `https://counter-app.meihei.dev`,
    image: `/static/img/ogp.png`,
    keywords: `カウンター,配信,OBS,クロマキー,透過`,
    gtag: `G-NGEYCRYTBJ`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: "/",
        serialize: (page, { resolvePagePath }) => {
          let priority = 0.5
          if (page.path === "/") {
            priority = 1
          }
          return {
            url: `${resolvePagePath(page)}`,
            changefreq: `weekly`,
            priority: priority,
          }
        },
      },
    },
  ],
}
