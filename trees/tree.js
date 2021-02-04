//binary search tree
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  search(value) {
    if (this.root === null) {
      return "This tree is empty";
    } else {
      let currentNode = this.root;
      while (true) {
        if (value <= currentNode.value) {
          if (value === currentNode.value) {
            return currentNode;
          }
          if (currentNode.left === null) {
            return `${value} doesnt exist in this tree`;
          }
          currentNode = currentNode.left;
        } else {
          if (value === currentNode.value) {
            return currentNode;
          }
          if (currentNode.right === null) {
            return `${value} doesnt exist in this tree`;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(4);
tree.insert(7);
tree.insert(20);
tree.insert(14);
tree.insert(17);
