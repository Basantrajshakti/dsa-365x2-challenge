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