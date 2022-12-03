import React from "react"
import styled from "styled-components"
import { SEO } from "../components/Seo"

export default function NotFound() {
  return (
    <Container className="container center flex">
      <Title>404 Not Found</Title>
    </Container>
  )
}

const Title = styled.h1`
  font-weight: 200;
`
const Container = styled.div`
  max-width: 800px;
  height: 100vh;
  padding-top: 15px;

  @media screen and (max-width: 768px) {
    width: 90%;
    padding-top: 10px;
  }
`

export const Head = () => <SEO />
