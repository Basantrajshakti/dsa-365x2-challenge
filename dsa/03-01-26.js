// Arrays

// 66. Plus One
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carryForward = 0;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      carryForward = 1;
      digits[i] = 0;
    } else {
      digits[i] += 1;
      carryForward = 0;
      return digits;
    }
  }

  return [1, ...digits];
};