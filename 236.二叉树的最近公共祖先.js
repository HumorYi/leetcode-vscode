/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * 思路：
 *  1、如果 左子树没有 q 或者 q，那就去 右子树找
 *  2、如果两边都找到了，root 就是最近公共祖先节点
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
  if (root === null || root === p || root === q) {
    return root
  }

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  return left === null ? right : right === null ? left : root
} */

/**
 * 迭代: p 和 q 节点 从当前节点往根节点找，路线中最近一个相同节点就是 最近公共祖先节点
 *  1、从上往下找，记录找到 p 和 q 节点的路线
 *  2、递归遍历 p 节点，将 p 节点 到 根节点的路线 记录下来 ancestors
 *  3、递归遍历 ancestors 是否有 q 节点，没有就往 q 节点的父节点找，最终 q 节点就是 最近公共祖先节点
 * 时间复杂度：O(N)
 * 空间复杂度：O(1 || 3n)
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  /* 父子节点提供最快查找速率 S */
  if (!root) {
    return null
  }

  if ((root.left === p && root.right === q) || (root.left === q && root.right === p)) {
    return root
  }

  if (p.left === q || p.right === q) {
    return p
  }

  if (q.left === p || q.right === p) {
    return q
  }
  /* 父子节点提供最快查找速率 E */

  const queue = []
  const parent = new Map()
  const ancestors = new Set()

  parent.set(root, null)
  queue.push(root)

  while (!parent.has(p) || !parent.has(q)) {
    const node = queue.pop()

    if (node.left && !parent.has(node.left)) {
      parent.set(node.left, node)
      queue.push(node.left)
    }

    if (node.right && !parent.has(node.right)) {
      parent.set(node.right, node)
      queue.push(node.right)
    }
  }

  while (p) {
    ancestors.add(p)
    p = parent.get(p)
  }

  while (!ancestors.has(q)) {
    q = parent.get(q)
  }

  return q
}
// @lc code=end
