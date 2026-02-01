// Strings

// 392. Is Subsequence
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let j = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[j] === t[i]) j++;
  }

  return j === s.length;
};


// 405. Convert a Number to Hexadecimal
// var toHex = function (num) {
//   if (num < 0)
//     num = 0xFFFFFFFF + num + 1;

//   return num.toString(16);
// };

// With optimizations
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  return (num >>> 0).toString(16);
};