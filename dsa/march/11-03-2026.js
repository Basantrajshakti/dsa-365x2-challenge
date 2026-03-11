// Daily Challenge


// 1009. Complement of Base 10 Integer
/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  if (n === 0) return 1;

  let temp = n;
  let mask = 0;

  while (temp > 0) {
    mask = (mask << 1) | 1;
    temp >>= 1;
  }

  return n ^ mask;
};

// With optimizations
/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  if (n === 0) return 1;
  const bitLength = Math.floor(Math.log2(n)) + 1;
  const mask = (1 << bitLength) - 1;
  return n ^ mask;
};


// 806. Number of Lines To Write String
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let count = 0, ctr = 1;

  for (const c of s) {
    const idx = c.charCodeAt(0) - 97;
    const w = widths[idx];

    if (count + w > 100) {
      count = w;
      ctr++;
    } else {
      count += w;
    }
  }

  return [ctr, count];
};