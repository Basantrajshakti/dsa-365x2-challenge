// Daily challenge

// 153. Find Minimum in Rotated Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
};

// 598. Range Addition II
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  if (ops.length === 0) return m * n;

  let minRow = ops[0][0];
  let minCol = ops[0][1];

  for (let i = 1; i < ops.length; i++) {
    minRow = Math.min(minRow, ops[i][0]);
    minCol = Math.min(minCol, ops[i][1]);
  }

  return minRow * minCol;
};
