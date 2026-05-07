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
