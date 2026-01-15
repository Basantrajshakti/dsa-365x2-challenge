// Strings

// 205. Isomorphic Strings
// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isIsomorphic = function (s, t) {
//   if (s.length !== t.length) return false;

//   const sIndMap = {};
//   const tIndMap = {};

//   for (let i = 0; i < s.length; i++) {
//     if (!(s[i] in sIndMap)) sIndMap[s[i]] = i;
//     if (!(t[i] in tIndMap)) tIndMap[t[i]] = i;

//     if (sIndMap[s[i]] != tIndMap[t[i]]) return false;
//   }

//   return true;
// };

// With optimizations
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const mapST = new Int16Array(128);
  const mapTS = new Int16Array(128);

  for (let i = 0; i < s.length; i++) {
    const a = s.charCodeAt(i);
    const b = t.charCodeAt(i);

    if (mapST[a] == 0 && mapTS[b] == 0) {
      mapST[a] = b + 1;
      mapTS[b] = a + 1;
    } else if (mapST[a] != b + 1 || mapTS[b] != a + 1) return false;
  }

  return true;
};