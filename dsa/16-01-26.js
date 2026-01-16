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


// 345. Reverse Vowels of a String
/**
 * @param {string} s
 * @return {string}
 */
const v = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

var reverseVowels = function (s) {
  const rev = s.split('');

  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    while (i < j && !v.has(rev[i])) i++;
    while (i < j && !v.has(rev[j])) j--;

    const temp = rev[i];
    rev[i] = rev[j];
    rev[j] = temp;
  }

  return rev.join('');
};