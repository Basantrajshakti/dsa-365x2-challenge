// Daily challenge

// 1846. Maximum Element After Decreasing and Rearranging
/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function (arr) {
  arr.sort((a, b) => a - b);
  if (arr[0] != 1) {
    arr[0] = 1;
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i] - 1) {
      arr[i] = arr[i - 1] + 1;
    }
  }
  return arr[arr.length - 1];
};

// With optimizations
/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function (arr) {
  arr.sort((a, b) => a - b);

  if (arr[0] != 1) {
    arr[0] = 1;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i] - 1) {
      arr[i] = arr[i - 1] + 1;
    }
  }

  return arr[arr.length - 1];
};
