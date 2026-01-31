// Sliding window

// 594. Longest Harmonious Subsequence
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  const map = new Map();

  for (num of nums) {
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