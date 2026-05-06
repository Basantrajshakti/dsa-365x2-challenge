// Daily challenge

// 1861. Rotating the Box
/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function (boxGrid) {
  const row = boxGrid.length;
  const col = boxGrid[0].length;

  const rotate = Array.from({ length: col }, () => Array(row).fill("."));

  for (let k = 0; k < row; k++) {
    let bottom = col - 1;
    for (let j = col - 1; j >= 0; j--) {
      if (boxGrid[k][j] === "#") {
        rotate[bottom][row - 1 - k] = "#";
        bottom--;
      } else if (boxGrid[k][j] === "*") {
        rotate[j][row - 1 - k] = "*";
        bottom = j - 1;
      }
    }
  }

  return rotate;
};
