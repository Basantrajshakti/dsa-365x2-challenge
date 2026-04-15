// Daily challenge

// 2515. Shortest Distance to Target String in a Circular Array
/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function (words, target, startIndex) {
  let n = words.length;
  let ans = Infinity;

  for (let i = 0; i < n; i++) {
    if (words[i] === target) {
      let clockwise = (i - startIndex + n) % n;
      let anticlockwise = (startIndex - i + n) % n;
      ans = Math.min(ans, Math.min(clockwise, anticlockwise));
    }
  }

  return ans === Infinity ? -1 : ans;
};

// 108. Convert Sorted Array to Binary Search Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length <= 1) return new TreeNode(nums[0]);

  function recursiveTreeFormer(low, high) {
    if (low > high) return null;

    const mid = parseInt(low + (high - low) / 2);
    const node = new TreeNode(nums[mid]);

    node.left = recursiveTreeFormer(low, mid - 1);
    node.right = recursiveTreeFormer(mid + 1, high);

    return node;
  }

  return recursiveTreeFormer(0, nums.length - 1);
};
