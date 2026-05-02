// Daily challenge

// 788. Rotated Digits
/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function (n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    let num = i;
    let isValid = true;
    let hasChange = false;

    while (num > 0) {
      let digit = num % 10;

      if (digit === 3 || digit === 4 || digit === 7) {
        isValid = false;
        break;
      }

      if (digit === 2 || digit === 5 || digit === 6 || digit === 9) {
        hasChange = true;
      }

      num = Math.floor(num / 10);
    }

    if (isValid && hasChange) {
      count++;
    }
  }

  return count;
};

// 463. Island Perimeter
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let row = grid.length,
    col = grid[0].length;
  var perimeter = 0;
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (grid[r][c] == 1) {
        perimeter += 4;
        if (r > 0 && grid[r - 1][c] == 1) {
          //Check up
          perimeter -= 2;
        }
        if (c > 0 && grid[r][c - 1] == 1) {
          //Check left
          perimeter -= 2;
        }
      }
    }
  }
  return perimeter;
};
