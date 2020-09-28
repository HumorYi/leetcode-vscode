/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * 时间换空间
 * 时间复杂度：O(N^2)
 * 空间复杂度：O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* function twoSum(nums, target) {
  const numsLen = nums.length
  const lastIndex = numsLen - 1
  let i, j
  for (i = 0; i < lastIndex; i++) {
    for (j = i + 1; j < numsLen; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }

  return []
} */

/**
 * 空间换时间
 * 时间复杂度：O(N*LogN)
 * 空间复杂度：O(N)
 */
/* function twoSum(nums, target) {
  let lastIndex = nums.length - 1

  if (lastIndex < 0) {
    return []
  }

  const data = [...nums]
  let result, matchIndex

  while (lastIndex) {
    result = target - Number(data.pop())
    matchIndex = data.indexOf(result)

    if (matchIndex !== -1) {
      return [matchIndex, lastIndex]
    }

    lastIndex--
  }

  return []
} */

/**
 * 空间换时间，推荐：空间便宜，时间值钱
 * 时间复杂度：O(N)
 * 空间复杂度：O(N)
 */
function twoSum(nums, target) {
  const cache = new Map()

  let num, result

  for (let i = nums.length - 1; i >= 0; i--) {
    num = nums[i]
    result = target - num

    if (cache.has(result)) {
      return [i, cache.get(result)]
    }

    cache.set(num, i)
  }

  return []
}
// @lc code=end
