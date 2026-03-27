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


// 1680. Concatenation of Consecutive Binary Numbers
/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
  let bitlen = 1n;
  let next = 2n; //where the bit length will change
  let mod = 1000000007n;
  let ans = 0n;
  for (let i = 1n; i <= BigInt(n); i++) {
    if (i == next) {
      bitlen += 1n;//increase the bit length by 1 when i reaches to 2's power 
      next = next * 2n;
    }
    ans = ((ans << bitlen) + i) % mod;
  }
  return Number(ans);
};

// With optimizations
/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
  let mul = 2, result = 1, mod = 10 ** 9 + 7
  for (let i = 2; i <= n; i++) {
    if (i === mul) mul <<= 1;
    result = (result * mul + i) % mod;
  }

  return result
};