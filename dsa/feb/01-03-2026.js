//  linked list


// 234. Palindrome Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) {
    return true;
  }

  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow.next = reverseList(slow.next);

  slow = slow.next;

  while (slow) {
    if (head.val !== slow.val) {
      return false;
    }
    head = head.next;
    slow = slow.next;
  }
  return true;
};

function reverseList(head) {
  let pre = null;
  let next = null;

  while (head) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
}

// With optimization
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let str = '', revStr = '';

  while (head !== null) {
    str += head.val;
    revStr = head.val + revStr;
    head = head.next;
  }
  return str === revStr;
};


// 705. Design HashSet
var MyHashSet = function () {
  this.data = new Array(1000001);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  this.data[key] = true;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  this.data[key] = false;
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return !!this.data[key];
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */