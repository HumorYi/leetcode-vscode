/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * 迭代
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  if (head === null) {
    return null
  }

  let curr = head
  let prev = null

  while (curr) {
    // const next = curr.next
    // curr.next = prev
    // prev = curr
    // curr = next
    ;[curr.next, prev, curr] = [prev, curr, curr.next]
  }

  return prev
}

/**
 * 递归
 * 时间复杂度：O(N)
 * 空间复杂度：O(N)
 * @param {ListNode} head
 * @return {ListNode}
 */
/* function reverseList(head, prev = null) {
  if (head === null) {
    return prev || null
  }

  ;[head.next, prev, head] = [prev, head, head.next]

  return reverseList(head, prev)
} */
// @lc code=end
