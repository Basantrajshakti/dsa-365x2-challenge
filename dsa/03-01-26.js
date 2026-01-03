// Arrays

// 66. Plus One
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carryForward = 0;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      carryForward = 1;
      digits[i] = 0;
    } else {
      digits[i] += 1;
      carryForward = 0;
      return digits;
    }
  }

  return [1, ...digits];
};


// 35. Search Insert Position
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var searchInsert = function (nums, target) {
//   let low = 0;
//   let high = nums.length - 1;

//   while (1) {
//     if (low > high) return low;
//     let mid = parseInt((low + high) / 2);

//     if (nums[mid] === target) return mid;
//     else if (nums[mid] > target) {
//       high = mid - 1;
//     } else if (nums[mid] < target) {
//       low = mid + 1;
//     }
//   }
// };

// With optimizations
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (1) {
    let mid = parseInt(low + (high - low) / 2);
    const num = nums[mid];

    if (num === target) {
      return mid;
    }
    else if (num > target) {
      high = mid - 1;
    } else if (num < target) {
      low = mid + 1;
    }

    if (low > high) return low;
  }
};

// Biweekly Contest 173

// Q1.Reverse String Prefix 
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function (s, k) {
  if (k === 1) return s;

  if (s === '') return s;

  const str = s.split('');

  for (let i = 0, j = k - 1; i < k / 2; i++, j--) {
    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;
  }

  return str.join('');
};