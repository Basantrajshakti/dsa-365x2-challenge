// Hash maps

// 804. Unique Morse Code Words
/**
 * @param {string[]} words
 * @return {number}
 */
const map = {
  a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--.."
}

var uniqueMorseRepresentations = function (words) {
  const set = new Set();

  for (const word of words) {
    let str = '';
    for (const char of word) {
      str += map[char];
    }
    set.add(str);
  }
  return set.size;
};


// 819. Most Common Word
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let pl = paragraph.toLowerCase().replaceAll(/[!?',;.]/g, ' ');

  const map = new Map();
  let max = 0, word = '';

  pl.split(' ').forEach(w => {
    if (w && w !== " " && !banned.includes(w)) {
      let count = (map.get(w) || 0) + 1;

      if (count > max) {
        max = count;
        word = w;
      }
      map.set(w, count);
    }
  })

  return word;
};

// With optimizations
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const bannedSet = new Set(banned);
  const wordCounts = {};
  let mostFrequent = '';
  let maxCount = 0;
  const words = paragraph.toLowerCase().match(/\b\w+\b/g) || [];

  for (const word of words) {
    if (bannedSet.has(word)) continue;
    wordCounts[word] = (wordCounts[word] || 0) + 1;

    if (wordCounts[word] > maxCount) {
      maxCount = wordCounts[word];
      mostFrequent = word;
    }
  }

  return mostFrequent;
};
