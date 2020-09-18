/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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
/* function maxDepth(root: TreeNode | null): number {
  // 空树
  if (root === null) {
    return 0
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
} */

/**
 * 递归
 * 时间复杂度：O(n)
 * 空间复杂度：O(2n)
 */
function maxDepth(root: TreeNode | null): number {
  // 空树
  if (root === null) {
    return 0
  }

  // 根节点
  if (root.left === null && root.right === null) {
    return 1
  }

  const stack: TreeNode[] = [root]
  let stackLen = stack.length
  let depth = 1

  while (stackLen > 0) {
    // 将当前栈左右子树出栈，如果有子树，则入栈
    for (let i = 0; i < stackLen; i++) {
      const curr = stack.shift() as TreeNode

      curr.left && stack.push(curr.left)
      curr.right && stack.push(curr.right)
    }

    stackLen = stack.length

    // 如果栈内还有树，则证明当前节点有子树
    if (stackLen > 0) {
      depth++
    }
  }

  return depth
}
// @lc code=end
