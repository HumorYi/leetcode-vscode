/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
// 递归
/* function fib(N: number): number {
  if (N === 1 || N === 0) {
    return N
  }

  return fib(N - 1) + fib(N - 2)
} */

// 递推 + cache
function fib(N: number): number {
  if (N === 1 || N === 0) {
    return N
  }

  const cache: number[] = [0, 1]

  for (let i = 2; i <= N; i++) {
    cache[i] = cache[i - 1] + cache[i - 2]
  }

  return cache[N]
}
// @lc code=end
