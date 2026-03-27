// Daily challenge

// 2946. Matrix Similarity After Cyclic Shifts
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function (mat, k) {
  const rows = mat.length;
  const cols = mat[0].length;
  k %= cols;

  if (k === 0) {
    return true;
  }

  for (let i = 0; i < rows; i++) {
    let shifted_row = mat[i].slice(k).concat(mat[i].slice(0, k));

    for (let j = 0; j < cols; j++) {
      if (mat[i][j] !== shifted_row[j]) {
        return false;
      }
    }
  }

  return true;
};

// With optimizations
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function (mat, k) {
  const rows = mat.length;
  const cols = mat[0].length;
  k %= cols;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Determine the shift for the given row
      // Remem to covert left shifts to right shifts to simplify things
      const shift = row % 2 ? cols - k : k;
      // In order for the matrix to be simi after the shift, the value in the 
      // orig col and the val in the shifted col need to be the same.
      // The orig val will be written to the shifted ind and it needs to be 
      // 
      const newCol = (col + k) % cols;
      if (mat[row][newCol] != mat[row][col]) return false;
    }
  }

  return true;
};