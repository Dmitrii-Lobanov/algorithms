class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  
  push(value) {
    const node = new Node(value);
    if(!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  
  pop() {
    if(!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    
    return current;
  }
  
  shift() {
    if(!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  
  unshift(value) {
    const node = new Node(value);
    
    if(!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    
    this.length++;
    return this;
  }
  
  get(index) {
    if(index < 0 || index >= this.length) return null;
    
    let count = 0;
    let current = this.head;
    
    while(count !== index) {
      count++;
      current = current.next;
    }
  return current;
  }
  
  set(index, value) {
    const node = this.get(index);
    if(node) {
      node.value = value;
      return true;
    }
    return false;
  }
  
  insert(index, value) {
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(value);
    if(index === 0) return !!this.unshift(value);
    
    const previous = this.get(index - 1);
    const node = new Node(value);
    node.next = previous.next;
    previous.next = node;
    this.length++;
    return true;
  }
  
  remove(index) {
    if(index < 0 || index >= this.length) return null;
    
    if(index === this.length) return this.pop(index);
    if(index === 0) return this.shift(index);
    
    let previous = this.get(index - 1);
    let removed = previous.next;
    previous.next = removed.next;
    this.length--;
    return removed;
  }
  
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    
    let next;
    let previous = null;
    
    for(let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    return this;
  }
  
  // Helper method to represent the list as an array
  print() {
    let arr = [];
    let current = this.head;
    while(current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}
