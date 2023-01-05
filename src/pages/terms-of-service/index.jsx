import React from "react"
import styled from "styled-components"
import { SEO } from "../../components/Seo"
import { Layout } from "../../components/Layout"

export default function About() {
  return (
    <Layout>
      <Description className="background-ligth-gray">
        <DescriptionTitle>Terms of Service</DescriptionTitle>
        <p>
        この利用規約（以下、「本規約」といいます。）は、<a href="https://twitter.com/app1e_s" target="_blank" rel="noopener noreferrer">meihei</a>（以下、「当サービス提供者」といいます。）が
        このウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。
        ご利用する皆さま（以下、「ユーザー」といいます。）は、本規約の範囲内であれば、個人、法人、商用、非商用問わず無料でご利用頂けます。
        </p>
        <DescriptionSubTitle>禁止事項</DescriptionSubTitle>
        <p>
        ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
        </p>
        <ul>
          <ListItem>公序良俗に違反する行為</ListItem>
          <ListItem>犯罪行為に関連する行為</ListItem>
          <ListItem>当サービス提供者のサービスの運営を妨害するおそれのある行為</ListItem>
          <ListItem>反社会的勢力に対して直接または間接に利益を供与する行為</ListItem>
          <ListItem>その他、当サービス提供者が不適切と判断する行為</ListItem>
        </ul>
        <DescriptionSubTitle>利用規約の変更</DescriptionSubTitle>
        <p>
        当サービス提供者は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
        本規約の変更後、ユーザーが本サービスを利用した場合、利用者は本規約の変更に同意したものとみなします。
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

const DescriptionSubTitle = styled.h3`
  font-weight: 300;
  margin-top: 20px;
`

const ListItem = styled.li`
  margin-bottom: 0;
`

export const Head = () => <SEO title="Terms of Service" />
