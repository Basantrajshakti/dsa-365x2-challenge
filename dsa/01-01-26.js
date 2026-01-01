// Arrays

// 1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    numsMap[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    // second condition is for: we can't use same element twice
    if (diff in numsMap && i !== numsMap[diff])
      return [i, numsMap[diff]];
  }
};