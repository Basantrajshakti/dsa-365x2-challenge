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