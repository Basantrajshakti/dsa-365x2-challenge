// Daily challenge

// 3546. Equal Sum Grid Partition I
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 1; i < m; i++) grid[i][0] += grid[i - 1][0];
  for (let j = 1; j < n; j++) grid[0][j] += grid[0][j - 1];

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] += grid[i - 1][j] + grid[i][j - 1] - grid[i - 1][j - 1];
    }
  }

  for (let i = 0; i < m; i++) {
    if (grid[m - 1][n - 1] === 2 * grid[i][n - 1]) return true;
  }

  for (let j = 0; j < n; j++) {
    if (grid[m - 1][n - 1] === 2 * grid[m - 1][j]) return true;
  }

  return false;
};