/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start

// 方向括弧匹配
/* function isValid(s: string): boolean {
  const brackets = new Map()
  brackets.set(')', '(')
  brackets.set('}', '{')
  brackets.set(']', '[')

  const stack: string[] = []
  let stackLen = 0

  for (let i = 0, len = s.length; i < len; i++) {
    const item = s[i]
    const left = brackets.get(item) as string

    stackLen = stack.length

    if (stackLen > 0 && stack[stackLen - 1] === left) {
      stack.pop()
    } else {
      stack.push(item)
    }
  }

  return stackLen === 0
} */

// 正向括弧匹配
function isValid(s: string): boolean {
  const brackets = new Map()
  brackets.set('(', ')')
  brackets.set('{', '}')
  brackets.set('[', ']')

  const stack: string[] = []

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
