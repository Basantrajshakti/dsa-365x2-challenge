// Daily challenge


// 3212. Count Submatrices With Equal Frequency of X and Y
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numberOfSubmatrices = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dpX = new Array(n).fill(0);
  const dpY = new Array(n).fill(0);
  let count = 0;
  for (let i = 0; i < m; i++) {
    let rowX = 0;
    let rowY = 0;
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 'X') {
        rowX++;
      } else if (grid[i][j] === 'Y') {
        rowY++;
      }
      dpX[j] += rowX;
      dpY[j] += rowY;
      if (dpX[j] > 0 && dpX[j] === dpY[j]) {
        count++;
      }
    }
  }
  return count;
};