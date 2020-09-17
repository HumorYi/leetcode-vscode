/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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

// 后序遍历：left => right => 自

/**
 * 递归
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * @param {TreeNode} root
 * @return {number[]}
 */
/* var postorderTraversal = function (root, arr = []) {
  if (root) {
    postorderTraversal(root.left, arr)
    postorderTraversal(root.right, arr)
    arr.push(root.val)
  }

  return arr
} */

/**
 * 迭代：先遍历左节点，再遍历右节点，最后再遍历自己
 * 时间复杂度：O(n)
 * 空间复杂度：O(2n+1)
 * @param {TreeNode} root
 * @return {number[]}
 */
/* var postorderTraversal = function (root) {
  let res = [];
  if(!root){
      return res;
  }

  // 存储所有节点值
  const result = []
  // 存储遍历的所有节点
  const stack = []
  let curr = root

  // 如果有节点，证明右节点还没有遍历完，否则如果没有节点，但是节点栈中还有数据，证明左节点还没遍历完
  while (curr || stack.length > 0) {
    // 存储节点值（头部插入）
    result.unshift(curr.val)

    curr.left && stack.push(curr.left)
    curr.right && stack.push(curr.right)

    curr = stack.pop()
  }

  return result
} */

/**
 * 迭代：先遍历左节点，再遍历右节点，最后再遍历自己
 * 时间复杂度：O(n)
 * 空间复杂度：O(2n+1)
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
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
      // 存储节点值（头部插入）
      result.unshift(curr.val)
      // 节点入栈
      stack.push(curr)
      curr = curr.right
    }

    // 节点出栈
    curr = stack.pop().left
  }

  return result
}
// @lc code=end
