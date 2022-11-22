const COUNTER_MIN = 0
const COUNTER_MAX = 100000
const zero_padding = Math.log10(COUNTER_MAX)

/**
 * @param {number} count
 * @return {number}
 */
export const countUp = count => {
  return count + (count < COUNTER_MAX ? 1 : 0)
}

/**
 * @param {number} count
 * @return {number}
 */
export const countDown = count => {
  return count - (count > COUNTER_MIN ? 1 : 0)
}

/**
 * @param {number} count
 * @return {string}
 */
export const countNumberToText = count => {
  return String(count).padStart(zero_padding, "0")
}
