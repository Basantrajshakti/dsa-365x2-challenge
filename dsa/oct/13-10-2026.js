// 3727. Maximum Alternating Sum of Squares
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function (nums) {
  const n = nums.length;
  const h = Math.floor(n / 2);

  const arr = nums.map((x) => Math.abs(x));
  arr.sort((a, b) => a - b);

  let ans = 0;

  for (let i = 0; i < n; i++) {
    ans += (i < h ? -1 : 1) * arr[i] * arr[i];
  }

  return ans;
};
