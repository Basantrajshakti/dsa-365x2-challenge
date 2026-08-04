// 3731. Find Missing Elements
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
  nums.sort((a, b) => a - b);

  const values = new Set(nums);
  const res = [];

  for (let x = nums[0]; x < nums[nums.length - 1]; x++) {
    if (!values.has(x)) {
      res.push(x);
    }
  }

  return res;
};

// Optimized
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
  let largest = nums[0];
  let smallest = nums[0];

  for (let i = 1; i < nums.length; i++) {
    largest = Math.max(nums[i], largest);
    smallest = Math.min(nums[i], smallest);
  }

  let visited = [];
  for (let ele of nums) {
    visited[ele] = 1;
  }

  let result = [];
  for (let i = smallest; i <= largest; i++) {
    if (!visited[i]) {
      result.push(i);
    }
  }

  return result;
};
