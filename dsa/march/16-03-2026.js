// Arrays

// 908. Smallest Range I
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
  let min = Math.min(...nums);
  let max = Math.max(...nums);

  let diff = max - min - 2 * k;

  return diff > 0 ? diff : 0;
};


// 914. X of a Kind in a Deck of Cards
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  var count = {};
  deck.map((x) => (count[x] ? (count[x] += 1) : (count[x] = 1)));

  var arr = Object.values(count);
  var num = arr[0];

  for (const i of arr) {
    num = gcd(num, i);
    if (num < 2) {
      return false;
    }
  }
  return num > 1;
};

var gcd = function (a, b) {
  return a == 0 ? b : gcd(b % a, a);
};