// Daily Challenge

// 3653. XOR After Range Multiplication Queries I
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var xorAfterQueries = function (nums, queries) {
  const mod = 1e9 + 7;

  for (let [l, r, k, v] of queries) {
    for (let i = l; i <= r; i += k) {
      nums[i] = (nums[i] * v) % mod;
    }
  }

  let res = 0;
  for (let x of nums) {
    res ^= x;
  }

  return res;
};

// 804. Unique Morse Code Words
/**
 * @param {string[]} words
 * @return {number}
 */
const map = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
};

var uniqueMorseRepresentations = function (words) {
  const set = new Set();

  for (const word of words) {
    let str = "";
    for (const char of word) {
      str += map[char];
    }
    set.add(str);
  }
  return set.size;
};
