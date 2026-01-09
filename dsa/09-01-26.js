// Arrays

// 283. Move Zeroes
// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function (nums) {
//   if (nums.length === 0) return num;

//   for (let i = 0, j = 0; i < nums.length; i++) {
//     if (nums[i] !== 0 && nums[j] === 0) {
//       nums[j++] = nums[i];
//       nums[i] = 0;
//     }

//     if (nums[j] !== 0) j++;
//   }

//   return nums;
// };


// With optimizations
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length === 0) return nums;

  let ctr = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[i];
      nums[i] = nums[ctr];
      nums[ctr++] = temp;
    }
  }
};