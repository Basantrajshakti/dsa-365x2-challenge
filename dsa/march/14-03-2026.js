// Arrays

// 883. Projection Area of 3D Shapes
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  let top = 0;
  let front = 0;
  let side = 0;
  let n = grid.length;

  // front vs top
  for (let i = 0; i < n; i++) {
    front += Math.max(...grid[i]);
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0) {
        top++; // top
      }
    }
  }

  // side
  for (let j = 0; j < n; j++) {
    let maxCol = 0;
    for (let i = 0; i < n; i++) {
      maxCol = Math.max(maxCol, grid[i][j]);
    }
    side += maxCol;
  }

  return top + front + side;
};

// With optimizations
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    let rowMax = 0;
    let colMax = 0;
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j]) res += 1;
      rowMax = Math.max(rowMax, grid[i][j]);
      colMax = Math.max(colMax, grid[j][i]);
    }
    res += rowMax + colMax;
  }
  return res;
};


// 892. Surface Area of 3D Shapes
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  const N = grid.length;
  const UNIT_CUBE = 1;
  const LATERAL_FACES = (4 * UNIT_CUBE);
  const BASE_FACES = (2 * UNIT_CUBE);
  let s = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] > 0) {
        s += (grid[i][j] * LATERAL_FACES) + BASE_FACES;

        if (i > 0)
          s -= Math.min(grid[i][j], grid[i - 1][j]) * (2 * UNIT_CUBE);
        if (j > 0)
          s -= Math.min(grid[i][j], grid[i][j - 1]) * (2 * UNIT_CUBE);
      }
    }
  }

  return s;
};