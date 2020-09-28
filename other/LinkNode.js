class LinkNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

class LinkNodeList {
  constructor() {
    this.head = null
    this.length = 0
  }

  append(val) {
    const linkNode = new LinkNode(val)

    if (this.head === null) {
      this.head = linkNode
    } else {
      let curr = this.head

      while (curr.next) {
        curr = curr.next
      }

      curr.next = linkNode
    }

    this.length++

    return linkNode
  }

  removeAt(index) {
    const size = this.size()
    if (this.head === null || size === 0 || size < index) {
      return null
    }

    // 取消当前节点指向下一个节点，将上一个节点指向下一个节点

    let curr = this.head
    let prev = curr
    let currIndex = 0

    if (index === 0) {
      this.head = curr.next
    } else {
      while (currIndex < index) {
        prev = curr
        curr = curr.next
        currIndex++
      }

      prev.next = curr.next
      curr.next = null
    }

    this.length--

    return curr
  }

  insert(val, index) {
    const size = this.size()
    if (size < index) {
      throw new Error(`当前节点数量：${size}，插入 ${index} 越界`)
    }

    if (size === index) {
      return this.append(val)
    }

    if (this.head === null) {
      return null
    }

    let currIndex = 0
    let curr = this.head
    let prev = curr

    while (currIndex < index) {
      prev = curr
      curr = curr.next
      currIndex++
    }

    const linkNode = new LinkNode(val)
    prev.next = linkNode
    linkNode.next = curr

    return linkNode
  }

  indexOf(val) {
    const size = this.size()
    if (size === 0) {
      return -1
    }

    let index = 0
    let curr = this.head
    while (curr) {
      if (curr.val == val) {
        return index
      }

      curr = curr.next
      index++
    }

    return -1
  }

  find(val) {
    const size = this.size()
    if (size === 0) {
      return null
    }

    let curr = this.head

    while (curr) {
      if (curr.val === val) {
        return curr
      }

      curr = curr.next
    }

    return null
  }

  size() {
    return this.length
  }

  print() {
    if (this.head === null) {
      console.log('no data')
      return
    }

    const ret = []
    let curr = this.head

    while (curr) {
      ret.push(curr.val)
      curr = curr.next
    }

    console.log(ret.join('=>'))
  }
}

const linkNodeList = new LinkNodeList()
linkNodeList.append('你瞅啥')
linkNodeList.append('瞅你咋的')
linkNodeList.append('不咋的，你继续')
linkNodeList.append('小样')

console.log('链表节点数量：', linkNodeList.size())
linkNodeList.print()

linkNodeList.removeAt(1)
console.log('链表节点数量：', linkNodeList.size())
linkNodeList.print()

console.log('查找值对应节点下标：', linkNodeList.indexOf('不咋的，你继续'))
console.log('查找值对应节点：', linkNodeList.find('不咋的，你继续'))
console.log('插入节点：', linkNodeList.insert('插入节点', 1))

linkNodeList.print()
