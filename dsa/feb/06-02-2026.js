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


// 3411. Maximum Subarray With Equal Products
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function (nums) {
  const n = nums.length;
  let maxLength = 0;

  for (let start = 0; start < n; start++) {
    let currentGcd = nums[start];
    let currentLcm = nums[start];
    let currentProduct = nums[start];

    for (let end = start; end < n; end++) {
      if (end > start) {
        currentGcd = gcd(currentGcd, nums[end]);
        currentLcm = (currentLcm * nums[end]) / gcd(currentLcm, nums[end]);
        currentProduct *= nums[end];
      }
      if (currentProduct === currentLcm * currentGcd) {
        maxLength = Math.max(maxLength, end - start + 1);
      }
    }
  }
  return maxLength;
};

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}