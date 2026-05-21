// Daily challenge

// 3043. Find the Length of the Longest Common Prefix
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
  const prefixes = new Set();

  for (const num of arr1) {
    const s = String(num);
    for (let i = 1; i <= s.length; i++) prefixes.add(s.slice(0, i));
  }

  let ans = 0;

  for (const num of arr2) {
    const s = String(num);
    for (let i = 1; i <= s.length; i++) if (prefixes.has(s.slice(0, i))) ans = Math.max(ans, i);
  }

  return ans;
};
