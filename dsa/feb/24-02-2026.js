// Prefix sum

// 3427. Sum of Variable Length Subarrays
/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function (nums) {
  const s = [nums[0]];
  let sum = 0;

  for (let i = 1; i < nums.length; i++) {
    s[i] = nums[i] + s[i - 1];
  }

  for (let i = 0; i < nums.length; i++) {
    const l = Math.max(0, i - nums[i]);
    sum += s[i] - (s[l - 1] || 0);
  }

  return sum;
};