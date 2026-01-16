// Strings

// 344. Reverse String
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  for (let i = 0, j = s.length - 1; i < s.length / 2; i++, j--) {
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
};