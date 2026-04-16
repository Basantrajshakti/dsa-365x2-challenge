// Daily Challenge

// 3488. Closest Equal Element Queries
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var solveQueries = function (nums, queries) {
  const n = nums.length;
  const last = new Map();
  const dp = new Array(n).fill(n);

  for (let i = 0; i < 2 * n; i++) {
    const idx = i % n;
    const num = nums[idx];

    if (last.has(num)) {
      const prev = last.get(num);
      const dist = i - prev;

      dp[idx] = Math.min(dp[idx], dist);
      dp[prev % n] = Math.min(dp[prev % n], dist);
    }

    last.set(num, i);
  }

  return queries.map((q) => (dp[q] === n ? -1 : dp[q]));
};

// 118. Pascal's Triangle
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let rows = [[1]];

  if (numRows === 1) return rows;

  for (let i = 0; i < numRows - 1; i++) {
    const tempRow = [0, ...rows[rows.length - 1], 0];
    const row = [];

    for (let j = 0; j < tempRow.length - 1; j++) {
      row.push(tempRow[j] + tempRow[j + 1]);
    }
    rows.push(row);
  }

  return rows;
};
