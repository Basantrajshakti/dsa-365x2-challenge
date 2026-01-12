// Strings

// 28. Find the Index of the First Occurrence in a String
// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// var strStr = function (haystack, needle) {
//   return haystack.indexOf(needle);
// };

// Custom implementation
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length > haystack.length) return -1;

  const needleLen = needle.length;
  const loopLen = haystack.length - needleLen + 1;

  for (let i = 0; i < loopLen; i++) {
    const tempNeedle = haystack.substring(i, needleLen + i);
    if (tempNeedle === needle) return i;
  }
  return -1;
};


// 58. Length of Last Word
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let len = 0;
  let str = s.trim();

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ' ') return len;
    else len += 1;
  }

  return len;
};