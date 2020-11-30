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
}
}

const dll = new DoublyLinkedList(13);
