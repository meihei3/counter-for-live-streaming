import React from "react"
import styled from "styled-components"
import { SEO } from "../components/Seo"
import { Layout } from "../components/Layout"

export default function NotFound() {
  return (
    <Layout className="center flex" includeHeader="false">
      <Title>404 Not Found</Title>
    </Layout>
  )
}

const Title = styled.h1`
  font-weight: 200;
`

export const Head = () => <SEO />
