/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * 首先是边界情况: 0、1的平方根分别是0、1
  剩下就是 x>=2 的情况：
    左右指针指向左右边界
    求出中位数 mid
    如果 mid 的平方正好等于 x，则返回 mid
    如果 mid 的平方小于 x，说明平方根落在 mid 和 right 之间，让 left=mid
    如果 mid 的平方大于 x，说明平方根落在 left 和 mid 之间，让 right=mid
    退出循环的条件是左右指针相邻了。它们俩中有一个是平方根。再判断一下就好。
 *
 * 迭代
 * 时间复杂度：O(logN)
 * 空间复杂度：O(1)
 * @param {number} x
 * @return {number}
 */
/* var mySqrt = function (x) {
  if (x < 2) {
    return x
  }

  let left = 1
  let right = x >> 1
  let mid
  let result

  while (left + 1 < right) {
    mid = (left + right) >> 1
    result = mid * mid

    if (result === x) {
      return mid
    }

    if (result < x) {
      left = mid
    } else {
      right = mid
    }
  }

  return right * right > x ? left : right
} */

/**
 * 首先是边界情况: 0、1的平方根分别是0、1
  剩下就是 x>=2 的情况：
    自增暴力推值
 *
 * 迭代
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 * @param {number} x
 * @return {number}
 */
/* var mySqrt = function (x) {
  if (x < 2) {
    return x
  }

  let re = 1
  while (!(re * re <= x && (re + 1) * (re + 1) > x)) {
    re++
  }

  return re
} */

/**
 * https://leetcode-cn.com/problems/sqrtx/solution/javascript-xde-ping-fang-gen-by-rhinoc/
 *
 * 首先是边界情况: 0、1的平方根分别是0、1
  剩下就是 x>=2 的情况：
    牛顿法： re_n+1 = re_n - f(re_n) / f'{re_n}
            f(re_n) = re^2 − x
            f'{re_n} = 2 * re
 *
 * 时间复杂度：O(不知道咋算)
 * 空间复杂度：O(1)
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) {
    return x
  }

  let re = 1
  while (!(re * re <= x && (re + 1) * (re + 1) > x)) {
    re = parseInt(re - (re * re - x) / (2 * re))
  }

  return re
}

/**
 * https://leetcode-cn.com/problems/sqrtx/solution/69-x-de-ping-fang-gen-by-alexer-660/
 *
 * 首先是边界情况: 0、1的平方根分别是0、1
  剩下就是 x>=2 的情况：
    牛顿迭代法：x= (x+tmp/x)/2
 *
 * 推荐
 * 时间复杂度：O(不知道咋算)
 * 空间复杂度：O(1)
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) {
    return x
  }

  let tmp = x
  while (x * x > tmp) {
    x = ((x + tmp / x) / 2) | 0
  }

  return x
}
// @lc code=end
