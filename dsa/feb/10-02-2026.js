// Hash maps

// 748. Shortest Completing Word
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  let fixLicense = licensePlate.toLowerCase().replace(/[\d\s]/g, '');
  let sortWords = words.sort((a, b) => a.length - b.length);

  for (let word of sortWords) {
    let copyLicense = fixLicense;

    for (let i = 0; i < word.length; i++) {
      copyLicense = copyLicense.replace(word[i], '');
      if (!copyLicense) return word;
    }
  }
};

// With optimizations
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  let fixLicense = licensePlate.toLowerCase().replace(/[\d\s]/g, '');
  let minWord = '';
  let minWordLen = Infinity;

  for (let word of words) {
    let copyLicense = fixLicense;

    for (let i = 0; i < word.length; i++) {
      copyLicense = copyLicense.replace(word[i], '');
      if (!copyLicense && word.length < minWordLen) {
        minWord = word;
        minWordLen = word.length;
      }
    }
  }

  return minWord;
};