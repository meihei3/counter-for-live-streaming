import React from "react"
import styled from "styled-components"

const Footer = props => {
  return (
    <StyledFooter className="flex center">
      <p>
        <a href="/">top</a> | <a href="/about/">about</a> | Copyright © 2022{" "}
        <a href="https://twitter.com/app1e_s">meihei</a>.
      </p>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  position: absolute;
  left: 0;
  bottom: 5px;
  width: 100%;
`

export { Footer }
