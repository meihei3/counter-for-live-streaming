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
          ソースコードは
          <a href="https://github.com/meihei3/counter-for-live-streaming">
            GitHub
          </a>
          にて公開されています。
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
