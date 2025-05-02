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

class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rare = 0;
  }

  enqueue(a) {
    //const TC
    this.items[this.rare] = a;
    this.rare++;
    console.log(this.items);
  }
  dequeue() {
    //const TC
    const firstElement = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return firstElement;
  }
  peek() {
    return this.items[this.front];
  }
  isEmpty() {
    return this.rare === this.front;
  }
  size() {
    return this.rare - this.front;
  }
  print() {
    return this.items;
  }
}

const obj = new Queue();
obj.enqueue("0");
obj.enqueue("1");
obj.enqueue("2");
obj.enqueue("3");
console.log(obj.dequeue());
console.log(obj.peek());
console.log(obj.isEmpty());
console.log(obj.size());
console.log(obj.print());
