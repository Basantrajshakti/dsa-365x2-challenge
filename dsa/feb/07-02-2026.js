// Hash map

// 500. Keyboard Row
/**
 * @param {string[]} words
 * @return {string[]}
 */

const map = {
  q: 0,
  w: 0,
  e: 0,
  r: 0,
  t: 0,
  y: 0,
  u: 0,
  i: 0,
  o: 0,
  p: 0,
  a: 1,
  s: 1,
  d: 1,
  f: 1,
  g: 1,
  h: 1,
  j: 1,
  k: 1,
  l: 1,
  z: 2,
  x: 2,
  c: 2,
  v: 2,
  b: 2,
  n: 2,
  m: 2,
}

var findWords = function (words) {
  const arr = [];

  for (const word of words) {
    const w = word.toLowerCase();
    let flag = true;

    for (let j = 0; j < w.length - 1; j++) {
      if (map[w[j]] !== map[w[j + 1]]) {
        flag = false;
        break;
      }
    }

    if (flag) arr.push(word);
  }

  return arr;
}


// 575. Distribute Candies
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const len = candyType.length / 2;
  const set = new Set(candyType);

  if (set.size < len) return set.size;
  return len;
};