// Daily Challenge

// 2463. Minimum Total Distance Traveled
/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
var minimumTotalDistance = function (robot, factory) {
  robot.sort((a, b) => a - b);
  factory.sort((a, b) => a[0] - b[0]);

  const INF = 1e18 * 100;
  const n = robot.length,
    m = factory.length;

  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 0; i < n; i++) dp[i][m] = INF;

  for (let j = m - 1; j >= 0; j--) {
    let prefix = 0;
    let dq = [[n, 0]];

    for (let i = n - 1; i >= 0; i--) {
      prefix += Math.abs(robot[i] - factory[j][0]);

      while (dq.length && dq[0][0] > i + factory[j][1]) dq.shift();

      let val = dp[i][j + 1] - prefix;
      while (dq.length && dq[dq.length - 1][1] >= val) dq.pop();

      dq.push([i, val]);
      dp[i][j] = dq[0][1] + prefix;
    }
  }

  return dp[0][0];
};

// 88. Merge Sorted Array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
};
