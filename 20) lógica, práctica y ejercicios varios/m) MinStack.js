class Node {
  // Your code here:
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MinStack {
  // Your code here:
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = this.top.next;
    return node.value;
  }

  peek() {
    return this.top.value;
  }

  min() {
    let current = this.top;
    let min = current.value;
    while (current) {
      if (current.value < min) {
        min = current.value;
      }
      current = current.next;
    }
    return min;
  }
}

module.exports = {
  Node,
  MinStack,
};
