"use strict"

let count = 0

const counter_display_number = document.getElementById("count-number")
const use_border_checkbox = document.getElementById("use-border-checkbox")

const update_display = () => {
  counter_display_number.textContent = String(count).padStart(zero_padding, "0")
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

const init = () => {
  update_display()
}

use_border_checkbox.addEventListener("change", use_white_border)
window.addEventListener("DOMContentLoaded", init)
