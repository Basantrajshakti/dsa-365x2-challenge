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


