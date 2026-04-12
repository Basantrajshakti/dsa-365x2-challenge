// Daily challenge

// 1320. Minimum Distance to Type a Word Using Two Fingers
/**
 * @param {string} word
 * @return {number}
 */
var minimumDistance = function (word) {
  const dist = (a, b) => {
    if (a === 26 || b === 26) return 0;
    return Math.abs(Math.floor(a / 6) - Math.floor(b / 6)) + Math.abs((a % 6) - (b % 6));
  };

  let dp = Array(27).fill(Infinity);
  dp[26] = 0;
  let prev = word.charCodeAt(0) - 65;

  for (let i = 1; i < word.length; i++) {
    let cur = word.charCodeAt(i) - 65;
    let next_dp = Array(27).fill(Infinity);
    for (let free = 0; free < 27; free++) {
      if (dp[free] === Infinity) continue;
      next_dp[free] = Math.min(next_dp[free], dp[free] + dist(prev, cur));
      next_dp[prev] = Math.min(next_dp[prev], dp[free] + dist(free, cur));
    }
    dp = next_dp;
    prev = cur;
  }

  return Math.min(...dp);
};

// 35. Search Insert Position
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (1) {
    let mid = parseInt(low + (high - low) / 2);
    const num = nums[mid];

    if (num === target) {
      return mid;
    } else if (num > target) {
      high = mid - 1;
    } else if (num < target) {
      low = mid + 1;
    }

    if (low > high) return low;
  }
};
