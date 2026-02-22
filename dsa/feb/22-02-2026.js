// Prefix sum

// 2574. Left and Right Sum Differences
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  const leftSum = [], rightSum = [], ans = [];
  let lSum = 0; rSum = 0;
  const len = nums.length;

  for (let i = 0, j = len - 1; i < len && j >= 0; i++, j--) {
    lSum += (nums[i - 1] || 0);
    leftSum[i] = lSum;

    rSum += (nums[j + 1] || 0);
    rightSum[j] = rSum;
  }

  for (let i = 0; i < len; i++) {
    ans[i] = Math.abs(leftSum[i] - rightSum[i]);
  }

  return ans;
};