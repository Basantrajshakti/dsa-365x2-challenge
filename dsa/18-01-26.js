// Strings

// 387. First Unique Character in a String
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  if (s.length === 1) return 0;

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }

  return -1;
};