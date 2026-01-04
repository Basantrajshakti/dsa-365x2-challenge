// Array

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