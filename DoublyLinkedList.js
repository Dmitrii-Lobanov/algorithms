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
}

const dll = new DoublyLinkedList(13);
