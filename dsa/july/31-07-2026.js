// 3016. Minimum Number of Pushes to Type Word II
/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  const freq = new Array(26).fill(0);

  for (const ch of word) {
    freq[ch.charCodeAt(0) - 97]++;
  }

  freq.sort((a, b) => a - b);

  let cnt = 0;
  let ans = 0;

  for (let i = 25; i >= 0; i--) {
    if (freq[i] > 0) cnt++;

    if (cnt <= 8) ans += freq[i];
    else if (cnt <= 16) ans += freq[i] * 2;
    else if (cnt <= 24) ans += freq[i] * 3;
    else ans += freq[i] * 4;
  }

  return ans;
};
