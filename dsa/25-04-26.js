// Maths

// 326. Power of Three
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  while (n >= 3) {
    n = n / 3;
  }
  return n === 1
};

// With optimizations
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  return Number.isInteger(Math.log10(n) / Math.log10(3));
};


// 342. Power of Four
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  while (n >= 4) {
    n = n / 4;
  }
  return n === 1
};