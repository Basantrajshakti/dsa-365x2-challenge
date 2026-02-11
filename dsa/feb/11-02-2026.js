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