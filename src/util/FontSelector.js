/**
 * @typedef Font
 * @property {string} family
 * @property {number} weight
 * @property {boolean} useDefault
 * @property {string} value
 */

"use strict"

export const Fonts = [
  { family: "", weight: 400, useDefault: true, value: "default" },
  {
    family: '"Noto Sans JP", sans-serif',
    weight: 700,
    useDefault: false,
    value: "Noto Sans JP Bold",
  },
  {
    family: '"Noto Sans JP", sans-serif',
    weight: 400,
    useDefault: false,
    value: "Noto Sans JP Regular",
  },
  {
    family: '"Noto Sans JP", sans-serif',
    weight: 300,
    useDefault: false,
    value: "Noto Sans JP Ligth",
  },
]

/**
 * @param {string} val
 * @return {Font}
 */
export const selectFont = val => {
  for (const font of Fonts) {
    if (font.value === val) {
      return font
    }
  }
  return getDefaultFont()
}

/**
 * @return {Font}
 */
export const getDefaultFont = () => {
  return Fonts[0]
}
