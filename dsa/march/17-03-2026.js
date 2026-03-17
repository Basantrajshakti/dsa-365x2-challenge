// Daily challange

// 1727. Largest Submatrix With Rearrangements
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function (matrix) {
  const m = matrix.length;
  if (m === 0) return 0;
  const n = matrix[0].length;
  const height = new Array(n).fill(0);
  let best = 0;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      height[j] = matrix[i][j] === 1 ? height[j] + 1 : 0;
    }
    const sorted = [...height].sort((a, b) => a - b);
    for (let k = 1; k <= n; ++k) {
      best = Math.max(best, sorted[n - k] * k);
    }
  }
  return best;
};


// Math
// 1323. Maximum 69 Number
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  return parseInt(num.toString().replace('6', '9'));
};