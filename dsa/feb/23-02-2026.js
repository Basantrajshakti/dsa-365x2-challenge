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


// 3354. Make Array Elements Equal to Zero
/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function (nums) {
  let lSum = 0, rSum = 0, len = nums.length, ctr = 0;

  rSum = nums.reduce((a, b) => a + b, 0);

  for (let i = 0; i < len; i++) {
    rSum -= nums[i];
    lSum += nums[i];

    if (nums[i] !== 0) continue;
    if (lSum === rSum) ctr += 2;
    if (Math.abs(lSum - rSum) === 1) ctr++;
  }

  return ctr;
};