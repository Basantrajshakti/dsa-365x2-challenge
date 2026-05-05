// Daily challenge

// 61. Rotate List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head;

  let n = 1;
  let tail = head;

  while (tail.next) {
    tail = tail.next;
    n++;
  }

  tail.next = head;

  k = k % n;

  let steps = n - k - 1;
  let newTail = head;

  while (steps-- > 0) {
    newTail = newTail.next;
  }

  let newHead = newTail.next;

  newTail.next = null;

  return newHead;
};

// 496. Next Greater Element I
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let s = [],
    map = {};

  for (let i = 0; i < nums2.length; i++) {
    if (s[s.length - 1] < nums2[i]) {
      while (s[s.length - 1] < nums2[i]) map[s.pop()] = nums2[i];
      i--;
    } else s.push(nums2[i]);
  }

  while (s.length !== 0) map[s.pop()] = -1;

  for (let i = 0; i < nums1.length; i++) s.push(map[nums1[i]]);

  return s;
};
