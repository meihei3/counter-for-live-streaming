"use strict";

let count = 0;
const COUNTER_MIN = 0;
const COUNTER_MAX = 100000;
const zero_padding = Math.log10(COUNTER_MAX);

const counter_display_number = document.getElementById("count-number");
const count_up_button = document.getElementById("count-up");
const count_down_button = document.getElementById("count-down");

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

count_up_button.addEventListener("click", count_up);
count_down_button.addEventListener("click", count_down);
window.addEventListener("DOMContentLoaded", update_display);
