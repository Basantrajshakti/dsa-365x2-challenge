// Daily challenge

// 2553. Separate the Digits in an Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  let result = [];

  for (let num of nums) {
    let str = num.toString();

    for (let ch of str) {
      result.push(Number(ch));
    }
  }

  return result;
};

// 561. Array Partition
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }

  return sum;
};
