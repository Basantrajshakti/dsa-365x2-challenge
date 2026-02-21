// Prefix sum

// 2389. Longest Subsequence With Limited Sum
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  nums.sort((a, b) => a - b);
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] + (nums[i - 1] || 0);
  }

  for (let i = 0; i < queries.length; i++) {
    let j = 0;
    while (nums[j] <= queries[i] && j < nums.length) j++;

    if (j > nums.length) ans.push(0);
    ans.push(j);
  }

  return ans;
};