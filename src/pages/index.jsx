import React, { useState, useEffect } from "react"
import { Display } from "../components/Display"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { countNumberToText, countUp, countDown } from "../util/Counter"

export default function Home() {
  const [count, setCount] = useState(0)
  const [bgColor, setBgColor] = useState("")
  const [textColor, setTextColor] = useState("")
  const [fontSettings, setFontSettings] = useState({
    family: "",
    weight: 400,
    useDefault: true,
    value: "",
  })
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

  const selectFont = val => {
    switch (val) {
      case "Noto Sans JP Bold":
        return {
          family: '"Noto Sans JP", sans-serif',
          weight: 700,
          useDefault: false,
          value: "Noto Sans JP Bold",
        }
      case "Noto Sans JP Regular":
        return {
          family: '"Noto Sans JP", sans-serif',
          weight: 400,
          useDefault: false,
          value: "Noto Sans JP Regular",
        }
      case "Noto Sans JP Ligth":
        return {
          family: '"Noto Sans JP", sans-serif',
          weight: 300,
          useDefault: false,
          value: "Noto Sans JP Ligth",
        }
      default:
        return { family: "", weight: 400, useDefault: true, value: "" }
    }
  }

  return (
    <>
      <div class="container">
        <Header />
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
              <option
                value="default"
                selected={fontSettings.value === "default"}
              >
                default
              </option>
              <option
                value="Noto Sans JP Regular"
                selected={fontSettings.value === "Noto Sans JP Regular"}
              >
                Noto Sans JP Regular
              </option>
              <option
                value="Noto Sans JP Bold"
                selected={fontSettings.value === "Noto Sans JP Bold"}
              >
                Noto Sans JP Bold
              </option>
              <option
                value="Noto Sans JP Ligth"
                selected={fontSettings.value === "Noto Sans JP Ligth"}
              >
                Noto Sans JP Ligth
              </option>
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
        </div>
        <Footer />
      </div>
    </>
  )
}

export { Head } from "../components/Head"
