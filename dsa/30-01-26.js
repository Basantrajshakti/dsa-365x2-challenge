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