// 3903. Smallest Stable Index I
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
  let n = nums.length;
  let mn = new Array(n);

  // Minimum from i to n-1
  mn[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    mn[i] = Math.min(nums[i], mn[i + 1]);
  }

  // Calculate answer
  let mx = nums[0];
  for (let i = 0; i < n; i++) {
    mx = Math.max(mx, nums[i]);
    if (mx - mn[i] <= k) {
      return i;
    }
  }

  return -1;
};
