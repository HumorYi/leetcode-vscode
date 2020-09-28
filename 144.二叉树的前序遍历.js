/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// 前序遍历：自 => left => right

/**
 * 递归
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 * @param {TreeNode} root
 * @return {number[]}
 */
/* var preorderTraversal = function (root, arr = []) {
  if (root) {
    arr.push(root.val)

    preorderTraversal(root.left, arr)
    preorderTraversal(root.right, arr)
  }

  return arr
} */

/**
 * 迭代：先遍历自己，再遍历左节点，最后再遍历右节点
 * 时间复杂度：O(N)
 * 空间复杂度：O(2n+1)
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  // 存储所有节点值
  const result = []

  if (!root) {
    return result
  }

  // 存储遍历的所有节点
  const stack = []
  let curr = root

  // 如果有节点，证明左节点还没有遍历完，否则如果没有节点，但是节点栈中还有数据，证明右节点还没遍历完
  while (curr || stack.length > 0) {
    // 遍历左节点
    while (curr) {
      // 存储节点值
      result.push(curr.val)
      // 节点入栈
      stack.push(curr)
      curr = curr.left
    }

    // 节点出栈，遍历右节点
    curr = stack.pop().right
  }

  return result
}
// @lc code=end
