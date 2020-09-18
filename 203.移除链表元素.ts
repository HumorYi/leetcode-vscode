/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
 */

// @lc code=start

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

//  基于原链表操作
/* function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (head === null) {
    return null
  }

  let curr: ListNode | null = head
  let prev: ListNode | null = head

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

// 使用哨兵
function removeElements(head: ListNode | null, val: number): ListNode | null {
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
