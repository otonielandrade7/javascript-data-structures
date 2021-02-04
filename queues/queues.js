class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  unqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.bottom = newNode;
      this.top = this.bottom;
    } else {
      const holdingNode = this.bottom;
      this.bottom = newNode;
      this.bottom.next = holdingNode;
    }
    this.length++;
    return this;
  }
  getTheIndex(index) {
    let counter = 0;
    let lastNode = this.bottom;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  dequeue() {
    const holdingNode = this.top.next;
  }
  peek() {
    return this.top;
  }
}
const myQueue = new Queue();
