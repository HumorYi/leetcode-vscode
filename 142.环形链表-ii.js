slower
/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * 使用 cache 缓存已遍历的 节点，如果有找到，则证明是环
 * 时间复杂度：O(N)
 * 空间复杂度：O(N)
 * @param {ListNode} head
 * @return {ListNode}
 */
/* var detectCycle = function (head) {
  const cache = new Set()

  while (head) {
    if (cache.has(head)) {
      return head
    }

    cache.add(head)
    head = head.next
  }

  return null
} */

/**
 * 成环：快慢指针，快指针跑两步，慢指针跑一步，如果是环，快指针总会追上慢指针的，类似操场跑步，跑得快的人多跑几圈总会追上跑得慢的
 * 入环第一个节点：
 *  假设：从头节点开始，走到入环第一个节点的长度为 a，相遇点为 B，a 到 B 之间的距离为 b，B 到 a 之间的距离为 c
 *    根据上面快指针跑两步，慢指针跑一步，快慢指针在 B 点相遇，则快指针跑的路程是慢指针的两倍
 *    路程计算：2(a+b) = a + b + c + b
 *    简化：a = c
 *
 *  开始节点从头开始一步一步走，走完 a 路程，慢指针从 B 点开始一步一步走，走完 c 路程，
 *  开始节点 与 慢指针 相遇时即为入环的第一个节点
 *
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let faster = head
  let slower = head
  let start = head

  while (faster && faster.next) {
    faster = faster.next.next
    slower = slower.next

    if (faster === slower) {
      while (slower && start) {
        if (slower === start) {
          return start
        }

        slower = slower.next
        start = start.next
      }

      return null
    }
  }

  return null
}
// @lc code=end
