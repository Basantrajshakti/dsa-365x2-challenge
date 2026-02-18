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