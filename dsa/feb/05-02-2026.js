// Sliding window

// 3206. Alternating Groups I
/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors) {
  let ctr = 0;
  const len = colors.length;

  for (let i = 0; i < len; i++) {
    if (colors[i] !== colors[(i + 1 + len) % len] && colors[i] !== colors[(i - 1 + len) % len]) {
      ctr++;
    }
  }

  return ctr;
};

// Cleaned up
/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors) {
  let ctr = 0;
  const len = colors.length;

  for (let i = 0; i < len; i++) {
    const left = (i - 1 + len) % len;
    const right = (i + 1 + len) % len;

    if (colors[i] !== colors[right] && colors[i] !== colors[left]) ctr++;
  }

  return ctr;
};


// 3258. Count Substrings That Satisfy K-Constraint I
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function (s, k) {
  let ctr = 0;
  const len = s.length;

  for (let i = 0; i < len; i++) {
    let map = { '1': 0, '0': 0 };
    for (let j = i; j < len; j++) {
      map[s[j]]++;

      if (map['1'] > k && map['0'] > k) {
        break;
      } else {
        ctr++;
      }
    }
  }

  return ctr;
};


// With optimizations
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function (s, k) {
  let l = 0
  let count0 = 0
  let count1 = 0
  let res = 0

  for (let r = 0; r < s.length; r++) {
    if (s[r] === '0') {
      count0++
    } else {
      count1++
    }

    // shrink window if invalid
    while (count0 > k && count1 > k) {
      if (s[l] === '0') {
        count0--
      } else {
        count1--
      }
      l++
    }
    // all substring ending at r are valid
    res += r - l + 1
  }

  return res
}