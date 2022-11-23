import React from "react"
import styled, {css} from "styled-components"

const Display = props => {
  return (
    <DisplayBack
      id="count-display"
      bgColor={props.bgColor}
      className="center flex border-gray"
    >
      <svg width="100%" height="100%">
        <DisplayText
          id="count-number"
          textColor={props.textColor}
          fontSettings={props.fontSettings}
          className="counter-number"
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
        >
          {props.numberText}
        </DisplayText>
      </svg>
    </DisplayBack>
  )
}

const DisplayBack = styled.div`
  background-color: ${props => props.bgColor};
  width: 100%;
  height: 140px;
  margin-bottom: 20px;
`

const DisplayText = styled.text`
  fill: ${props => props.textColor};
  ${props => props.fontSettings.useDefault ? css`` : css`
  font-family: ${props => props.fontSettings.family};
  font-weight: ${props => props.fontSettings.weight};
  ` }
`

export { Display }
