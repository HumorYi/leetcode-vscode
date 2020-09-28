/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * 递归
 * 时间复杂度：O(N)
 * 空间复杂度：O(N)
 * @param {number} N
 * @return {number}
 */
/* var fib = function (N) {
  if (N === 1 || N === 0) {
    return N
  }

  return fib(N - 1) + fib(N - 2)
} */

/**
 * 递推 + cache
 * 时间复杂度：O(N)
 * 空间复杂度：O(N)
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  if (N === 1 || N === 0) {
    return N
  }

  const cache = [0, 1]

  for (let i = 2; i <= N; i++) {
    cache[i] = cache[i - 1] + cache[i - 2]
  }

  return cache[N]
}
// @lc code=end
