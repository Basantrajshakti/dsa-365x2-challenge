// Maths

// 202. Happy Number
/**
 * @param {number} n
 * @return {boolean}
 */
const squares = {
  0: 0,
  1: 1,
  2: 4,
  3: 9,
  4: 16,
  5: 25,
  6: 36,
  7: 49,
  8: 64,
  9: 81
}

var isHappy = function (n) {
  let sum = 0;
  let digit = n;
  let map = {}

  while (sum !== 1) {
    sum = 0;
    while (digit > 0) {
      sum += squares[digit % 10];
      digit = Math.floor(digit / 10);
    }

    if (map[sum]) return false;

    map[sum] = true;
    digit = sum;
  }

  return true;
};

// With optimizations
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let sum = 0;
  let digit = n;
  let set = new Set();

  while (sum !== 1) {
    sum = 0;
    while (digit > 0) {
      const num = digit % 10;
      sum += num * num;
      digit = Math.floor(digit / 10);
    }

    if (set.has(sum)) return false;

    set.add(sum);
    digit = sum;
  }

  return true;
};