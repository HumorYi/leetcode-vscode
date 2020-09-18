/*
 * @lc app=leetcode.cn id=71 lang=typescript
 *
 * [71] 简化路径
 */

// @lc code=start
function simplifyPath(path: string): string {
  const stack: string[] = []

  path
    .replace('/{2,}', '/')
    .split('/')
    .forEach((item: string) => {
      if (item === '..') {
        stack.pop()
      } else if (item && item !== '.') {
        stack.push(item)
      }
    })

  return '/' + stack.join('/')
}
// @lc code=end
