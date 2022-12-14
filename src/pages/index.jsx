import React, { useState, useEffect } from "react"
import { Display } from "../components/Display"
import { countNumberToText, countUp, countDown } from "../util/Counter"
import { Fonts, selectFont, getDefaultFont } from "../util/FontSelector"
import { SEO } from "../components/Seo"
import { Layout } from "../components/Layout"

export default function Home() {
  const [count, setCount] = useState(0)
  const [bgColor, setBgColor] = useState("")
  const [textColor, setTextColor] = useState("")
  const [fontSettings, setFontSettings] = useState(getDefaultFont())
  const [stroke, setStroke] = useState(false)

  useEffect(() => {
    setBgColor(localStorage.getItem("bg_color") || "#00ff00")
    setTextColor(localStorage.getItem("text_color") || "#6f4f40")
    setFontSettings(selectFont(localStorage.getItem("font")) || "default")
  }, [])
  useEffect(() => localStorage.setItem("bg_color", bgColor), [bgColor])
  useEffect(() => localStorage.setItem("text_color", textColor), [textColor])
  useEffect(
    () => localStorage.setItem("font", fontSettings.value),
    [fontSettings]
  )

  return (
    <>
      <Layout>
        <Display
          numberText={countNumberToText(count)}
          bgColor={bgColor}
          textColor={textColor}
          fontSettings={fontSettings}
          stroke={stroke}
        />
        <div class="row main-buttons">
          <button
            id="count-up"
            class="col counter-button"
            onClick={_ => setCount(countUp(count))}
          >
            Count Up
          </button>
          <button
            id="count-down"
            class="col outline counter-button"
            onClick={_ => setCount(countDown(count))}
          >
            Count Down
          </button>
        </div>
        <div class="row options">
          <div class="col border-black options__item">
            <label for="bg-color-picker">Background Color</label>
            <input
              type="color"
              id="bg-color-picker"
              value={bgColor}
              class="color-picker"
              onChange={e => setBgColor(e.target.value)}
            />
          </div>
          <div class="col border-black options__item">
            <label for="text-color-picker">Text Color</label>
            <input
              type="color"
              id="text-color-picker"
              value={textColor}
              class="color-picker"
              onChange={e => setTextColor(e.target.value)}
            />
          </div>
          <div class="col border-black options__item">
            <label for="font-selector">Font</label>
            <select
              id="font-selector"
              class="font-selector"
              onChange={e => setFontSettings(selectFont(e.target.value))}
            >
              {Fonts.map((font, _) => (
                <option
                  value={font.value}
                  selected={fontSettings.value === font.value}
                >
                  {font.value}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div class="row options">
          <div class="col border-black options__item">
            <label for="use-border-checkbox">White border</label>
            <input
              type="checkbox"
              id="use-border-checkbox"
              class="use-border-checkbox"
              onChange={e => setStroke(e.target.checked)}
            />
          </div>
          <div class="col border-black options__item">
            <label for="set-number">Set</label>
            <input
              type="number"
              id="set-number"
              class="set-number"
              min="0"
              max="100000"
              value={count}
              onChange={e =>
                setCount(
                  e.target.value !== "" ? parseInt(e.target.value, 10) : 0
                )
              }
            />
          </div>
          <div class="col border-black options__item">{/* TBD */}</div>
        </div>
      </Layout>
    </>
  )
}

export const Head = () => <SEO />
