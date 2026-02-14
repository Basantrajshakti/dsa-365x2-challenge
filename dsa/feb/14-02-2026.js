// Sorting

// 747. Largest Number At Least Twice of Others
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let maxIdx = -1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num > max1) {
      max2 = max1;
      max1 = num;
      maxIdx = i;
    } else if (num > max2 && num < max1) {
      max2 = num;
    }
  }

  if (max1 >= max2 * 2) return maxIdx;
  return -1;
};