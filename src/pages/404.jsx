import React from "react"
import styled from "styled-components"
import { SEO } from "../components/Seo"

export default function NotFound() {
  return (
    <div class="container center flex">
      <Title>404 Not Found</Title>
    </div>
  )
}

const Title = styled.h1`
  font-weight: 200;
`

export const Head = () => <SEO />
