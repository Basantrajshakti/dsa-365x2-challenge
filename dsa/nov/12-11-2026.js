// 3105. Longest Strictly Increasing or Strictly Decreasing Subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  const n = nums.length;
  let increasing = 1,
    decreasing = 1;
  let maxLength = 1;

  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      increasing = increasing + 1;
      decreasing = 1;
    } else if (nums[i] < nums[i - 1]) {
      decreasing = decreasing + 1;
      increasing = 1;
    } else {
      increasing = 1;
      decreasing = 1;
    }

    const x = increasing > decreasing ? increasing : decreasing;
    maxLength = maxLength > x ? maxLength : x;
  }

  return maxLength;
};
