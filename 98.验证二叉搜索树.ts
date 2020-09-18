/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 * 递归
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
function isValidBST(root: TreeNode | null, lower = -Infinity, upper = Infinity): boolean {
  // 空树
  if (root === null) {
    return true
  }

  // 左子树大于根节点值，右子树小于根节点值
  if (root.val <= lower || root.val >= upper) {
    return false
  }

  return isValidBST(root.left, lower, root.val) && isValidBST(root.right, root.val, upper)
}

/**
 * 迭代：中序遍历
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
/* function isValidBST(root: TreeNode | null): boolean {
  // 空树
  if (root === null) {
    return true
  }

  // 空根节点
  if (root.left === null && root.right === null) {
    return true
  }

  let curr: TreeNode | null = root
  let lastVal = -Infinity
  const stack: TreeNode[] = []

  while (curr || stack.length > 0) {
    // 不是二叉树
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }

    curr = stack.pop() as TreeNode

    if (curr.val <= lastVal) {
      return false
    }

    lastVal = curr.val
    curr = curr.right
  }

  return true
} */
// @lc code=end
