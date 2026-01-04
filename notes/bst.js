// What’s a Binary Search Tree(BST) ?
//   A Binary Search Tree is a special kind of binary tree where:

// All nodes in the left subtree are smaller than the root.
// All nodes in the right subtree are larger than the root.
//   Example:

//      4
//     / \
//    2   6
//   / \ / \
//  1  3 5  7

// A height - balanced BST means that the depth of the two subtrees of every node never differs by more than 1. This keeps operations like search, insert, and delete efficient(O(log n)).

// ✨ The Key Idea
// To build a balanced BST from a sorted array, the best approach is:

// Pick the middle element as the root.This way, the left and right sides of the tree will be roughly balanced.
// Recursively repeat this process for the left half and the right half of the array.
// This strategy guarantees a balanced binary search tree.