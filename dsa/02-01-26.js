// Arrays

// 26. Remove Duplicates from Sorted Array
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function (nums) {
//   const numsUnique = Array.from(new Set(nums));

//   for (let i = 0; i < numsUnique.length; i++) {
//     nums[i] = numsUnique[i];
//   }
//   return numsUnique.length;
// };

// With better optimizations:
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 1;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i - 1] !== nums[j]) {
      nums[i++] = nums[j];
    }
  }
  return i;
};