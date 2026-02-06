// Sliding window


/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function (nums, l, r) {
  let minSum = -1;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = i; j < len; j++) {
      sum += nums[j];

      if (j - i + 1 >= l && j - i + 1 <= r) {
        if ((sum > 0 && sum < minSum) || (sum > 0 && minSum === -1)) {
          minSum = sum;
        }
      }
      if (j - i + 1 > r) break;
    }
  }

  return minSum;
};

// Cleaned up code
/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function (nums, l, r) {
  let minSum = Infinity;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    let sum = 0;

    for (let j = i; j < len; j++) {
      sum += nums[j];

      if (j - i + 1 >= l && j - i + 1 <= r && sum > 0) {
        minSum = Math.min(minSum, sum);
      }
      if (j - i + 1 > r) break;
    }
  }

  if (minSum == Infinity) return -1;
  return minSum;
};