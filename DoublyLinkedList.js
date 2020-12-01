class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  push(value) {
    const node = new Node(value);
    
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  
 pop() {
   if(!this.head) return undefined;
   
   const popped = this.tail;
   
   if(this.length === 1) {
     this.head = null;
     this.tail = null;
   } else {
     this.tail = popped.previous;
     this.tail.next = null;
     popped.previous = null;
   }
   this.length--;
   return popped;
 }
  
  shift() {
    if(!this.head) return undefined;
    
    const oldHead = this.head;
    
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.previous = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  
  unshift(value) {
    const node = new Node(value);
    
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.previous = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  
  print() {
    const arr = [];
    let current = this.head;
    
    while(current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
  
  get(index) {
    if(index < 0 || index >= this.length) return null;
    let count, current;
    
    if(index <= this.length / 2) {
      count = 0;
      current = this.head;
      while(count !== index) {
        count++;
        current = current.next;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while(count !== index) {
        count--;
        current = current.previous;
      }
    }
    return current;
  }
  
  set(index, value) {
    let node = this.get(index);
    if(node !== null) {
      node.value = value;
      return true;
    }
    return false;
  }
  
  insert(index, value) {
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(value);
    if(index === this.length) return !!this.push(value);
    let node = new Node(value);
    const previous = this.get(index - 1);
    const next = previous.next;
    previous.next.previous = node;
    previous.next = node;
    node.next = next;
    this.length++;
    return true;
  }
  
  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();
    const removed = this.get(index);
    removed.previous.next = removed.next;
    removed.next.previous = removed.previous;
    removed.next = null;
    removed.previous = null;
    this.length--;
  }
}

const dll = new DoublyLinkedList();
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
dll.print();
dll.set(11, 'rrrr')
dll.insert(4, 'ins')
dll.remove(1)
dll.print()
