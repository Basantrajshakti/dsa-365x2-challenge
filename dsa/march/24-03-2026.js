// Daily challenge

// 2906. Construct Product Matrix
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var constructProductMatrix = function (grid) {

  const MOD = 12345;
  const n = grid.length;
  const m = grid[0].length;
  const N = n * m;

  // flatten
  const arr = new Array(N);
  let idx = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      arr[idx++] = grid[i][j] % MOD;
    }
  }

  // prefix products
  const prefix = new Array(N);
  prefix[0] = 1;
  for (let i = 1; i < N; i++) {
    prefix[i] = (prefix[i - 1] * arr[i - 1]) % MOD;
  }

  // suffix products
  const suffix = new Array(N);
  suffix[N - 1] = 1;
  for (let i = N - 2; i >= 0; i--) {
    suffix[i] = (suffix[i + 1] * arr[i + 1]) % MOD;
  }

  // we build result
  const result = Array.from({ length: n }, () => Array(m).fill(0));
  idx = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      result[i][j] = (prefix[idx] * suffix[idx]) % MOD;
      idx++;
    }
  }

  return result;
};

// With optimizations
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var constructProductMatrix = function (grid) {
  const MOD = 12345;
  const n = grid.length,
    m = grid[0].length;
  const p = Array.from({ length: n }, () => new Array(m).fill(0));

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      p[i][j] = suffix;
      suffix = (suffix * grid[i][j]) % MOD;
    }
  }

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      p[i][j] = (p[i][j] * prefix) % MOD;
      prefix = (prefix * grid[i][j]) % MOD;
    }
  }

  return p;
};