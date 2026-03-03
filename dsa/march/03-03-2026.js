// Linked list:


// 1290. Convert Binary Number in a Linked List to Integer
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let result = 0;
  while (head !== null) {
    result = result * 2 + head.val;
    head = head.next;
  }
  return result;
};


// 3507. Minimum Pair Removal to Sort Array I
/**
 * @param {number[]} nums
 * @return {number}
 */
var isSorted = function (nums, n) {
  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) return false;
  }
  return true;
}
var minimumPairRemoval = function (nums) {
  let ans = 0, n = nums.length;
  while (!isSorted(nums, n)) {
    ans += 1;
    let min_sum = Infinity, pos = -1;
    for (let i = 1; i < n; i++) {
      let sum = nums[i - 1] + nums[i];
      if (sum < min_sum) {
        min_sum = sum;
        pos = i;
      }
    }
    nums[pos - 1] = min_sum;
    for (let i = pos; i < n - 1; i++) nums[i] = nums[i + 1];
    n--;
  }
  return ans;
};

// With optimizations
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums) {
  let count = 0;
  while (nums.length > 1) {
    let ascending = true;
    let minSum = Infinity;
    let targetIdx = -1;

    for (let i = 0; i < nums.length - 1; i++) {
      let sum = nums[i] + nums[i + 1];
      if (nums[i] > nums[i + 1]) {
        ascending = false;
      }
      if (sum < minSum) {
        minSum = sum;
        targetIdx = i;
      }
    }
    if (ascending) {
      break;
    }

    count++;
    nums[targetIdx] = minSum;
    nums.splice(targetIdx + 1, 1);
  }
  return count;
};


// With optimizations
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums) {
  let count = 0;
  while (nums.length > 1) {
    let ascending = true;
    let minSum = Infinity;
    let targetIdx = -1;

    for (let i = 0; i < nums.length - 1; i++) {
      let sum = nums[i] + nums[i + 1];
      if (nums[i] > nums[i + 1]) {
        ascending = false;
      }
      if (sum < minSum) {
        minSum = sum;
        targetIdx = i;
      }
    }
    if (ascending) {
      break;
    }

    count++;
    nums[targetIdx] = minSum;
    nums.splice(targetIdx + 1, 1);
  }
  return count;
};