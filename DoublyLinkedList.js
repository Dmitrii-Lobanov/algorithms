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
}

const dll = new DoublyLinkedList(13);
