// 3942. Minimum Operations to Sort a Permutation
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const n = nums.length;
  const p = nums.indexOf(0);

  let inc = true,
    dec = true;

  for (let i = 0; i < n; i++) {
    const next = nums[(i + 1) % n];

    if (next !== (nums[i] + 1) % n) inc = false;
    if (next !== (nums[i] - 1 + n) % n) dec = false;
  }

  let ans = Infinity;
  if (inc) ans = Math.min(ans, p, n - p + 2);
  if (dec) ans = Math.min(ans, p + 2, n - p);

  return ans === Infinity ? -1 : ans;
};
