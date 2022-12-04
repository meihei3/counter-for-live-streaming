import React from "react"
import styled from "styled-components"
import { Header } from "./Header"
import { Footer } from "./Footer"

const Layout = props => {
  const isIncludeHeader = props.includeHeader !== "false"

  return (
    <Container className={props.className}>
      {isIncludeHeader ? <Header /> : ""}
      {props.children}
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  max-width: 800px;
  width: 80%;
  height: 100vh;
  padding-top: 15px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 90%;
    padding-top: 10px;
  }
`

export { Layout }
