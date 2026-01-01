// Arrays

// 1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   const numsMap = {};

//   for (let i = 0; i < nums.length; i++) {
//     numsMap[nums[i]] = i;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i];

//     // second condition is for: we can't use same element twice
//     if (diff in numsMap && i !== numsMap[diff])
//       return [i, numsMap[diff]];
//   }
// };

// With better optimizations:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (diff in numsMap) {
      return [numsMap[diff], i];
    }

    numsMap[nums[i]] = i;
  }
};

// 14. Longest Common Prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';

  if (strs.length === 1) return strs[0];

  let commonPrefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < commonPrefix.length) {
      commonPrefix = commonPrefix.slice(0, strs[i].length);
    }

    for (let j = 0; j < strs[i].length; j++) {
      if (strs[i][j] !== commonPrefix[j]) {
        commonPrefix = commonPrefix.slice(0, j);
        break;
      }

      if (!commonPrefix[j]) break;
    }
  }

  return commonPrefix;
};