// Daily challenge

// 1967. Number of Strings That Appear as Substrings in Word
/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
  let count = 0;

  for (const str of patterns) {
    if (word.includes(str)) {
      count++;
    }
  }

  return count;
};
