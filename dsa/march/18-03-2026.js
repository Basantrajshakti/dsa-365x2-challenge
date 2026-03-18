// Daily challange

// 3070. Count Submatrices with Top-Left Element and Sum Less Than k
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countSubmatrices = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(n).fill(0);
  let count = 0;
  for (let i = 0; i < m; i++) {
    let currRowSum = 0;
    for (let j = 0; j < n; j++) {
      currRowSum += grid[i][j];
      dp[j] += currRowSum;
      if (dp[j] <= k) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
};


// 1399. Count Largest Group
/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  const map = new Map();
  let maxSize = 0;

  for (let i = 1; i <= n; i++) {
    const sum = i.toString().split('').reduce((acc, d) => acc + Number(d), 0);
    const newCount = (map.get(sum) || 0) + 1;
    map.set(sum, newCount);
    maxSize = Math.max(maxSize, newCount);
  }

  let result = 0;
  for (let count of map.values()) {
    if (count === maxSize) result++;
  }
  return result;
};