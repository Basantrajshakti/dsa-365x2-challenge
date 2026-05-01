// Daily challenge

// 396. Rotate Function
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
  let n = nums.length;

  let sum = 0;
  let F = 0;

  for (let i = 0; i < n; i++) {
    sum += nums[i];
    F += i * nums[i];
  }

  let result = F;

  for (let k = 1; k < n; k++) {
    F = F + sum - n * nums[n - k];
    result = Math.max(result, F);
  }

  return result;
};

// 455. Assign Cookies
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0,
    j = 0;
  while (i < g.length && j < s.length) {
    if (g[i] > s[j]) j++;
    else {
      i++;
      j++;
    }
  }

  return i;
};
