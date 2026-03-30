// Daily challenge

// 2840. Check if Strings Can be Made Equal With Operations II
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkStrings = (s1, s2) => {
  const freq = Array(52).fill(0);

  for (let i = 0; i < s1.length; i++) {
    const off = (i & 1) * 26;
    freq[s1.charCodeAt(i) - 97 + off]++;
    freq[s2.charCodeAt(i) - 97 + off]--;
  }

  return freq.every((c) => c === 0);
};

// With optimizations
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkStrings = (s1, s2) => {
  let eX = 0,
    oX = 0,
    eS = 0,
    oS = 0;

  for (let i = 0; i < s1.length; i++) {
    const v1 = s1.charCodeAt(i),
      v2 = s2.charCodeAt(i);
    const dx = v1 ^ v2;
    const ds = v1 * v1 - v2 * v2;

    if (i & 1) {
      oX ^= dx;
      oS += ds;
    } else {
      eX ^= dx;
      eS += ds;
    }
  }

  return !(eX | oX | eS | oS);
};

// 557. Reverse Words in a String III
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let res = "";
  let word = "";

  for (let c of s) {
    if (c === " ") {
      res += word + c;
      word = "";
    } else {
      word = c + word;
    }
  }
  return res + word;
};
