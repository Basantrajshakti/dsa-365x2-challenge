// Daily Challenge

// 1848. Minimum Distance to the Target Element
/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
  let mindist = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      mindist = Math.min(mindist, Math.abs(i - start));
    }
  }
  return mindist;
};

// 66. Plus One
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] += 1;
      return digits;
    }
  }

  return [1, ...digits];
};
