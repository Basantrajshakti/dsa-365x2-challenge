// Arrays

// 169. Majority Element
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var majorityElement = function (nums) {
//   let map = {};

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (num in map) {
//       map[num] += 1;
//     } else {
//       map[num] = 1;
//     }
//   }

//   let majority = 0;
//   let maxCount = 0;

//   for (const key in map) {
//     if (map[key] > maxCount) {
//       majority = key;
//       maxCount = map[key];
//     }
//   }

//   return +majority;
// };

// With optimizations
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0, maj = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      maj = nums[i];
    }
    if (maj === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return maj;
};


// 217. Contains Duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      return true;
    } else {
      map[nums[i]] = true;
    }
  }

  return false;
};