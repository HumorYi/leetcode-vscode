/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 基于原链表操作
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
/* function removeElements(head, val) {
  if (head === null) {
    return null
  }

  let curr = head
  let prev = head

  while (curr) {
    if (curr.val === val) {
      if (curr === head) {
        head = curr.next
      } else {
        prev.next = curr.next
      }
    } else {
      prev = curr
    }

    curr = curr.next
  }

  return head
} */

/**
 * 使用哨兵
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 */
function removeElements(head, val) {
  if (head === null) {
    return null
  }

  const sentinel = new ListNode(0, head)
  let curr = sentinel

  while (curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }

  return sentinel.next
}
// @lc code=end
