// Arrays

// 744. Find Smallest Letter Greater Than Target
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let max = '~';

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] > target && letters[i] < max) {
      max = letters[i];
    }
  }
  return max === '~' ? letters[0] : max;
};

// With optimizations
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let n = letters.length;
  let low = 0, high = n - 1;
  let ans = letters[0];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (letters[mid] > target) {
      ans = letters[mid];
      high = mid - 1;
    }
    else {
      low = mid + 1;
    }
  }
  return ans;
};