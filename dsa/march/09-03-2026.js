// Arrays

// 697. Degree of an Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let map = new Map(), degree = new Set();
  let maxFreq = 0, minLength = 50001;

  for (const n of nums) {
    const count = (map.get(n) || 0) + 1;
    map.set(n, count);

    if (count > maxFreq) maxFreq = count;
  }

  for (const [num, freq] of map.entries()) {
    if (freq >= maxFreq) {
      maxFreq = freq;
      degree.add(num);
    }
  }

  for (const n of degree) {
    let len = nums.lastIndexOf(n) - nums.indexOf(n) + 1;

    if (len < minLength) {
      minLength = len;
    }
  }

  return minLength;
};

// With optimizations
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  const count = {};
  const first = {};
  const last = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (first[num] === undefined) {
      first[num] = i;
    }

    last[num] = i;
    count[num] = (count[num] || 0) + 1;
  }

  let degree = Math.max(...Object.values(count));
  let minLen = nums.length;

  for (let num in count) {
    if (count[num] === degree) {
      minLen = Math.min(minLen, last[num] - first[num] + 1);
    }
  }

  return minLen;
};


// 717. 1-bit and 2-bit Characters
/**
 * @param {number[]} bits
 * @return {boolean}
 */

var isOneBitCharacter = function (bits) {
  const len = bits.length;

  for (let i = 0; i < len; i++) {
    if (bits[i] == 0 && i === len - 1) return true;

    if (bits[i] == 1) i++;
  }

  return false;
};
