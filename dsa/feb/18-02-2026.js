// Prefix sum

// 1422. Maximum Score After Splitting a String
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  const f1 = [];
  const f0 = [];
  const len = s.length;

  let sum0 = 0;
  let sum1 = 0;

  for (let i = 0; i < len; i++) {
    if (s[i] === '1') sum1 += 1;
    else sum0 += 1;
    f1[i] = sum1;
    f0[i] = sum0;
  }

  let max = 0;
  for (let i = 0; i < len - 1; i++) {
    const sum = f0[i] + f1[len - 1] - f1[i];
    if (sum > max) max = sum;
  }

  return max;
};

// With optimizations
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let max = 0, sum0 = 0, sum1 = 0;

  for (const n of s) {
    if (n === '1') sum1 += 1;
  }

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === '0') sum0 += 1;
    else sum1 -= 1;
    max = Math.max(max, sum0 + sum1);
  }

  return max;
};


// 1588. Sum of All Odd Length Subarrays
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  // In total, there are k = (i + 1) * (n - i) subarrays, that contains A[i].
  // And there are k / 2 subarrays with odd length, that contains A[i].
  // And there are k / 2 subarrays with even length, that contains A[i].
  // A[i] will be counted ceil((i + 1) * (n - i) / 2) times for our question.

  let sum = 0, len = arr.length;

  for (let i = 0; i < len; i++)
    sum += Math.ceil((i + 1) * (len - i) / 2) * arr[i];

  return sum;
};