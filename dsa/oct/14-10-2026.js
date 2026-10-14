// 3723. Maximize Sum of Squares of Digits
/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function (num, sum) {
  if (sum > 9 * num) return "";

  const q = Math.floor(sum / 9);
  const r = sum % 9;

  let ans = "9".repeat(q);

  if (r > 0) ans += String(r);

  ans += "0".repeat(num - ans.length);

  return ans;
};
