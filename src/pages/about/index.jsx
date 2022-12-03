import React from "react"
import { Footer } from "../../components/Footer"
import { SEO } from "../../components/Seo"

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
      <Footer />
    </div>
  )
}

export const Head = () => (
  <SEO />
)
