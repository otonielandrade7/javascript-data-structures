class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    const holdingPointer = firstPointer.next;
    newNode.prev = firstPointer;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;
    holdingPointer.prev = newNode;
    this.length++;
    return this;
  }
  remove(index) {
    if (index >= this.length) {
      return "This action is not possible because your index is higher to list length";
    }
    let nextToRemoveItem = this.getTheIndex(index + 1);
    let beforeToRemoveItem = this.getTheIndex(index - 1);
    nextToRemoveItem.prev = beforeToRemoveItem;
    beforeToRemoveItem.next = nextToRemoveItem;
    this.length--;
    return this;
  }
}
const myDoublyList = new MyDoublyLinkedList(1);
myDoublyList.append(2);
myDoublyList.append(5);
myDoublyList.append(3);
myDoublyList.append(4);
