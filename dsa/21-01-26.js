// Maths

// 9. Palindrome Number
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  let xStr = '';
  let n = x;

  while (x) {
    xStr += x % 10;
    x = parseInt(x / 10);
  }

  return +xStr === n;
};