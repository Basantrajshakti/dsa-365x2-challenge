// Prefix sum

// 724. Find Pivot Index
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const len = nums.length;
  const right = len - 1;

  for (let i = 1; i < len; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }

  for (let i = 0; i < len; i++) {
    if ((nums[i - 1] || 0) === (nums[right] - nums[i])) return i;
  }

  return -1;
};

// With optimizations
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const n = nums.length;
  let totalSum = 0;

  for (let i = 0; i < n; i++) {
    totalSum += nums[i];
  }

  let left = 0, right = totalSum;

  for (let i = 0; i < n; i++) {
    right -= nums[i];

    if (left === right) return i;

    left += nums[i];
  }
  return -1;
};


// 1413. Minimum Value to Get Positive Step by Step Sum
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let minVal = 0;
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    if (total < minVal) minVal = total;
  }

  return -minVal + 1;
};