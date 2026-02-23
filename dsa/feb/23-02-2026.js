// Prefix sum

// 3028. Ant on the Boundary
/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {
  let sum = 0, ctr = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === 0) ctr++;
  }

  return ctr;
};