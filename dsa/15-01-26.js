// Strings

// 205. Isomorphic Strings
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const sIndMap = {};
  const tIndMap = {};

  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in sIndMap)) sIndMap[s[i]] = i;
    if (!(t[i] in tIndMap)) tIndMap[t[i]] = i;

    if (sIndMap[s[i]] != tIndMap[t[i]]) return false;
  }

  return true;
};