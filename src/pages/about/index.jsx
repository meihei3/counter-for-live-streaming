import React from "react"
import styled from "styled-components"
import { SEO } from "../../components/Seo"
import { Layout } from "../../components/Layout"

export default function About() {
  return (
    <Layout>
      <Description className="background-ligth-gray">
        <DescriptionTitle>About This</DescriptionTitle>
        <p>
          配信者向けのシンプルな手動カウンターWebアプリです。OBSでクロマキーフィルタを使用する事で透過させて使うことが出来ます。
        </p>
        <p>
          個人、法人、商用、非商用問わず無料でご利用頂けます。是非、配信でご活用ください。詳細は
          <a href="/terms-of-service/">利用規約</a>
          に記載しています。
        </p>
        <p>
          安心してお使い頂けるように、全てのソースコードは
          <a href="https://github.com/meihei3/counter-for-live-streaming">
            GitHub
          </a>
          にて公開されています。
        </p>
        <p>
          ご利用いただいた際には、本サービスを利用したことがわかるクレジット表記とリンクを記載して頂けると嬉しいです。
        </p>
      </Description>
    </Layout>
  )
}

const Description = styled.div`
  width: 100%;
  color: #363636;
`

const DescriptionTitle = styled.h2`
  font-weight: 300;
`

export const Head = () => <SEO title="About This" />
