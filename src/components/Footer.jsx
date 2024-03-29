import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Footer = props => {
  return (
    <StyledFooter className="flex center">
      <p>
        <Link to="/">Top</Link> | <Link to="/about/">About This</Link> |{" "}
        <Link to="/privacy-policy/">Privacy Policy</Link> |{" "}
        <Link to="/terms-of-service/">Terms of Service</Link> | Copyright © 2022{" "}
        <a href="https://twitter.com/app1e_s">meihei</a>.
      </p>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  margin: 10px 0;
  width: 100%;
`

export { Footer }
