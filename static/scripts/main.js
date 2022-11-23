"use strict"

let count = 0

const counter_display_number = document.getElementById("count-number")

const update_display = () => {
  counter_display_number.textContent = String(count).padStart(zero_padding, "0")
}


const init = () => {
  update_display()
}

window.addEventListener("DOMContentLoaded", init)
