/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
// 时间换空间
/* function twoSum(nums: number[], target: number): number[] {
    const numsLen = nums.length
    const lastIndex = numsLen-1
    for (let i = 0; i < lastIndex; i++) {
        for (let j = i+1; j < numsLen; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }

    return []
} */

// 空间+时间综合
/* function twoSum(nums: number[], target: number): number[] {
  let lastIndex = nums.length - 1

  if (lastIndex < 0) {
      return []
  }

  const data = [...nums]

  while (lastIndex) {
      const result = target - Number(data.pop())
      const matchIndex = data.indexOf(result)

      if (matchIndex !== -1) {
          return [matchIndex, lastIndex]
      }

      lastIndex--
  }

  return []
} */

// 空间换时间，推荐：空间便宜，时间值钱
function twoSum(nums: number[], target: number): number[] {
  const cache = new Map()

  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i]
    const result = target - num

    if (cache.has(result)) {
      return [i, cache.get(result)]
    }

    cache.set(num, i)
  }

  return []
}
// @lc code=end
