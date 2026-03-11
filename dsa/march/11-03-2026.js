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