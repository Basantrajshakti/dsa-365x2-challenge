// Daily challenge

// 2833. Furthest Point From Origin
/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves) {
  let left = 0,
    right = 0,
    blank = 0;

  for (let c of moves) {
    if (c === "L") left++;
    else if (c === "R") right++;
    else blank++;
  }

  let position = right - left;
  return Math.abs(position) + blank;
};

// 268. Missing Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const len = nums.length;
  let sum = (len * (len + 1)) / 2;

  for (let i = 0; i < len; i++) {
    sum -= nums[i];
  }

  return sum;
};
