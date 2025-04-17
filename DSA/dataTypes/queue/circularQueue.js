// Circular Queue
// The size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element
// Also referred to as circular buffer or ring buffer and follows the FIFO principle
// A circular queue will reuse the empty block created during the dequeue operation
// When working with queues of fixed maximum size, a circular queue is a great implementation choice
// The Circular Queue data structure supports two main operations
// Enqueue, which adds an element to the rear/tail of the collection
// Dequeue, which removes an element from the front/head of the collection

//examples - clock, streaming data and traffic lights

//queue - seq collection of elements with FIFO principle
//queue is abstract datatype and it is defined by its behaviour
//queue is a list but mostly differentiated on its behaviour
//supports enqueue and dequeue(remove first element)

//example - printers, cpu task scheduling, callback queue in js runtime.

//useful methods
// enqueue(element) - add an element to the queue
// dequeue() - remove the oldest element from the queue
// peek() - get the value of the element at the front of the queue without removing it
// isEmpty() - check if the queue is empty
// size() - get the number of elements in the queue
// print() - visualize the elements in the queue


class newCircularQueue {
  constructor(n) {
    this.array = new Array(n);
    this.capacity = n;
    this.currentLength = 0;
    this.rare = -1;
    this.front = -1;
  }

  isFull() {
    //check rare+1 = front then no space left to add element
    return (this.rare + 1) % this.capacity === this.front;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  enqueue(a) {
    if (this.isFull()) {
      return "Queue is full. Can' add data";
    }
    //while adding first element set front = 0
    if (this.front === -1) this.front = 0;

    //set rare with rare+1
    this.rare = (this.rare + 1) % this.capacity;

    this.array[this.rare] = a;
    this.currentLength++;
    return `added ${a} at ${this.rare}`;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("No elements to remove");
      return;
    }
    //get removed ele
    const removedElement = this.array[this.front];

    //in place of removed element have undefined
    this.array[this.front] = undefined;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;

    //if all elements are deleted then set front and rare to initial position of -1
    if (this.currentLength === 0) {
      this.front = -1;
      this.rare = -1;
    }
    return `removed ${removedElement} at ${this.front - 1}`;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("No elements to log.");
      return;
    }
    console.log();
    return `Array: ${this.array}`;
  }

  size() {
    return this.currentLength;
  }
}

const cirObj = new newCircularQueue(3);
console.log(cirObj.isEmpty());
console.log(cirObj.enqueue(1));
console.log(cirObj.enqueue(2));
console.log(cirObj.dequeue());
console.log(cirObj.enqueue(3));
console.log(cirObj.enqueue(4));
console.log(cirObj.enqueue(5));
console.log(cirObj.enqueue(6));
console.log(cirObj.enqueue(7));
console.log(cirObj.dequeue());
console.log(cirObj.peek());
console.log(cirObj.size());
console.log(cirObj.isFull());
console.log(cirObj.isEmpty());
