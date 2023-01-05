import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Footer = props => {
  return (
    <StyledFooter className="flex center">
      <p>
        <Link to="/">Top</Link> | <Link to="/about/">About This</Link> | <Link to="/privacy-policy/">Privacy Policy</Link> | Copyright ©
        2022 <a href="https://twitter.com/app1e_s">meihei</a>.
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
