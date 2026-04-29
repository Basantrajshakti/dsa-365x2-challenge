// Daily challenge

// 3225. Maximum Score From Grid Operations
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumScore = function (grid) {
  const n = grid.length;

  if (n === 1) return 0;

  let dp0 = new Array(n + 1).fill(0);
  let dp1 = new Array(n + 1).fill(0);

  for (let j = 1; j < n; j++) {
    let new_dp0 = new Array(n + 1).fill(0);
    let new_dp1 = new Array(n + 1).fill(0);

    for (let i = 0; i <= n; i++) {
      let prev = 0,
        curr = 0;

      for (let x = 0; x < i; x++) curr += grid[x][j];

      for (let y = 0; y <= n; y++) {
        if (y > 0 && y <= i) curr -= grid[y - 1][j];
        if (y > i) prev += grid[y - 1][j - 1];
        new_dp0[y] = Math.max(new_dp0[y], prev + dp0[i], dp1[i]);
        new_dp1[y] = Math.max(new_dp1[y], curr + dp1[i], curr + prev + dp0[i]);
      }
    }
    dp0 = new_dp0;
    dp1 = new_dp1;
  }

  return Math.max(...dp1);
};

// 414. Third Maximum Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let max1 = -Infinity,
    max2 = -Infinity,
    max3 = -Infinity;

  for (const num of nums) {
    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2 && num < max1) {
      max3 = max2;
      max2 = num;
    } else if (num > max3 && num < max2) {
      max3 = num;
    }
  }

  if (max3 == -Infinity) return max1;

  return max3;
};
