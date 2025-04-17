class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.addNode(this.root, newNode);
    }
  }

  addNode(root, newNode) {
    if (newNode.value < root.value) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this.addNode(root.left, newNode);
      }
    } else if (newNode.value > root.value) {
      if (!root.right) {
        root.right = newNode;
      } else {
        this.addNode(root.right, newNode);
      }
    }
  }

  search(value, node = null) {
    if (this.isEmpty()) {
      return "no tree.";
    }
    if (!node) {
      node = this.root;
    }
    if (node.value === value) {
      return node;
    }

    if (value < node.value) {
      return node.left ? this.search(value, node.left) : "not foundd.";
    } else {
      return node.right ? this.search(value, node.right) : "not founddd.";
    }
  }

  preOrder(root) {
    if (this.isEmpty()) {
      return "no tree.";
    }
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrderTraversal(root) {
    if (this.isEmpty()) {
      return "no tree.";
    }

    if (root) {
      if (root.left) {
        this.inOrderTraversal(root.left);
      }
      console.log(root.value);
      if (root.right) {
        this.inOrderTraversal(root.right);
      }
    }
  }

  postOrder(root) {
    if (this.isEmpty()) {
      return "no tree.";
    }

    if (root) {
      if (root.left) {
        this.postOrder(root.left);
      }
      if (root.right) {
        this.postOrder(root.right);
      }

      console.log(root.value);
    }
  }

  bfs() {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let a = queue.shift();
      console.log(a.value);
      if (a.left) {
        queue.push(a.left);
      }
      if (a.right) {
        queue.push(a.right);
      }
    }
  }

  min() {
    let root = this.root;
    if (this.isEmpty()) {
      return "no tree.";
    }
    while (root.left) {
      root = root.left;
    }
    return root.value;
  }
  max() {
    let root = this.root;
    if (this.isEmpty()) {
      return "no tree.";
    }
    while (root.right) {
      root = root.right;
    }
    return root.value;
  }
}
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);

tree.insert(15);
tree.insert(3);
tree.insert(7);

// console.log("found ? ", tree.search(5));
// console.log("found ? ", tree.search(100));

// console.log(JSON.stringify(tree.root, null, 2));

// tree.preOrder(tree.root);
// tree.inOrderTraversal(tree.root);

tree.bfs();

console.log("min",tree.min());
console.log("max",tree.max());
