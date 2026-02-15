// Sorting

// 905. Sort Array By Parity
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const len = nums.length;
  if (len === 1) return nums;

  let i = 0; j = len;

  while (i < j) {
    if (nums[i] % 2 === 0) {
      i++;
    } else if (nums[j] % 2 === 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    } else {
      j--;
    }
  }
  return nums;
};