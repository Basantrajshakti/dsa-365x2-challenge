// 1331. Rank Transform of an Array

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return [1];

  let temp = arr.map((val, idx) => [val, idx]);
  temp.sort((a, b) => a[0] - b[0]);

  let rank = 1;
  let prev = temp[0][0];

  for (let i = 0; i < arr.length; i++) {
    if (prev < temp[i][0]) {
      rank++;
    }
    arr[temp[i][1]] = rank;
    prev = temp[i][0];
  }

  return arr;
};
