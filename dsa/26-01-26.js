// Maths

// 367. Valid Perfect Square
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let l = 0, r = num, mid = 0;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);

    const m = mid * mid;
    if (m > num) r = mid - 1;
    else if (m < num) l = mid + 1;
    else return true;
  }

  return false;
};


// Optimized: not allowed
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  return Number.isInteger(Math.pow(num, 0.5));
};


// 415. Add Strings
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let sum = '';
  let carry = 0;

  for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--, j--) {
    const lastDigSum = (+num1[i] || 0) + (+num2[j] || 0) + carry + '';

    if (lastDigSum.length > 1) {
      sum = lastDigSum[lastDigSum.length - 1] + sum;
      carry = +lastDigSum[0];
    } else {
      sum = lastDigSum + sum;
      carry = 0;
    }
  }

  if (carry) return carry + sum;

  return sum;
};