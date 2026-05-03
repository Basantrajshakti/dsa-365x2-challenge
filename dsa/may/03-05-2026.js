// Daily challenege

// 796. Rotate String
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }
  return (s + s).includes(goal);
};

// 485. Max Consecutive Ones
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let ctr = 0,
    max = 0;

  for (let num of nums) {
    if (num === 1) {
      ctr++;
      max = Math.max(max, ctr);
    } else {
      ctr = 0;
    }
  }

  return max;
};
