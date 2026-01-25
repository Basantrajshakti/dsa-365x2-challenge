// Maths

// 268. Missing Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const len = nums.length;
  const s = new Set(nums);

  for (let i = 0; i <= len; i++)
    if (!s.has(i))
      return i;
};

// With optimizations
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const len = nums.length;
  let sum = len * (len + 1) / 2;

  for (let i = 0; i < len; i++) {
    sum -= nums[i];
  }

  return sum;
};


// 292. Nim Game
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  return n % 4 !== 0;
};
