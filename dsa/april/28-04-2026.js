// Daily challenge

// 2033. Minimum Operations to Make a Uni-Value Grid
/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function (grid, x) {
  let nums = [];

  for (let row of grid) {
    for (let val of row) {
      nums.push(val);
    }
  }

  let rem = nums[0] % x;
  for (let num of nums) {
    if (num % x !== rem) return -1;
  }

  nums.sort((a, b) => a - b);

  let median = nums[Math.floor(nums.length / 2)];

  let ops = 0;
  for (let num of nums) {
    ops += Math.abs(num - median) / x;
  }

  return ops;
};

// With optimizations
/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function (grid, x) {
  const n = grid.length;
  const m = grid[0].length;
  const nm = n * m;
  const count = new Uint16Array(10001);
  const r = grid[0][0] % x;

  for (let i = 0; i < n; ++i) {
    const row = grid[i];
    for (let j = 0; j < m; ++j) {
      const y = row[j];
      if (r === y % x) ++count[(y / x) >> 0];
      else return -1;
    }
  }

  let y = 0;
  const mi = (nm + 1) >> 1;

  for (let i = 0; i < mi; i += count[y++]);

  --y;
  let cnt = 0;
  const maxq = (10000 / x) >> 0;

  for (let i = 0; i <= maxq; ++i) {
    cnt += count[i] * Math.abs(i - y);
  }

  return cnt;
};
