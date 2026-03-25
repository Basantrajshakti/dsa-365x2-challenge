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


// 1536. Minimum Swaps to Arrange a Binary Grid
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minSwaps = function (grid) {
  const n = grid.length;
  const zeros = [];

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = n - 1; j >= 0 && grid[i][j] === 0; j--) {
      count++;
    }
    zeros.push(count);
  }

  let swaps = 0;

  for (let i = 0; i < n; i++) {
    const needed = n - i - 1;
    let j = i;

    while (j < n && zeros[j] < needed) j++;
    if (j === n) return -1;

    while (j > i) {
      [zeros[j], zeros[j - 1]] = [zeros[j - 1], zeros[j]];
      j--;
      swaps++;
    }
  }

  return swaps;
};