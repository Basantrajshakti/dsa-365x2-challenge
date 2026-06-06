// Daily challenge

// 2574. Left and Right Sum Differences
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  let tSum = 0,
    lSum = 0;
  const len = nums.length;
  const ans = [];

  for (let i = 0; i < len; i++) {
    tSum += nums[i];
  }

  for (let i = 0; i < len; i++) {
    ans[i] = Math.abs(tSum - lSum - nums[i]);
    lSum += nums[i];
    tSum -= nums[i];
  }

  return ans;
};
