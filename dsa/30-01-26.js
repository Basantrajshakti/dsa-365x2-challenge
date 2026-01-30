// Maths

// 628. Maximum Product of Three Numbers
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  const len = nums.length;
  nums = nums.sort((a, b) => a - b);

  // All numbers are negative
  if (nums[len - 1] < 0) {
    return nums[len - 1] * nums[len - 2] * nums[len - 3];
  }

  // First 2 neg numbers becomes +ve when multiplied
  if (nums[0] * nums[1] > nums[len - 2] * nums[len - 3]) {
    return nums[0] * nums[1] * nums[len - 1];
  }

  return nums[len - 1] * nums[len - 2] * nums[len - 3];
};


// With optimizations
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  const len = nums.length;
  nums = nums.sort((a, b) => a - b);

  const p1 = nums[len - 1] * nums[len - 2] * nums[len - 3];
  const p2 = nums[0] * nums[1] * nums[len - 1];

  if (p1 > p2) return p1;
  return p2;
};


// Optimized further
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;
  let min1 = Infinity;
  let min2 = Infinity;

  for (num of nums) {
    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }

    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  const p1 = max1 * max2 * max3;
  const p2 = min1 * min2 * max1;

  if (p1 > p2) return p1;
  return p2;
};


// 728. Self Dividing Numbers
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const nums = [];

  for (let i = left; i <= right; i++) {
    let num = i;
    let flag = true;

    while (num !== 0) {
      const lastDigit = num % 10;
      if (lastDigit == 0 || i % lastDigit !== 0) {
        flag = false;
        break;
      }
      num = Math.floor(num / 10);
    }

    if (flag) nums.push(i);
  }

  return nums;
};