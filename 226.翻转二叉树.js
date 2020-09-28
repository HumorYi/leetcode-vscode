/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归，将右树挨个转换成左树，将左树挨个转换成右树
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) {
    return root
  }

  ;[root.left, root.right] = [invertTree(root.right), invertTree(root.left)]

  return root
}
// @lc code=end
