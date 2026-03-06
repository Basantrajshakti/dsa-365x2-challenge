// Strings

// 1784. Check if Binary String Has at Most One Segment of Ones
/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  for (let i = s.length - 2; i >= 0; i--) {
    if (s[i + 1] == '1' && s[i] == '0') return false;
  }

  return true;
};


// Arrays

// 566. Reshape the Matrix
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  if (mat.length * mat[0].length !== r * c) return mat;

  let mat1d = [], rmat = [];

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      mat1d.push(mat[i][j]);
    }
  }

  let curr = 0;
  for (let i = 0; i < r; i++) {
    let arr = [];
    for (let j = 0; j < c; j++) {
      arr.push(mat1d[curr++]);
    }
    rmat.push(arr);
  }

  return rmat;
};