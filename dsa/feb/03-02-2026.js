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