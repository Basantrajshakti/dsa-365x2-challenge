// Daily challenge

// 48. Rotate Image
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let n = matrix.length;

  // Transpose
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Reverse each row
  for (let k = 0; k < n; k++) {
    let i = 0,
      j = n - 1;
    while (i < j) {
      [matrix[k][i], matrix[k][j]] = [matrix[k][j], matrix[k][i]];
      i++;
      j--;
    }
  }
};
