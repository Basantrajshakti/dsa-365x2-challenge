// Daily Challenge

// 1594. Maximum Non Negative Product in a Matrix
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function (grid) {
  const m = grid.length, n = grid[0].length;
  const MOD = 1e9 + 7;

  const maxDp = Array.from({ length: m }, () => Array(n).fill(0));
  const minDp = Array.from({ length: m }, () => Array(n).fill(0));

  maxDp[0][0] = minDp[0][0] = grid[0][0];

  for (let i = 1; i < m; i++) {
    maxDp[i][0] = minDp[i][0] = maxDp[i - 1][0] * grid[i][0];
  }

  for (let j = 1; j < n; j++) {
    maxDp[0][j] = minDp[0][j] = maxDp[0][j - 1] * grid[0][j];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      let val = grid[i][j];

      let a = maxDp[i - 1][j] * val;
      let b = minDp[i - 1][j] * val;
      let c = maxDp[i][j - 1] * val;
      let d = minDp[i][j - 1] * val;

      maxDp[i][j] = Math.max(a, b, c, d);
      minDp[i][j] = Math.min(a, b, c, d);
    }
  }

  let res = maxDp[m - 1][n - 1];
  return res < 0 ? -1 : res % MOD;
};


// 1582. Special Positions in a Binary Matrix
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  let m = mat.length;
  let n = mat[0].length;

  let rowcnt = new Array(m).fill(0);
  let colcnt = new Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        rowcnt[i]++;
        colcnt[j]++;
      }
    }
  }

  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1 && rowcnt[i] === 1 && colcnt[j] === 1) {
        ans++;
      }
    }
  }

  return ans;
};

// With optimizations
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  let m = mat.length;
  let n = mat[0].length;
  let ans = 0;

  for (let i = 0; i < m; i++) {
    let rowones = 0;
    let colidx = -1;

    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        rowones++;
        colidx = j;
      }
    }

    if (rowones === 1) {
      let colones = 0;
      for (let k = 0; k < m; k++) {
        if (mat[k][colidx] === 1) {
          colones++;
        }
      }

      if (colones === 1) {
        ans++;
      }
    }
  }

  return ans;
};