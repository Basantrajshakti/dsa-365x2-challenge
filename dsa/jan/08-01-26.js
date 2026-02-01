// Arrays

// // 219. Contains Duplicate II
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {boolean}
//  */
// var containsNearbyDuplicate = function (nums, k) {
//   const map = {};

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (num in map && Math.abs(map[num] - i) <= k) {
//       return true;
//     }

//     map[num] = i;
//   }

//   return false;
// };

// With optimizations: Copied
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const window = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (window.has(nums[i])) {
      return true;
    }
    window.add(nums[i]);
    if (window.size > k) {
      window.delete(nums[i - k]);
    }
  }

  return false;
};


// 228. Summary Ranges
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return [];

  let summary = [];
  let flag = nums[0];
  let ctr = flag;

  for (let i = 1; i < nums.length; i++) {
    if (flag + 1 === nums[i]) {
      flag = nums[i];
    } else {
      summary.push(ctr === flag ? `${ctr}` : `${ctr}->${flag}`)
      ctr = flag = nums[i];
    }
  }

  summary.push(ctr === flag ? `${ctr}` : `${ctr}->${flag}`)

  return summary;
};