// Strings

// 409. Longest Palindrome
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) return 1;

  const f = new Uint16Array(58);

  for (let i = 0; i < s.length; i++) {
    f[s.charCodeAt([i]) - 65]++;
  }

  let sum = 0;

  for (let i = 0; i < f.length; i++) {
    if (f[i] === 0) continue;

    else if (f[i] % 2 === 0) {
      sum += f[i];
    } else {
      sum += f[i] - 1;
    }
  }

  return sum < s.length ? sum + 1 : sum;
};