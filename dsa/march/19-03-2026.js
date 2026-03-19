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

// 482. License Key Formatting
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  const chars = s.replaceAll('-', '').toUpperCase();

  const firstk = chars.length % k || k;

  let result = chars.slice(0, firstk);
  for (let i = firstk; i < chars.length; i += k) {
    result += '-' + chars.slice(i, i + k);
  }

  return result;
};