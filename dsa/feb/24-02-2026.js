// Prefix sum

// 3427. Sum of Variable Length Subarrays
/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function (nums) {
  const s = [nums[0]];
  let sum = 0;

  for (let i = 1; i < nums.length; i++) {
    s[i] = nums[i] + s[i - 1];
  }

  for (let i = 0; i < nums.length; i++) {
    const l = Math.max(0, i - nums[i]);
    sum += s[i] - (s[l - 1] || 0);
  }

  return sum;
};

// 3432. Count Partitions with Even Sum Difference
/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
  let lSum = 0, ctr = 0, rSum = nums.reduce((a, b) => a + b, 0);

  for (let i = 0; i < nums.length - 1; i++) {
    lSum += nums[i];
    rSum -= nums[i];

    const d = lSum - rSum;
    if (d % 2 === 0) {
      ctr++;
    }
  }

  return ctr;
};