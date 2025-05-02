class Node {
  constructor(a) {
    this.value = a;
    this.next = null;
    this.prev = null;
  }
}

class doubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  print() {
    if (this.isEmpty()) {
      return "no elements";
    }
    let currentNode = this.head;
    let values = "";
    while (currentNode) {
      values = values + " " + currentNode.value;
      currentNode = currentNode.next;
    }
    return `all values - ${values} `;
  }
  insertAtFront(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      let currentNode = this.head;
      node.next = currentNode;
      currentNode.prev = node;
      this.head = node;
    }
    this.size++;
    return `node added at first - value - '${node.value}', next - '${node.next}', prev - '${node.prev}'`;
  }
  insertAtEnd(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      let currentNode = this.head;
      while (currentNode && currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      node.next = null;
      node.prev = currentNode;
      this.tail = node;
    }
    this.size++;
    return `node added at end- value - '${node.value}', next - '${node.next}', prev - '${node.prev}'`;
  }
  insertAtIndex(index, value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else if (index === 0) {
      this.insertAtFront(value);
    } else if (index === this.size) {
      this.insertAtEnd(value);
    } else if (index < this.size) {
      let currentNode = this.head;
      let i = 0;
      while (i < index - 1) {
        currentNode = currentNode.next;
        i++;
      }
      let nextNode = currentNode.next;
      currentNode.next = node;
      node.prev = currentNode;
      node.next = nextNode;
      nextNode.prev = node;
      if (this.size - 1 === index) {
        this.tail = node;
      }
    }
    this.size++;
  }
  deleteAtFront() {
    if (this.isEmpty()) {
      return "no elements to delete at front.";
    }
    let currentNode = this.head;
    this.head = currentNode.next;
    this.size--;
    return `deleted at front - ${currentNode.value}`;
  }
  deleteAtEnd() {
    if (this.isEmpty()) {
      return "no elements to delete at end.";
    }
    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
  }
  deleteAtIndex(index) {
    if (this.isEmpty()) {
      return "no elements to delete at end.";
    }
    if (index === 0) {
      this.deleteAtFront();
    } else if (index === this.size - 1) {
      this.deleteAtEnd();
    } else if (index >= this.size) {
      return "index out of size";
    } else if (index < this.size) {
      let currentNode = this.head;
      let i = 0;
      while (i < index - 1) {
        currentNode = currentNode.next;
        i++;
      }
      nodeToBeDeleted = currentNode.next;
      currentNode.next = nodeToBeDeleted.next;
      if (nodeToBeDeleted.next) {
        nodeToBeDeleted.next.prev = currentNode;
      }
    }
    this.size--;
  }
  deleteValue(value) {
    if (this.isEmpty()) {
      return "no elements to delete at end.";
    }
    if (this.head.value === value) {
      this.deleteAtFront();
      return `deleted value - ${value}`;
    } else if (this.tail.value === value) {
      this.deleteAtEnd();
      return `deleted value - ${value}`;
    } else {
      let currentNode = this.head.next;
      let deletedValue;
      while (currentNode !== null) {
        if (currentNode.value === value) {
          deletedValue = currentNode.value;
          let prevNode = currentNode.prev;
          let nextNode = currentNode.next;
          prevNode.next = nextNode;
          if (nextNode) {
            nextNode.prev = prevNode;
          }
          if (currentNode === this.tail) {
            this.tail = this.tail.prev;
          }
          this.size--;
          return `deleted value - ${deletedValue}`;
        }
        currentNode = currentNode.next;
      }
      return "value not found.";
    }
  }
  search(value) {
    if (this.head && this.head.value === value) {
      return `value found at index-0`;
    }
    if (this.tail && this.tail.value === value) {
      return `value found at index-${this.size - 1}`;
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
    return "value not found.";
  }
  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode) {
      let nextNode = currentNode.next;


      currentNode.next = prevNode;
      currentNode.prev = nextNode;


      prevNode = currentNode;
      currentNode = nextNode;
    }
    let temp = this.head
    this.head = this.tail;
    this.tail = temp;
  }
  p() {
    let i = 1;
    let currentNode = this.head;

    while (i <= this.size) {
      console.log(
        "item" + i,
        "value-" + currentNode.value,
        "\n next=",
        currentNode.next,
        "\n prev-",
        currentNode.prev
      );
      currentNode = currentNode.next;
      i++;
    }
  }
}

const Obj = new doubleLinkedList();

console.log(Obj.isEmpty());
console.log(Obj.insertAtFront(10));
console.log(Obj.insertAtFront(20));
console.log(Obj.insertAtEnd(30));
console.log(Obj.insertAtEnd(50));
console.log(Obj.insertAtIndex(4, 20));
console.log(Obj.insertAtIndex(4, 5));

console.log(Obj.print());
reverse = Obj.reverse();
console.log("rev", reverse);
console.log(Obj.deleteAtFront());
console.log(Obj.deleteAtEnd());