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