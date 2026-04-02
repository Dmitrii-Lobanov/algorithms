export interface IDoubleNode<T> {
  value: T;
  next: IDoubleNode<T> | null;
  prev: IDoubleNode<T> | null;
}

export interface IDoublyLinkedList<T> extends Iterable<T> {
  head: IDoubleNode<T> | null;
  tail: IDoubleNode<T> | null;
  length: number;

  printList(): T[];
  append(value: T): this;
  prepend(value: T): this;
  traverseToIndex(index: number): IDoubleNode<T> | null;

  insert(index: number, value: T): this;
  remove(index: number): this;

  get(index: number): IDoubleNode<T> | null;
  set(index: number, value: T): boolean;

  reverse(): this;
}

class Node<T> implements IDoubleNode<T> {
  public value: T;
  public next: IDoubleNode<T> | null = null;
  public prev: IDoubleNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
  public head: IDoubleNode<T> | null = null;
  public tail: IDoubleNode<T> | null = null;
  public length = 0;

  constructor(value: T) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  public printList(): T[] {
    return [...this];
  }

  public append(value: T): this {
    const newNode = new Node(value);

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  public prepend(value: T): this {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  public traverseToIndex(index: number): IDoubleNode<T> | null {
    if (index < 0 || index >= this.length) return null;

    let current: IDoubleNode<T> | null;

    if (index < this.length / 2) {
      current = this.head;
      let i = 0;
      while (current && i < index) {
        current = current.next;
        i++;
      }
    } else {
      current = this.tail;
      let i = this.length - 1;
      while (current && i > index) {
        current = current.prev;
        i--;
      }
    }

    return current;
  }

  public get(index: number): IDoubleNode<T> | null {
    return this.traverseToIndex(index);
  }

  public set(index: number, value: T): boolean {
    const node = this.get(index);
    if (!node) return false;

    node.value = value;
    return true;
  }

  public insert(index: number, value: T): this {
    if (index <= 0) return this.prepend(value);
    if (index >= this.length) return this.append(value);

    const leader = this.traverseToIndex(index - 1);
    if (!leader) return this;

    const newNode = new Node(value);
    const follower = leader.next;

    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;

    if (follower) follower.prev = newNode;

    this.length++;
    return this;
  }

  public remove(index: number): this {
    if (!this.head) return this;

    if (index <= 0) {
      this.head = this.head.next;

      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }

      this.length--;
      return this;
    }

    if (index >= this.length - 1) {
      if (this.tail) {
        this.tail = this.tail.prev;
        if (this.tail) this.tail.next = null;
        else this.head = null;
      }

      this.length--;
      return this;
    }

    const node = this.traverseToIndex(index);
    if (!node || !node.prev || !node.next) return this;

    node.prev.next = node.next;
    node.next.prev = node.prev;

    this.length--;
    return this;
  }

  public reverse(): this {
    let current = this.head;
    let temp: IDoubleNode<T> | null = null;

    this.tail = this.head;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    if (temp) {
      this.head = temp.prev;
    }

    return this;
  }

  // ✅ iterator support
  public *[Symbol.iterator](): Iterator<T> {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}
