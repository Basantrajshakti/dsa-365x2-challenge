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

// With optimizations
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  let tSum = 0, lSum = 0;
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


// 2848. Points That Intersect With Cars
/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
  const arr = new Uint8Array(101);

  for (let i = 0; i < nums.length; i++) {
    let l = nums[i][0];
    let r = nums[i][1];

    while (l <= r) {
      arr[l++]++
    }
  }

  let ctr = 0;
  for (let i = 1; i <= 101; i++) {
    if (arr[i]) ctr++;
  }

  return ctr;
};