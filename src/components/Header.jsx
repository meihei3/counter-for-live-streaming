import React from "react"
import styled from "styled-components"

const Header = props => {
  return (
    <StyledHeader className="flex center">
      <HeaderText>
        Counter For <nobr>Live-streaming</nobr>
      </HeaderText>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  margin: 0 0 50px;

  @media screen and (max-width: 768px) {
    margin: 0 0 20px;
  }
`

const HeaderText = styled.h1`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 200;
  font-size: 56px;

  @media screen and (max-width: 768px) {
    font-weight: 300;
    line-height: 0.9;
    font-size: 42px;
    margin-bottom: 0;
  }
`

export { Header }
