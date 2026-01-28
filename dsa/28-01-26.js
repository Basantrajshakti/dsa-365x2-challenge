// Maths

// 504. Base 7
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  if (num === 0) return '0';

  let base = '';
  let isNeg = false;

  if (num < 0) {
    num = num * -1;
    isNeg = true;
  }

  while (num !== 0) {
    base = num % 7 + base;
    num = Math.floor(num / 7);
  }

  if (isNeg) return '-' + base;
  return base;
};