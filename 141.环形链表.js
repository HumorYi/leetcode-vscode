/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * 简单粗暴，但是隐藏漏洞就是链表数量问题
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 * @param {ListNode} head
 * @return {boolean}
 */
/* var hasCycle = function (head) {
  let count = 0

  while (head) {
    if (count > 10000) {
      return true
    }

    count++
    head = head.next
  }

  return false
} */

/**
 * 使用 cache 缓存已遍历的 节点，如果有找到，则证明是环
 * 时间复杂度：O(N)
 * 空间复杂度：O(N)
 * @param {ListNode} head
 * @return {boolean}
 */
/* var hasCycle = function (head) {
  const cache = new Set()

  while (head) {
    if (cache.has(head)) {
      return true
    }

    cache.add(head)
    head = head.next
  }

  return false
} */

/**
 * 快慢指针，快指针跑两步，慢指针跑一步，如果是环，快指针总会追上慢指针的，类似操场跑步，跑得快的人多跑几圈总会追上跑得慢的
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let faster = head
  let slower = head

  while (faster && faster.next) {
    faster = faster.next.next
    slower = slower.next

    if (faster === slower) {
      return true
    }
  }

  return false
}
// @lc code=end
