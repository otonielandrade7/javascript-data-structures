class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  getTheIndex(index) {
    let counter = 0;
    let lastNode = this.last;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  dequeue() {
    if (this.length === 0) {
      return "This action is not possible because list length is 0";
    }
    this.first = this.first.next;
    this.length--;
    if (this.length === 0) {
      this.last = null;
    }
    return this;
  }
  peek() {
    return this.first;
  }
}
const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
