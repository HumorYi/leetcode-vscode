/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * 思路：二叉搜索树可通过节点值大小来判断
 *  1、如果 树节点值 位于 p 和 q 两节点值中间或与某个节点相等，则树节点就是 p 和 q 的最近公共祖先节点
 *  2、否则如果树节点值 大于 两节点值，则两节点都位于树节点的右子树上
 *  3、否则如果树节点值 小于 两节点值，则两节点都位于树节点的左子树上
 */

/**
 * 递归
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
/* var lowestCommonAncestor = function (root, p, q) {
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q)
  }

  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  }

  return root
} */

/**
 * 迭代
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (p.val > root.val && q.val > root.val) {
      root = root.right
      continue
    }

    if (p.val < root.val && q.val < root.val) {
      root = root.left
      continue
    }

    return root
  }
}
// @lc code=end
