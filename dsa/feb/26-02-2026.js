// Linked list


// 21. Merge Two Sorted Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummyNode = new ListNode(-1);
  let temp = dummyNode;

  let curr1 = list1, curr2 = list2;

  while (curr1 !== null && curr2 !== null) {
    if (curr1.val < curr2.val) {
      temp.next = curr1;
      curr1 = curr1.next;
    } else {
      temp.next = curr2;
      curr2 = curr2.next;
    }
    temp = temp.next;
  }

  // Attach the remaining nodes
  temp.next = curr1 !== null ? curr1 : curr2;

  return dummyNode.next;
};


// 83. Remove Duplicates from Sorted List
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
var deleteDuplicates = function (head) {
  let temp = head;
  while (temp != null && temp.next != null) {
    if (temp.val == temp.next.val) temp.next = temp.next.next;
    else temp = temp.next
  }
  return head;
};