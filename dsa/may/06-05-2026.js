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

// 500. Keyboard Row
/**
 * @param {string[]} words
 * @return {string[]}
 */

const map = {
  q: 0,
  w: 0,
  e: 0,
  r: 0,
  t: 0,
  y: 0,
  u: 0,
  i: 0,
  o: 0,
  p: 0,
  a: 1,
  s: 1,
  d: 1,
  f: 1,
  g: 1,
  h: 1,
  j: 1,
  k: 1,
  l: 1,
  z: 2,
  x: 2,
  c: 2,
  v: 2,
  b: 2,
  n: 2,
  m: 2,
};

var findWords = function (words) {
  const arr = [];

  for (const word of words) {
    const w = word.toLowerCase();
    let flag = true;

    for (let j = 0; j < w.length - 1; j++) {
      if (map[w[j]] !== map[w[j + 1]]) {
        flag = false;
        break;
      }
    }

    if (flag) arr.push(word);
  }

  return arr;
};
