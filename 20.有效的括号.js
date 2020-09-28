/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * 反向括弧匹配
 * 时间复杂度：O(N)
 * 空间复杂度：O(N)
 * @param {string} s
 * @return {boolean}
 */
/* var isValid = function (s) {
  const brackets = new Map()
  brackets.set(')', '(')
  brackets.set('}', '{')
  brackets.set(']', '[')

  const stack = []
  let stackLen = 0

  for (let i = 0, len = s.length; i < len; i++) {
    const item = s[i]

    if (stackLen > 0 && stack[stackLen - 1] === brackets.get(item)) {
      stackLen--
      stack.pop()
    } else {
      stackLen++
      stack.push(item)
    }
  }

  return stackLen === 0
} */

/**
 * 正向括弧匹配
 * 时间复杂度：O(N)
 * 空间复杂度：O(N)
 */
function isValid(s) {
  const brackets = new Map()
  brackets.set('(', ')')
  brackets.set('{', '}')
  brackets.set('[', ']')

  const stack = []

  for (let i = 0, len = s.length; i < len; i++) {
    const item = s[i]

    if (brackets.has(item)) {
      stack.push(item)
    } else if (item !== brackets.get(stack.pop())) {
      return false
    }
  }

  return stack.length === 0
}
// @lc code=end
