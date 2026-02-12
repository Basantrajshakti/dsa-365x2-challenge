// Sorting

// 414. Third Maximum Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;

  for (const num of nums) {
    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2 && num < max1) {
      max3 = max2;
      max2 = num;
    } else if (num > max3 && num < max2) {
      max3 = num;
    }
  }

  if (max3 == -Infinity) return max1;

  return max3;
};