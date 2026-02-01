// Maths

// 258. Add Digits
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num < 10) return num;

  let sum = 0;
  let digit = num;

  while (digit > 9) {
    while (digit > 0) {
      sum += digit % 10;
      digit = Math.floor(digit / 10);
    }

    digit = sum;
    sum = 0;
  }

  return digit;
};

// With optimizations
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num === 0) return 0;

  return 1 + ((num - 1) % 9);
};


// 263. Ugly Number
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n <= 0) return false;

  while (n % 2 === 0) n /= 2;
  while (n % 3 === 0) n /= 3;
  while (n % 5 === 0) n /= 5;

  return n === 1;
};