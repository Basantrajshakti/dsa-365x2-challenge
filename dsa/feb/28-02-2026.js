// Linked list

// 203. Remove Linked List Elements
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  temp = new ListNode(0), curr = temp;
  temp.next = head;
  while (curr.next != null) {
    if (curr.next.val == val) curr.next = curr.next.next;
    else curr = curr.next;
  }
  return temp.next;
};

// With optimizations
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let prev = dummy;
  let cur = head;
  while (cur) {
    if (cur.val === val) {
      prev.next = cur.next;
      cur = cur.next;
    } else {
      prev = cur;
      cur = cur.next;
    }
  }
  return dummy.next;
};


// 206. Reverse Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
};