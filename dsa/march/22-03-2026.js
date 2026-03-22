// Daily challenge

// 1886. Determine Whether Matrix Can Be Obtained By Rotation
/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {

  const rotate = (mat) => {
    let n = mat.length;

    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
      }
    }

    for (let i = 0; i < n; i++) {
      mat[i].reverse();
    }
  };

  const isEqual = (a, b) => {
    let n = a.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (a[i][j] !== b[i][j]) return false;
      }
    }
    return true;
  };

  for (let k = 0; k < 4; k++) {
    if (isEqual(mat, target)) return true;
    rotate(mat);
  }

  return false;
};


// With optimizations
/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {

  const res = Array(4).fill(true);
  const n = mat.length;

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {

      if (target[r][c] != mat[r][c])
        res[0] = false;
      if (target[r][c] != mat[c][n - 1 - r])
        res[1] = false;
      if (target[r][c] != mat[n - 1 - r][n - 1 - c])
        res[2] = false;
      if (target[r][c] != mat[n - 1 - c][r])
        res[3] = false;

    }
  }

  return res[0] || res[1] || res[2] || res[3];
};