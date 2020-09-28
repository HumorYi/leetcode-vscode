/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * 递归
 * 时间复杂度：O(N)
 * 空间复杂度：O(N)
 * @param {TreeNode} root
 * @return {number}
 */
/* function maxDepth(root) {
  // 空树
  if (root === null) {
    return 0
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
} */

/**
 * 迭代
 * 时间复杂度：O(N)
 * 空间复杂度：O(N)
 */
function maxDepth(root) {
  // 空树
  if (root === null) {
    return 0
  }

  // 根节点
  if (root.left === null && root.right === null) {
    return 1
  }

  const stack = [root]
  let stackLen = stack.length
  let depth = 1
  let curr
  let i

  while (stackLen > 0) {
    // 将当前栈左右子树出栈，如果有子树，则入栈
    for (i = 0; i < stackLen; i++) {
      curr = stack.shift()

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
