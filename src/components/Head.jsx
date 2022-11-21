import React from "react"
import { Script } from "gatsby"

const Head = () => {
  return (
    <>
      <title>Counter for live-streaming</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta charset="utf-8" />
      <meta
        http-equiv="referrer-policy"
        content="strict-origin-when-cross-origin"
      />
      <link rel="shortcut icon" href={"/img/favicon.ico"} />
      <link rel="stylesheet" href={"/css/wing.min.css"} />
      <link rel="stylesheet" href={"/css/dist.css?v2.3.0"} />
      <meta name="keywords" content="カウンター,配信,OBS,クロマキー,透過" />
      <meta
        name="description"
        content="配信者向けのシンプルな手動カウンターWebアプリです。OBSでクロマキーフィルタを使用する事で透過させて使うことが出来ます。"
      />
      <meta property="og:title" content="Counter for live-streaming" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://counter-app.meihei.dev/" />
      <meta
        property="og:image"
        content="https://counter-app.meihei.dev/static/img/ogp.png"
      />
      <meta property="og:site_name" content="Counter for live-streaming" />
      <meta
        property="og:description"
        content="配信者向けのシンプルな手動カウンターWebアプリです。OBSでクロマキーフィルタを使用する事で透過させて使うことが出来ます。"
      />
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

          gtag('config', 'G-NGEYCRYTBJ');
        `}
      </Script>
    </>
  )
}

export { Head }
