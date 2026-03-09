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