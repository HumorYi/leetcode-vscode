/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * 时间复杂度：O(N)
 * 空间复杂度：O(N)
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
  const stack = []

  path
    .replace('/{2,}', '/')
    .split('/')
    .forEach(item => {
      if (item === '..') {
        stack.pop()
      } else if (item && item !== '.') {
        stack.push(item)
      }
    })

  return '/' + stack.join('/')
}
// @lc code=end
