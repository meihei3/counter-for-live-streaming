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
  position: relative;
  max-width: 800px;
  min-height: 100vh;
  padding: 15px 0 60px;
  width: 80%;
  margin: 0 auto;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    width: 90%;
    padding-top: 10px;
  }
`

export { Layout }
