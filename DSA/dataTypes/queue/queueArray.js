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
    this.items = [];
  }

  enqueue(a) {
    this.items.push(a);
  }
  dequeue() {
    //shift has linear time complexity
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items);
  }
}

const obj = new Queue();
obj.enqueue("1");
obj.enqueue("2");
obj.enqueue("3");
obj.enqueue("4");
console.log(obj.RemoveElement());
console.log(obj.peek());
console.log(obj.isEmpty());
console.log(obj.size());
console.log(obj.print());
