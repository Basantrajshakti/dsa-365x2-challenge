// Arrays

// 744. Find Smallest Letter Greater Than Target
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let max = '~';

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] > target && letters[i] < max) {
      max = letters[i];
    }
  }
  return max === '~' ? letters[0] : max;
};

// With optimizations
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let n = letters.length;
  let low = 0, high = n - 1;
  let ans = letters[0];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (letters[mid] > target) {
      ans = letters[mid];
      high = mid - 1;
    }
    else {
      low = mid + 1;
    }
  }
  return ans;
};

// 746. Min Cost Climbing Stairs
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  let dp = 0, dp1 = 0, dp2 = 0;

  for (let i = 2; i <= n; i++) {
    const oneStep = dp1 + cost[i - 1];
    const twoStep = dp2 + cost[i - 2];
    dp = Math.min(oneStep, twoStep);
    dp2 = dp1;
    dp1 = dp;
  }
  return dp1;
};