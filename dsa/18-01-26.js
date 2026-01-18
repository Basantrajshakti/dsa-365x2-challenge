// Strings

// 387. First Unique Character in a String
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var firstUniqChar = function (s) {
//   if (s.length === 1) return 0;

//   for (let i = 0; i < s.length; i++) {
//     if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
//   }

//   return -1;
// };


// With optimizations
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  if (s.length === 1) return 0;

  const f = new Uint32Array(26);

  for (let i = 0; i < s.length; i++) {
    f[s.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (f[s.charCodeAt(i) - 97] === 1) return i;
  }

  return -1;
};