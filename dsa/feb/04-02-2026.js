// Sliding window

// 3090. Maximum Length Substring With Two Occurrences
/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
  let map = new Map();
  let max = -Infinity;
  const len = s.length;

  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      const c = map.get(s[j]);
      if (c === 2) {
        map = new Map();
        break;
      }
      else {
        map.set(s[j], (c || 0) + 1);
        max = Math.max(max, j - i + 1);
      }
    }
  }

  return max;
};