// Prefix sum

// 1893. Check if All the Integers in a Range Are Covered
/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  const diff = right - left + 1;
  const arr = new Uint8Array(diff);

  for (let i = 0; i < ranges.length; i++) {
    for (let j = ranges[i][0]; j <= ranges[i][1]; j++)
      arr[j - left]++;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) return false;
  }

  return true;
};


// 1991. Find the Middle Index in Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  const pSum = [nums[0]];
  const len = nums.length;

  for (let i = 1; i < len; i++) {
    pSum[i] = nums[i] + pSum[i - 1];
  }

  for (let i = 0; i < len; i++) {
    if ((pSum[i - 1] || 0) === pSum[len - 1] - pSum[i]) return i;
  }

  return -1;
};

// With optimizations
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  const len = nums.length;
  let rSum = 0, lSum = 0;

  for (let i = 0; i < len; i++) {
    rSum += nums[i];
  }

  for (let i = 0; i < len; i++) {
    if (lSum === rSum - lSum - nums[i]) return i;
    lSum += nums[i];
  }

  return -1;
};