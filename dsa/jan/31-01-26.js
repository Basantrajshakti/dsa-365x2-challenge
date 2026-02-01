// Sliding window

// 594. Longest Harmonious Subsequence
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  let max = 0;
  for (const [key, value] of map) {
    if (map.get(key - 1) && max < (value + map.get(key - 1))) {
      max = value + map.get(key - 1);
    }

    if (map.get(key + 1) && max < (value + map.get(key + 1))) {
      max = value + map.get(key + 1);
    }
  }

  return max;
};

// With optimizations 
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  let max = 0;
  for (const [key, value] of map) {
    if (map.has(key + 1)) {
      max = Math.max(max, value + map.get(key + 1))
    }
  }

  return max;
};


// 643. Maximum Average Subarray I
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let max = 0;
  let last4sum = 0;

  let i = 0;
  while (i < k) {
    last4sum += nums[i++];
  }

  max = last4sum;

  while (i < nums.length) {
    last4sum = last4sum - nums[i - k] + nums[i];

    max = Math.max(max, last4sum);
    i++
  }

  return max / k
};