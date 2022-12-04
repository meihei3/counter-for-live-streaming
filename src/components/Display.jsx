import React from "react"
import styled, { css } from "styled-components"

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
          stroke={props.stroke}
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
  font-size: 96px;
  fill: ${props => props.textColor};
  ${props =>
    props.fontSettings.useDefault
      ? css``
      : css`
          font-family: ${props => props.fontSettings.family};
          font-weight: ${props => props.fontSettings.weight};
        `}
  ${props =>
    props.stroke
      ? css`
          stroke: #fff;
          stroke-width: 16px;
          paint-order: stroke;
          stroke-linejoin: round;
          letter-spacing: 12px;
        `
      : css``}
`

export { Display }
