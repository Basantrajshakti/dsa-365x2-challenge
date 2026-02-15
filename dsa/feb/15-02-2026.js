// Sorting

// 905. Sort Array By Parity
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const len = nums.length;
  if (len === 1) return nums;

  let i = 0; j = len;

  while (i < j) {
    if (nums[i] % 2 === 0) {
      i++;
    } else if (nums[j] % 2 === 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    } else {
      j--;
    }
  }
  return nums;
};

// With optimizations
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const len = nums.length;
  if (len === 1) return nums;

  let i = 0; j = len - 1;

  while (i < j) {
    if (nums[i] % 2 === 0) {
      i++;
    } else {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j--;
    }
  }
  return nums;
};


// 922. Sort Array By Parity II
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const evens = [], odds = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evens.push(nums[i]);
    } else {
      odds.push(nums[i]);
    }
  }
  let even = 0, odd = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      nums[i] = evens[even++];
    } else {
      nums[i] = odds[odd++];
    }
  }
  return nums;
};

// With optimizations
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const n = nums.length;
  let even = 0, odd = 1;

  while (even < n && odd < n) {
    if (nums[even] % 2 === 0) even += 2;
    else if (nums[odd] % 2 !== 0) odd += 2;
    else {
      const temp = nums[even];
      nums[even] = nums[odd];
      nums[odd] = temp;
      even += 2;
      odd += 2;
    }
  }

  return nums;
};