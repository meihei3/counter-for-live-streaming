"use strict";

let count = 0;
const COUNTER_MIN = 0;
const COUNTER_MAX = 100000;
const zero_padding = Math.log10(COUNTER_MAX);

const counter_display = document.getElementById("count-display");
const counter_display_number = document.getElementById("count-number");
const count_up_button = document.getElementById("count-up");
const count_down_button = document.getElementById("count-down");
const color_picker_bg = document.getElementById("bg-color-picker");
const color_picker_text = document.getElementById("text-color-picker");

const update_display = () => {
  counter_display_number.textContent = String(count).padStart(
    zero_padding,
    "0"
  );
};

const count_up = () => {
  count += count < COUNTER_MAX ? 1 : 0;
  update_display();
};

const count_down = () => {
  count -= count > COUNTER_MIN ? 1 : 0;
  update_display();
};

const bg_color_change = () => {
    counter_display.style.backgroundColor = color_picker_bg.value;
}

const text_color_change = () => {
    counter_display_number.style.color = color_picker_text.value;
}

const init = () => {
    update_display();
    bg_color_change();
    text_color_change();
}

count_up_button.addEventListener("click", count_up);
count_down_button.addEventListener("click", count_down);
color_picker_bg.addEventListener("change", bg_color_change);
window.addEventListener("DOMContentLoaded", init);
