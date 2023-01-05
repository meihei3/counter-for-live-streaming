import React from "react"
import styled from "styled-components"
import { SEO } from "../../components/Seo"
import { Layout } from "../../components/Layout"

export default function About() {
  return (
    <Layout>
      <Description className="background-ligth-gray">
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
    </Layout>
  )
}

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

export const Head = () => <SEO />
