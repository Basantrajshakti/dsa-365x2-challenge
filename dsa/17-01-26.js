// Strings

// 290. Word Pattern
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const map = {};
  let wordCtr = 0;

  for (let i = 0, j = 0; i < pattern.length || j < s.length; i++, j++) {
    let currentWord = '';
    while (s[j] !== ' ' && j < s.length) currentWord += s[j++];

    if (
      (map[pattern[i]] && map[pattern[i]] !== currentWord) ||
      (!map[pattern[i]] && map[currentWord + 'word'])
    ) return false;

    map[pattern[i]] = currentWord;
    map[currentWord + 'word'] = true;
    if (currentWord) wordCtr++;
  }

  return wordCtr === pattern.length;
};