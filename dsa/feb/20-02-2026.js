// Prefix sum

// 1893. Check if All the Integers in a Range Are Covered
/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  const diff = right - left + 1;
  const arr = new Uint8Array(diff);

  for (let i = 0; i < ranges.length; i++) {
    for (let j = ranges[i][0]; j <= ranges[i][1]; j++)
      arr[j - left]++;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) return false;
  }

  return true;

};