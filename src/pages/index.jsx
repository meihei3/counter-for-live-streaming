import React, { useState, useEffect } from "react"
import { Script } from "gatsby"
import { Display } from "../components/Display"

export default function Home() {
  const [bgColor, setBgColor] = useState("")
  const [textColor, setTextColor] = useState("")

  useEffect(() => {
    setBgColor(localStorage.getItem("bg_color") || "#00ff00")
    setTextColor(localStorage.getItem("text_color") || "#6f4f40")
  }, [])
  useEffect(() => localStorage.setItem("bg_color", bgColor), [bgColor])
  useEffect(() => localStorage.setItem("text_color", textColor), [textColor])

  return (
    <>
      <div class="container">
        <div class="header flex center">
          <h1 class="header__text">
            Counter For <br class="spbr" />
            Live-streaming
          </h1>
        </div>
        <Display text="00000" bgColor={bgColor} textColor={textColor} />
        <div class="row main-buttons">
          <button id="count-up" class="col counter-button">
            Count Up
          </button>
          <button id="count-down" class="col outline counter-button">
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
            <select id="font-selector" class="font-selector">
              <option value="default">default</option>
              <option value="Noto Sans JP Regular">Noto Sans JP Regular</option>
              <option value="Noto Sans JP Bold">Noto Sans JP Bold</option>
              <option value="Noto Sans JP Ligth">Noto Sans JP Ligth</option>
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
            />
          </div>
        </div>
        <div class="footer flex center">
          <p>
            <a href="/">top</a> | <a href="/about/">about</a> | Copyright © 2022{" "}
            <a href="https://twitter.com/app1e_s">meihei</a>.
          </p>
        </div>
      </div>
      <Script src={"/scripts/main.js?v2.3.0"} strategy="idle" />
    </>
  )
}

export { Head } from "../components/Head"
