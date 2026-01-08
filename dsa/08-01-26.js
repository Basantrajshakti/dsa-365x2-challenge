// Arrays

// 219. Contains Duplicate II
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num in map && Math.abs(map[num] - i) <= k) {
      return true;
    }

    map[num] = i;
  }

  return false;
};

// With optimizations: Copied
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const window = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (window.has(nums[i])) {
      return true;
    }
    window.add(nums[i]);
    if (window.size > k) {
      window.delete(nums[i - k]);
    }
  }

  return false;
};