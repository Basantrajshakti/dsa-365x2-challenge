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


// 303. Range Sum Query - Immutable
// /**
//  * @param {number[]} nums
//  */
// var NumArray = function (nums) {
//   this.nums = nums;
// };

// /**
//  * @param {number} left
//  * @param {number} right
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function (left, right) {
//   let sum = 0;

//   for (let i = left; i <= right; i++) {
//     sum += this.nums[i];
//   }

//   return sum;
// };


// With optimizations
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  // build 1-based prefix sum
  this.prefix = new Array(nums.length);
  this.prefix[0] = 0;

  for (let i = 0; i < nums.length; i++) {
    this.prefix[i + 1] = this.prefix[i] + nums[i];
  }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  // sum of nums[left..right] = prefix[right + 1] - prefix[left]
  return this.prefix[right + 1] - this.prefix[left];
};