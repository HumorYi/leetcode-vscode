/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
/* function isValidBST(root, lower = -Infinity, upper = Infinity) {
  // 空树
  if (root === null) {
    return true
  }

  // 左子树大于根节点值，右子树小于根节点值
  if (root.val <= lower || root.val >= upper) {
    return false
  }

  return isValidBST(root.left, lower, root.val) && isValidBST(root.right, root.val, upper)
} */

/**
 * 迭代：中序遍历
 * 时间复杂度：O(N)
 * 空间复杂度：O(N)
 */
function isValidBST(root) {
  // 空树
  if (root === null) {
    return true
  }

  // 空根节点
  if (root.left === null && root.right === null) {
    return true
  }

  let curr = root
  let lastVal = -Infinity
  const stack = []

  while (curr || stack.length > 0) {
    // 不是二叉树
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }

    curr = stack.pop()

    if (curr.val <= lastVal) {
      return false
    }

    lastVal = curr.val
    curr = curr.right
  }

  return true
}
// @lc code=end
