/**
 * 206. Reverse Linked List
 * https://leetcode.com/problems/reverse-linked-list/description/
 */

/*
* Problem example: 
* Input: [1,2,3,4,5]
* Output: [5,4,3,2,1]
*/

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
var reverseList = function(head) {
  let reversed = null
  let next = null  
  let curr = head
  while(curr) {
      next = curr.next
      curr.next = reversed

      reversed = curr
      curr = next
  }

  return reversed;
};
