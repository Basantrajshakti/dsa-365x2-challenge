// Arrays

// 661. Image Smoother
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  let res = [], n = img.length, m = img[0].length;

  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < m; j++) {
      arr[j] = smoothen(img, i, j, n, m);
    }
    res.push(arr);
  }

  return res;
};

function smoothen(img, i, j, n, m) {
  let r = i === 0 ? 0 : i - 1;
  let c = j === 0 ? 0 : j - 1;
  let rMax = i === 0 ? r + 1 : r + 2;
  let cMax = j === 0 ? c + 1 : c + 2;
  let sum = 0, ctr = 0;

  for (let x = r; x <= rMax && x < n; x++) {
    for (let y = c; y <= cMax && y < m; y++) {
      sum += img[x][y];
      ctr++;
    }
  }

  return Math.floor(sum / ctr);
}

// With optimizations
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  const rows = img.length;
  const cols = img[0].length;
  const result = new Array(rows);

  for (let i = 0; i < rows; ++i) {
    result[i] = new Array(cols);

    for (let j = 0; j < cols; ++j) {
      let totalSum = 0;
      let count = 0;

      for (let x = Math.max(0, i - 1); x < Math.min(rows, i + 2); ++x) {
        for (let y = Math.max(0, j - 1); y < Math.min(cols, j + 2); ++y) {
          totalSum += img[x][y];
          count += 1;
        }
      }

      result[i][j] = Math.floor(totalSum / count);
    }
  }

  return result;
};