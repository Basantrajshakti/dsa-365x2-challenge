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


// 389. Find the Difference
// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {character}
//  */
// var findTheDifference = function (s, t) {
//   for (let i = 0; i < s.length; i++) {
//     t = t.replace(s[i], '');
//   }

//   return t;
// };


// With optimizations
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let sSum = 0;
  let tSum = 0;

  for (let i = 0; i < t.length; i++) {
    sSum = sSum + (s.charCodeAt(i) || 0);
    tSum = tSum + (t.charCodeAt(i) || 0);
  }

  return String.fromCharCode(tSum - sSum);
};