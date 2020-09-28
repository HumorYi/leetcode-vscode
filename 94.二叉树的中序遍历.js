/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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

// 中序遍历：left => 自 => right

/**
 * 递归
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 * @param {TreeNode} root
 * @return {number[]}
 */
/* var inorderTraversal = function (root, arr = []) {
  if (root) {
    inorderTraversal(root.left, arr)

    arr.push(root.val)

    inorderTraversal(root.right, arr)
  }

  return arr
} */

/**
 * 迭代：先遍历左节点，再遍历自己，最后再遍历右节点
 * 时间复杂度：O(N)
 * 空间复杂度：O(2n+1)
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // 存储所有节点值
  const result = []

  if (!root) {
    return result
  }

  // 存储遍历的所有节点
  const stack = []
  let curr = root

  // 如果有节点，证明右节点还没有遍历完，否则如果没有节点，但是节点栈中还有数据，证明左节点还没遍历完
  while (curr || stack.length > 0) {
    // 遍历左节点
    while (curr) {
      // 节点入栈
      stack.push(curr)
      curr = curr.left
    }

    // 节点出栈
    curr = stack.pop()
    // 存储节点值
    result.push(curr.val)
    // 遍历右节点
    curr = curr.right
  }

  return result
}
// @lc code=end
