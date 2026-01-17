// Strings

// 290. Word Pattern
// /**
//  * @param {string} pattern
//  * @param {string} s
//  * @return {boolean}
//  */
// var wordPattern = function (pattern, s) {
//   const map = {};
//   let wordCtr = 0;

//   for (let i = 0, j = 0; i < pattern.length || j < s.length; i++, j++) {
//     let currentWord = '';
//     while (s[j] !== ' ' && j < s.length) currentWord += s[j++];

//     if (
//       (map[pattern[i]] && map[pattern[i]] !== currentWord) ||
//       (!map[pattern[i]] && map[currentWord + 'word'])
//     ) return false;

//     map[pattern[i]] = currentWord;
//     map[currentWord + 'word'] = true;
//     if (currentWord) wordCtr++;
//   }

//   return wordCtr === pattern.length;
// };


// clean logic
// /**
//  * @param {string} pattern
//  * @param {string} s
//  * @return {boolean}
//  */
// var wordPattern = function (pattern, s) {
//   const map = {};
//   const words = s.split(' ');

//   if (pattern.length !== words.length) return false;

//   for (let i = 0; i < pattern.length; i++) {
//     const char = pattern[i];
//     const word = words[i] + '-'; // Just making it atleast 2 chars to prevent mappings like a->b and b->a

//     if ((map[char] && map[char] !== word) || (map[word] && map[word] !== char)) return false;

//     map[char] = word;
//     map[word] = char;
//   }

//   return true;
// };

// With opimizations
/**
 * @param {string} pat
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pat, s) {
  const map = new Map();
  s = s.split(' ');

  if (pat.length !== s.length) return false;

  for (let i = 0; i < pat.length; i++) {
    const char = pat[i];
    const word = s[i] + '-';

    if (map.has(char)) {
      if (map.get(char) !== word) return false;
    } else {
      map.set(char, word);
    }

    if (map.has(word)) {
      if (map.get(word) !== char) return false;
    } else {
      map.set(word, char);
    }
  }

  return true;
};