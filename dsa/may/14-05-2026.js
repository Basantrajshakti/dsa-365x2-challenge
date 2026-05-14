// Daily challenge

// 2784. Check if Array is Good
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
  const n = nums.length;
  if (n < 2) return false;

  const freq = new Array(201).fill(0);

  for (let a of nums) {
    if (a < 201) freq[a]++;
  }

  for (let i = 1; i < n - 1; i++) {
    if (freq[i] !== 1) return false;
  }

  if (freq[n - 1] !== 2) return false;

  return true;
};

// 594. Longest Harmonious Subsequence
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  const map = new Map();

  for (num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let max = 0;
  for (const [key, value] of map) {
    if (map.has(key + 1)) {
      max = Math.max(max, value + map.get(key + 1));
    }
  }

  return max;
};
