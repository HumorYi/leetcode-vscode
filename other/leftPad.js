/**
 * 迭代
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 */
function leftPad1(str, length, char) {
  const strLen = str.length

  if (strLen >= length) {
    return str
  }

  char += ''

  return Array(length - strLen + 1).join(char) + str
}

function leftPad2(str, length, char) {
  const strLen = str.length

  if (strLen >= length) {
    return str
  }

  let size = length - strLen
  let pad = ''
  char += ''

  while (true) {
    if (size % 2) {
      pad += char
    }

    if (size === 1) {
      return pad + str
    }

    char += char

    size = Math.floor(size / 2)
  }
}

/**
 * 二分
 * 时间复杂度：O(logN)
 * 空间复杂度：O(1)
 */
function leftPad(str, length, char) {
  const strLen = str.length

  if (strLen >= length) {
    return str
  }

  let size = length - strLen
  let pad = ''
  char += ''

  while (true) {
    if (size & 1) {
      pad += char
    }

    if (size === 1) {
      return pad + str
    }

    char += char

    size = Math.floor(size >> 1)
  }
}

function test(fn, name) {
  console.time(name)
  for (let i = 0; i < 100000; i++) {
    fn('hello', 100000, 0)
  }
  console.timeEnd(name)
}

test(leftPad2, 'leftPad2')
test(leftPad, 'leftPad')
