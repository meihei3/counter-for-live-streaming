"use strict"

let count = 0

const counter_display_number = document.getElementById("count-number")
const use_border_checkbox = document.getElementById("use-border-checkbox")
const font_selector = document.getElementById("font-selector")

const update_display = () => {
  counter_display_number.textContent = String(count).padStart(zero_padding, "0")
}

const font_change = () => {
  switch (font_selector.value) {
    case "Noto Sans JP Bold":
      counter_display_number.style.fontFamily = '"Noto Sans JP", sans-serif'
      counter_display_number.style.fontWeight = 700
      localStorage.setItem("font", font_selector.value)
      break
    case "Noto Sans JP Regular":
      counter_display_number.style.fontFamily = '"Noto Sans JP", sans-serif'
      counter_display_number.style.fontWeight = 400
      localStorage.setItem("font", font_selector.value)
      break
    case "Noto Sans JP Ligth":
      counter_display_number.style.fontFamily = '"Noto Sans JP", sans-serif'
      counter_display_number.style.fontWeight = 300
      localStorage.setItem("font", font_selector.value)
      break
    default:
      counter_display_number.style.fontFamily = ""
      counter_display_number.style.fontWeight = ""
      localStorage.removeItem("font")
      break
  }
}

const use_white_border = () => {
  if (use_border_checkbox.checked) {
    if (!counter_display_number.classList.contains("number__stroke")) {
      counter_display_number.classList.add("counter-number__stroke")
    }
  } else {
    if (counter_display_number.classList.contains("counter-number__stroke")) {
      counter_display_number.classList.remove("counter-number__stroke")
    }
  }
}

const init_font = () => {
  const f = localStorage.getItem("font")
  if (f !== null) {
    font_selector.value = f
    font_change()
  }
}

const init = () => {
  update_display()
  init_font()
}

font_selector.addEventListener("change", font_change)
use_border_checkbox.addEventListener("change", use_white_border)
window.addEventListener("DOMContentLoaded", init)
