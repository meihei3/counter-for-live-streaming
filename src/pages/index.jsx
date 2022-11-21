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

export const Head = () => (
  <>
    <title>Counter for live-streaming</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta charset="utf-8" />
    <meta
      http-equiv="referrer-policy"
      content="strict-origin-when-cross-origin"
    />
    <link rel="shortcut icon" href={"/img/favicon.ico"} />
    <link rel="stylesheet" href={"/css/wing.min.css"} />
    <link rel="stylesheet" href={"/css/dist.css?v2.3.0"} />
    <meta name="keywords" content="カウンター,配信,OBS,クロマキー,透過" />
    <meta
      name="description"
      content="配信者向けのシンプルな手動カウンターWebアプリです。OBSでクロマキーフィルタを使用する事で透過させて使うことが出来ます。"
    />
    <meta property="og:title" content="Counter for live-streaming" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://counter-app.meihei.dev/" />
    <meta
      property="og:image"
      content="https://counter-app.meihei.dev/static/img/ogp.png"
    />
    <meta property="og:site_name" content="Counter for live-streaming" />
    <meta
      property="og:description"
      content="配信者向けのシンプルな手動カウンターWebアプリです。OBSでクロマキーフィルタを使用する事で透過させて使うことが出来ます。"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@app1e_s" />

    {/* <!-- fonts --> */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300&family=Noto+Sans+JP:wght@300;400;700&display=swap&text=0123456789Counter For Live-streamig"
      rel="stylesheet"
    />

    {/* <!-- Google tag (gtag.js) --> */}
    <Script
      nonce="NmLwe69hkSjN6cPvylnX_5zKwKkgZLzgy7CR0zAYR0c"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-NGEYCRYTBJ"
    ></Script>
    <Script nonce="NmLwe69hkSjN6cPvylnX_5zKwKkgZLzgy7CR0zAYR0c">
      {`
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());

      gtag('config', 'G-NGEYCRYTBJ');
  `}
    </Script>
  </>
)
