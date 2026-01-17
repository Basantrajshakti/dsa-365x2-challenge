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


// 383. Ransom Note
// /**
//  * @param {string} ransomNote
//  * @param {string} magazine
//  * @return {boolean}
//  */
// var canConstruct = function (rn, m) {
//   const map1 = new Map();
//   const map2 = new Map();

//   for (let i = 0; i < rn.length; i++) {
//     map1.set(rn[i], (map1.get(rn[i]) || 0) + 1);
//   }

//   for (let i = 0; i < m.length; i++) {
//     map2.set(m[i], (map2.get(m[i]) || 0) + 1);
//   }

//   for (let i = 0; i < rn.length; i++) {
//     if (map1.get(rn[i]) > map2.get(rn[i]) || !map2.get(rn[i])) return false;
//   }

//   return true;
// };

// With 2 loops 
/**
 * @param {string} rn
 * @param {string} m
 * @return {boolean}
 */
var canConstruct = function (rn, m) {
  let map = new Map();

  for (let i = 0; i < m.length; i++) {
    map.set(m[i], (map.get(m[i]) || 0) + 1);
  }

  for (let i = 0; i < rn.length; i++) {
    if (!map.get(rn[i])) {
      return false;
    }
    map.set(rn[i], (map.get(rn[i]) || 0) - 1);
  }

  return true;
};


// With optimizations
// /**
//  * @param {string} rn
//  * @param {string} m
//  * @return {boolean}
//  */
// var canConstruct = function (rn, m) {
//   for (const char of m) {
//     rn = rn.replace(char, "");
//   }

//   return !rn;
// };