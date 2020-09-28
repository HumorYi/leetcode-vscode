/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * 迭代，挨个遍历
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 * 问题：超出时间限制
 * @param {number} n
 * @return {number}
 */
/* var guessNumber = function (n) {
  for (let i = 1; i <= n; i++) {
    if (guess(i) === 0) {
      return i
    }
  }
} */

/**
 * 建议使用：迭代，二分遍历
 * 时间复杂度：O(logN)
 * 空间复杂度：O(1)
 * 解决：超出时间限制
 * @param {number} n
 * @return {number}
 */
/* var guessNumber = function (n) {
  let low = 1
  let high = n
  let mid = 0

  while (low <= high) {
    mid = Math.floor((low + high) / 2)

    switch (guess(mid)) {
      case 0:
        return mid
      case 1:
        low = mid + 1
        break
      case -1:
        high = mid - 1
        break
    }
  }
} */

/**
 * 递归，二分遍历
 * 时间复杂度：O(logN)
 * 空间复杂度：O(logN) => 在栈里变量是存储起来的没有释放的（看递归堆栈有多少层），变量是线性增长的
 * 解决：超出时间限制
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n, low = 1) {
  if (low > n) {
    return
  }

  const mid = Math.floor((low + n) / 2)

  switch (guess(mid)) {
    case 0:
      return mid
    case 1:
      return guessNumber(n, mid + 1)
    case -1:
      return guessNumber(mid - 1, low)
  }
}
// @lc code=end
