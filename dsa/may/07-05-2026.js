// Daily challenge

// 3660. Jump Game IX
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxValue = function (nums) {
  const n = nums.length;
  const res = [nums[0]];

  for (let i = 1; i < n; i++) {
    res.push(Math.max(res[res.length - 1], nums[i]));
  }

  let min_idx = n - 1;

  for (let i = n - 2; i >= 0; i--) {
    if (res[i] > nums[min_idx]) {
      res[i] = res[min_idx];
    }

    if (nums[i] < nums[min_idx]) {
      min_idx = i;
    }
  }
  return res;
};

// 506. Relative Ranks
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const ans = [...score].sort((a, b) => b - a);
  const map = {
    [ans[0]]: "Gold Medal",
    [ans[1]]: "Silver Medal",
    [ans[2]]: "Bronze Medal",
  };

  for (let i = 3; i < ans.length; i++) {
    map[ans[i]] = i + 1 + "";
  }

  for (let i = 0; i < score.length; i++) {
    ans[i] = map[score[i]];
  }

  return ans;
};
