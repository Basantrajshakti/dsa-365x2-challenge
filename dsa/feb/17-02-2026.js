// Prefix sum

// 724. Find Pivot Index
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const len = nums.length;
  const right = len - 1;

  for (let i = 1; i < len; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }

  for (let i = 0; i < len; i++) {
    if ((nums[i - 1] || 0) === (nums[right] - nums[i])) return i;
  }

  return -1;
};