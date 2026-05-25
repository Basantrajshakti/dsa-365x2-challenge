// Daily challenge

// 1871. Jump Game VII
/**
 * @param {string} s
 * @param {number} min
 * @param {number} max
 * @return {boolean}
 */
var canReach = function (s, min, max) {
  if (s.at(-1) & 1) return false;

  const n = s.length;
  const dp = Array(n).fill(false);
  dp[0] = true;
  let reach = 0;
  let maxR = max;

  for (let i = min; i < n; i++) {
    if (i > maxR) return false;

    reach += dp[i - min];
    reach -= i > max && dp[i - max - 1];

    if (reach && !(s[i] & 1)) {
      dp[i] = true;
      maxR = i + max;
    }
  }

  return reach;
};
