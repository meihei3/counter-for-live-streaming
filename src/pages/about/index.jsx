import React from "react"
import { Script } from "gatsby"

export default function About() {
  return (
    <div class="container">
      <div class="header flex center">
        <h1 class="header__text">
          Counter For <br class="spbr" />
          Live-streaming
        </h1>
      </div>
      <div class="site-description background-ligth-gray">
        <h2 class="site-description__title">About This</h2>
        <p>
          配信者向けのシンプルな手動カウンターWebアプリです。OBSでクロマキーフィルタを使用する事で透過させて使うことが出来ます。
        </p>
        <p>
          ソースコードは
          <a href="https://github.com/meihei3/counter-for-live-streaming">
            GitHub
          </a>
          にて公開されています。
        </p>
        <h2 class="site-description__title">Privacy Policy</h2>
        <p>
          当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。
          このGoogleアナリティクスはデータの収集のためにCookieを使用しています。
          このデータは匿名で収集されており、個人を特定するものではありません。
        </p>
        <p>
          この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
          この規約に関しての詳細は
          <a href="https://marketingplatform.google.com/about/analytics/terms/jp/">
            Googleアナリティクスサービス利用規約のページ
          </a>
          や
          <a href="https://policies.google.com/technologies/ads?hl=ja">
            Googleポリシーと規約
          </a>
          ページをご覧ください。
        </p>
      </div>
      <div class="footer flex center">
        <p>
          <a href="/">top</a> | <a href="/about/">about</a> | Copyright © 2022{" "}
          <a href="https://twitter.com/app1e_s">meihei</a>.
        </p>
      </div>
    </div>
  )
}

export const Head = () => (
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
      strategy="off-main-thread"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-NGEYCRYTBJ"
    ></Script>
    <Script
      nonce="NmLwe69hkSjN6cPvylnX_5zKwKkgZLzgy7CR0zAYR0c"
      strategy="off-main-thread"
    >
      {`
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());

      gtag('config', 'G-NGEYCRYTBJ');
  `}
    </Script>
  </>
)
