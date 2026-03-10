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