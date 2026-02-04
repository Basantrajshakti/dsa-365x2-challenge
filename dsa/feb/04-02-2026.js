// Sliding window

// 3090. Maximum Length Substring With Two Occurrences
/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
  let map = new Map();
  let max = -Infinity;
  const len = s.length;

  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      const c = map.get(s[j]);
      if (c === 2) {
        map = new Map();
        break;
      }
      else {
        map.set(s[j], (c || 0) + 1);
        max = Math.max(max, j - i + 1);
      }
    }
  }

  return max;
};

// With optimizations
/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
  let left = 0, freq = new Map(), longest = 0;

  for (let right = 0; right < s.length; right++) {
    freq.set(s[right], (freq.get(s[right]) || 0) + 1);

    while (freq.get(s[right]) > 2) {
      freq.set(s[left], freq.get(s[left]) - 1);
      left++;
    }
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
};


// 3095. Shortest Subarray With OR at Least K I
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {
  let min = 100;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] >= k) return 1;

    let or = nums[i];
    for (let j = i; j < len; j++) {
      or |= nums[j];

      if (or >= k && j - i + 1 < min) min = j - i + 1
    }
  }

  return min < 100 ? min : -1;
};

// With optimizations
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {
  let min = 100;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] >= k) return 1;

    let or = nums[i];
    for (let j = i + 1; j < len; j++) {
      or |= nums[j];

      if (or >= k) min = Math.min(min, j - i + 1)
    }
  }

  return min < 100 ? min : -1;
};