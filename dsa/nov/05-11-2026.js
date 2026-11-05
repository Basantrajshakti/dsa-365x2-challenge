// 1385. Find the Distance Value Between Two Arrays
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  const isValid = (n, arr, d) => {
    for (const e of arr) {
      if (Math.abs(e - n) <= d) return false;
    }

    return true;
  };

  let c = 0;
  for (const n of arr1) {
    if (isValid(n, arr2, d)) c++;
  }

  return c;
};

// With optimizations
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  let count = 0;

  for (let i = 0; i < arr1.length; i++) {
    let j = 0;

    while (j < arr2.length) {
      let absDiff = Math.abs(arr1[i] - arr2[j]);

      if (absDiff <= d) break;
      else j++;
    }

    if (j === arr2.length) count++;
  }

  return count;
};
