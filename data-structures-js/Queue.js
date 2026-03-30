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
    this.size = 0;
  } 

  print() {
    const res = [];
    let current = this.first;
    while(current) {
      res.push(current.value);
      current = current.next;
    }
    return res;
  }
  
  enqueue(value) {
    const node = new Node(value);
    if(this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
    return node;
  }
  
  dequeue() {
    if(this.size === 0) return null;
    let removed = this.first;
    if(this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return removed;
  }
}

const queue = new Queue();
queue.enqueue('first');
queue.enqueue('second');
queue.enqueue('third');

queue.dequeue();

queue.print()
