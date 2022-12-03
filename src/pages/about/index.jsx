import React from "react"
import styled from "styled-components"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { SEO } from "../../components/Seo"

export default function About() {
  return (
    <Container className="container">
      <Header />
      <Description className="background-ligth-gray">
        <DescriptionTitle>About This</DescriptionTitle>
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
        <DescriptionTitle>Privacy Policy</DescriptionTitle>
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
      </Description>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  max-width: 800px;
  height: 100vh;
  padding-top: 15px;

  @media screen and (max-width: 768px) {
    width: 90%;
    padding-top: 10px;
  }
`

const Description = styled.div`
  padding: 10px;
  width: 100%;
  color: #363636;
  background-color: #f4ffe4;
  margin-bottom: 30px;
`

const DescriptionTitle = styled.h2`
  font-weight: 300;
  font-size: 26px;
  margin-top: 10px;
  margin-bottom: 5px;
`

export const Head = () => (
  <SEO />
)
