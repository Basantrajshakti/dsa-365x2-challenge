// Sorting

// 976. Largest Perimeter Triangle
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length - 2; i++) {
    // If the side of a triangle are a,b,c then a+b>c for the triangle to be formed.
    if (nums[i] < nums[i + 1] + nums[i + 2]) return nums[i] + nums[i + 1] + nums[i + 2];
  }

  return 0;
};


// 977. Squares of a Sorted Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }

  nums.sort((a, b) => a - b);

  return nums;
};

// With optimizations
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const len = nums.length;
  const arr = new Array(len);
  let l = 0, r = len - 1, i = len - 1;

  while (l <= r) {
    if (Math.abs(nums[l]) > Math.abs(nums[r])) {
      arr[i--] = nums[l] * nums[l];
      l++;
    } else {
      arr[i--] = nums[r] * nums[r];
      r--;
    }
  }

  return arr;
};