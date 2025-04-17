class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
    return `added ${value}`;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      let nodeTrack = this.head;
      while (nodeTrack.next) {
        nodeTrack = nodeTrack.next;
      }
      nodeTrack.next = node;
      this.tail = node;
    }
    this.size++;
    return `added node with - ${value}`;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return "Invalid index";
    }
    if (index === 0) {
      this.prepend(value);
      return "pre";
    }
    if (index > 0 && index < this.size) {
      let node = new Node(value);
      let tempNode = this.head;
      let tempIndex = 0;
      while (tempIndex < index - 1) {
        tempNode = tempNode.next;
        tempIndex++;
      }
      node.next = tempNode.next;
      tempNode.next = node;
      this.size++;
      return "done";
    }
  }
  removeFromFront() {
    if (this.isEmpty()) {
      return "no elements to delete";
    }
    let nextNode = this.head.next;
    this.head = nextNode;
    this.size--;
    return `remove from front - ${this.print()}`;
  }
  removeFromEnd() {
    if (this.isEmpty()) {
      return "no elements to delete";
    }
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prevNode = this.head;
      while (prevNode.next && prevNode.next !== this.tail) {
        prevNode = prevNode.next;
      }
      prevNode.next = null;
      this.tail = prevNode;
    }
    this.size--;
    return `remove from last - ${this.print()}`;
  }
  deleteIndex(index) {
    let deleteNode;
    if (index === 0) {
      deleteNode = this.head;
      this.head = this.head.next;
      this.size--;
    }
    if (index > 0 && index < this.size) {
      let counter = 0;
      let tempNode = this.head;
      while (counter < index - 1) {
        tempNode = tempNode.next;
        counter++;
      }
      deleteNode = tempNode.next;
      tempNode.next = tempNode.next.next;
      this.size--;
    }
    return deleteNode.value;
  }
  deletevalue(value) {
    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
      this.size--;
      return `deletedNode - ${deletedNode}`;
    }
    let currentNode = this.head;
    let deletedNode;
    while (currentNode && currentNode.next) {
      if (currentNode.next.value === value) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
        this.size--;
        return `deletedNode - ${deletedNode.value}..`;
      } else {
        currentNode = currentNode.next;
      }
    }
    return "deleted nothing";
  }
  print() {
    if (this.isEmpty()) {
      return "No items to print.";
    }
    let current = this.head;
    let allValues = "";
    while (current) {
      allValues = allValues + `${current.value} `;
      current = current.next;
    }
    return allValues;
  }
  search(value) {
    if (this.head && this.head.value === value) {
      return `value found at index-0`;
    }
    let currentNode = this.head;
    let index = 1;
    while (currentNode && currentNode.next) {
      if (currentNode.next.value === value) {
        return `value found at index-${index}..`;
      }
      currentNode = currentNode.next;
      index++;
    }
  }
  reverse() {
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode) {
      let nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    this.head = previousNode;
    return this.print();
  }
}

let LL = new LinkedList();
console.log(LL.prepend(5));
console.log(LL.prepend(10));
console.log(LL.prepend(15));
console.log(LL.append(1));
console.log(LL.append(2));
console.log(LL.append(3));
console.log(LL.append(4));
console.log(LL.append(5));
console.log(LL.append(6));
console.log(LL.append(7));
console.log(LL.append(8));
console.log(LL.append(9));
console.log(LL.insert(444, 2));
console.log(LL.deleteIndex(1));
console.log(LL.deletevalue(444));
console.log(LL.deletevalue(3));
console.log(LL.search(15));
console.log(LL.search(7));
console.log(LL.search(9));

console.log(LL.print());
console.log(LL.reverse());
//deleting with tails
console.log(LL.removeFromFront());
console.log(LL.removeFromEnd());

console.log("final", LL.print());
