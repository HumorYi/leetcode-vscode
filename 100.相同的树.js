/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // 如果两棵树都是空树，则证明是相同树
  if (p === null && q === null) {
    return true
  }

  // 如果有一个节点是空树，则证明不是相同树
  if (p === null || q === null) {
    return false
  }

  // 如果两个节点的值不相等，则证明不是相同树
  if (p.val !== q.val) {
    return false
  }

  // 递归比较两棵树的左右节点值是否相等
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
// @lc code=end
