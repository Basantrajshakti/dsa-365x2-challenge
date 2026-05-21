// Daily challenge

// 3043. Find the Length of the Longest Common Prefix
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
  const prefixes = new Set();

  for (const num of arr1) {
    const s = String(num);
    for (let i = 1; i <= s.length; i++) prefixes.add(s.slice(0, i));
  }

  let ans = 0;

  for (const num of arr2) {
    const s = String(num);
    for (let i = 1; i <= s.length; i++) if (prefixes.has(s.slice(0, i))) ans = Math.max(ans, i);
  }

  return ans;
};

// 661. Image Smoother
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
