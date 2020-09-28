/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start

// 题解 https://leetcode-cn.com/problems/powx-n/solution/dai-shu-xue-gong-shi-qing-xi-hao-dong-di-gui-he-di/

/**
 * 迭代
 * 时间复杂度：O(logN)
 * 空间复杂度：O(1)
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) {
    return 1
  }

  if (n === 1) {
    return x
  }

  // 幂负数，数值 => 分数，幂 => 正数
  if (n < 0) {
    return (1 / x) * myPow(1 / x, -(n + 1))
  }

  let res = 1
  while (n > 1) {
    // 循环自乘，O(N)
    // res *= x
    // n--

    // 二分自乘，O(logN)
    // 奇数
    if (n & 1) {
      res *= x
      n--
    }

    // 偶数
    x *= x
    n = n >> 1
  }

  // n === 1
  return res * x
}

/**
 * 递归
 * 时间复杂度：O(logN)
 * 空间复杂度：O(N)
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
/* var myPow = function (x, n) {
  if (n === 0) {
    return 1
  }

  if (n === 1) {
    return x
  }

  // 幂负数，数值 => 分数，幂 => 正数
  if (n < 0) {
    return (1 / x) * myPow(1 / x, -(n + 1))
  }

  return n & 1 ? x * myPow(x, n - 1) : myPow(x * x, n >> 1)
} */
// @lc code=end
