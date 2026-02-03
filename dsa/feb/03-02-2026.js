// Sliding window


// 2760. Longest Even Odd Subarray With Threshold
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function (nums, threshold) {
  let l = -1, r = -1, maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && l === -1) {
      l = i;
      // continue;
    }

    if (l >= 0) {
      if (nums[i] <= threshold) {
        if ((nums[i] % 2 === nums[i + 1] % 2)) {
          const diff = i - l + 1;
          if (diff > maxLen) maxLen = diff;

          l = -1;
        }
      } else {
        const diff = (i - l);
        if (diff > maxLen) maxLen = diff;

        l = -1;
      }
    }
  }

  if (l >= 0) {
    const diff = (nums.length - l);
    if (diff > maxLen) maxLen = diff;

    l = -1;
  }

  return maxLen;
};

// With optimizations
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function (nums, threshold) {
  let result = 0;
  let left = -1;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] > threshold) {
      left = -1;
      continue;
    }

    if (right > 0 && nums[right] % 2 === nums[right - 1] % 2) {
      left = -1;
    }

    if (left < 0 && nums[right] % 2 === 0) {
      left = right;
    }

    if (left >= 0) {
      result = Math.max(result, right - left + 1);
    }
  }

  return result;
};


// 2932. Maximum Strong Pair XOR I
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
  let max = 0;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (i !== j && Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j])) {
        const xor = nums[i] ^ nums[j];
        if (xor > max) {
          max = xor;
        }
      }
    }
  }

  return max;
};

// With optimizations
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
  let max = 0;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      const n1 = nums[i];
      const n2 = nums[j];
      if (i !== j && Math.abs(n1 - n2) <= Math.min(n1, n2)) {
        const xor = n1 ^ n2;
        if (xor > max) {
          max = xor;
        }
      }
    }
  }

  return max;
};