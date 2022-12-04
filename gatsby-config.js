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
    url: `https://counter-app.meihei.dev`,
    image: `/static/img/ogp.png`,
    keywords: `カウンター,配信,OBS,クロマキー,透過`,
    gtag: `G-NGEYCRYTBJ`,
  },
  plugins: [`gatsby-plugin-styled-components`],
}
