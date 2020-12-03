class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
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
  
  push(value) {
    const node = new Node(value);
    if(this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      let current = this.first;
      this.first = node;
      node.next = current;
    }
    this.size++;
    return node;
  }
  
  pop() {
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

const stack = new Stack();
stack.push('first');
stack.push('second');
stack.push('third');

stack.pop();
stack.pop();
stack.pop();
stack.pop();

stack.print()
