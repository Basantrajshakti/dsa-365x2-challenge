// Daily challenge

// 1391. Check if There is a Valid Path in a Grid
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {
  const rows = grid.length,
    cols = grid[0].length;

  const dirs = {
    1: new Set([0, 1]),
    2: new Set([2, 3]),
    3: new Set([0, 3]),
    4: new Set([1, 3]),
    5: new Set([0, 2]),
    6: new Set([1, 2]),
  };

  const moves = [
    [0, -1, 0, 1],
    [0, 1, 1, 0],
    [-1, 0, 2, 3],
    [1, 0, 3, 2],
  ];

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  const queue = [[0, 0]];
  visited[0][0] = true;

  while (queue.length > 0) {
    const [r, c] = queue.shift();
    if (r === rows - 1 && c === cols - 1) return true;

    for (const [dr, dc, outD, inD] of moves) {
      const nr = r + dr,
        nc = c + dc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited[nr][nc]) {
        if (dirs[grid[r][c]].has(outD) && dirs[grid[nr][nc]].has(inD)) {
          visited[nr][nc] = true;
          queue.push([nr, nc]);
        }
      }
    }
  }
  return false;
};

// 349. Intersection of Two Arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const nums1Set = new Set(nums1);
  const nums = [];

  for (let i = 0; i < nums2.length; i++) {
    if (nums1Set.has(nums2[i])) {
      nums.push(nums2[i]);
      nums1Set.delete(nums2[i]); // to prevent repeated additions
    }
  }
  return nums;
};
