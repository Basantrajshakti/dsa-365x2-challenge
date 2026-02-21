// Prefix sum

// 2389. Longest Subsequence With Limited Sum
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  nums.sort((a, b) => a - b);
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] + (nums[i - 1] || 0);
  }

  for (let i = 0; i < queries.length; i++) {
    let j = 0;
    while (nums[j] <= queries[i] && j < nums.length) j++;

    if (j > nums.length) ans.push(0);
    ans.push(j);
  }

  return ans;
};

// With optimizations
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  nums.sort((a, b) => a - b);
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] + (nums[i - 1] || 0);
  }

  for (let i = 0; i < queries.length; i++) {
    let value = binarySearch(nums, queries[i]);
    ans.push(value);
  }
  return ans;
};

var binarySearch = function (nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] <= target) left = mid + 1;
    else right = mid;
  }

  return left;
}


// 2485. Find the Pivot Integer
/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  if (n == 1) return 1;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  let newSum = 1;
  for (let i = 2; i <= n; i++) {
    if (sum - (newSum + i) == newSum) {
      return i
    };
    newSum += i
  }

  return -1;
};

// With optimizations
/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {

  let totSum = n * (n + 1) / 2;
  let left = 1;
  let right = n;

  while (left <= right) {

    let mid = Math.floor((left + right) / 2);
    let leftSum = mid * (mid + 1) / 2;
    let rightSum = totSum - leftSum + mid;

    if (leftSum === rightSum) {
      return mid;
    } else if (leftSum < rightSum) {
      left = mid + 1;
    } else if (leftSum > rightSum) {
      right = mid - 1;
    }
  }

  return -1
};

// Better optimizations
/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  let sum = (n + 1) * n / 2;
  let pivot = Math.floor(Math.sqrt(sum));
  return pivot * pivot == sum ? pivot : -1;
};