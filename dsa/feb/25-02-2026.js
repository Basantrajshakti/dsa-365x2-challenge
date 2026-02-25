// Prefix sum

// 3707. Equal Score Substrings
/**
 * @param {string} s
 * @return {boolean}
 */
var scoreBalance = function (s) {
  let rSum = 0, lSum = 0;

  for (const c of s) {
    rSum += c.charCodeAt(0) - 96;
  }

  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i) - 96;
    lSum += c;
    rSum -= c;

    if (lSum === rSum) return true;
  }
  return false;
};