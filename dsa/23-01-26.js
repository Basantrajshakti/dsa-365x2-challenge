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

