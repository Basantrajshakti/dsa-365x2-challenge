// Arrays

// 434. Number of Segments in a String
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ' && (i === 0 || s[i - 1] === ' ')) {
      count++;
    }
  }

  return count;
}

// 459. Repeated Substring Pattern
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const doubled = s + s;
  const sub = doubled.slice(1, -1);
  return sub.includes(s);
};

// One liner
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  return s.repeat(2).slice(1, -1).includes(s);
};