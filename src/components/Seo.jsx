import React from "react"
import { Script } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const SEO = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl: siteUrl,
    keywords,
    gtag,
  } = useSiteMetadata()
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    keywords: keywords,
    gtag: gtag,
  }
  const version = "v3.0.1" // CSSのキャッシュ削除用。将来的にはCSSinJSに統一する。

  return (
    <>
      <title>{seo.title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta charset="utf-8" />
      <meta
        http-equiv="referrer-policy"
        content="strict-origin-when-cross-origin"
      />
      <link rel="shortcut icon" href={"/img/favicon.ico"} />
      <link rel="stylesheet" href={"/css/wing.min.css"} />
      <link rel="stylesheet" href={"/css/dist.css?" + version} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@app1e_s" />

      {/* <!-- fonts --> */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300&family=Noto+Sans+JP:wght@300;400;700&display=swap&text=0123456789Counter For Live-streamig"
        rel="stylesheet"
      />

      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        nonce="NmLwe69hkSjN6cPvylnX_5zKwKkgZLzgy7CR0zAYR0c"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-NGEYCRYTBJ"
      ></Script>
      <Script nonce="NmLwe69hkSjN6cPvylnX_5zKwKkgZLzgy7CR0zAYR0c">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());

          gtag('config', '${seo.gtag}');
        `}
      </Script>
      {children}
    </>
  )
}

export { SEO }
