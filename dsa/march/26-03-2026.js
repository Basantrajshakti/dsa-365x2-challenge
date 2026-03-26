// Daily challenge


// 3548. Equal Sum Grid Partition II
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function (grid) {
  let total = 0;
  let rows = grid.length;
  let cols = grid[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      total += grid[i][j];
    }
  }
  const rotate = (g) => {
    let r = g.length;
    let c = g[0].length;
    let tmp = Array.from({ length: c }, () => Array(r).fill(0));
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        tmp[j][r - 1 - i] = g[i][j];
      }
    }
    return tmp;
  };

  let currentGrid = grid;
  for (let r = 0; r < 4; r++) {
    let visited = new Set();
    visited.add(0);
    let vals = 0;
    let rLen = currentGrid.length;
    let cLen = currentGrid[0].length;

    if (rLen < 2) {
      currentGrid = rotate(currentGrid);
      continue;
    }

    if (cLen === 1) {
      for (let i = 0; i < rLen - 1; i++) {
        vals += currentGrid[i][0];
        let flag = vals * 2 - total;
        if (flag === 0 || flag === currentGrid[0][0] || flag === currentGrid[i][0]) {
          return true;
        }
      }
    } else {
      for (let i = 0; i < rLen - 1; i++) {
        for (let j = 0; j < cLen; j++) {
          visited.add(currentGrid[i][j]);
          vals += currentGrid[i][j];
        }
        let flag = vals * 2 - total;
        if (i === 0) {
          if (flag === 0 || flag === currentGrid[0][0] || flag === currentGrid[0][cLen - 1]) {
            return true;
          }
        } else if (visited.has(flag)) {
          return true;
        }
      }
    }
    currentGrid = rotate(currentGrid);
  }
  return false;
};