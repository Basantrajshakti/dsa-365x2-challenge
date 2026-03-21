// Daily challenge

// 3643. Flip Square Submatrix Vertically
/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
var reverseSubmatrix = function (grid, x, y, k) {
  let top = x;
  let bottom = x + k - 1;

  while (top < bottom) {
    for (let j = y; j < y + k; j++) {
      let temp = grid[top][j];
      grid[top][j] = grid[bottom][j];
      grid[bottom][j] = temp;
    }
    top++;
    bottom--;
  }

  return grid;
};