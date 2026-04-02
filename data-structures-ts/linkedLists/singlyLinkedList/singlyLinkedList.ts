interface IMap<T> {
  [key: string]: T;
}

export interface SingleNode<T> {
  value: T;
  next: SingleNode<T> | null;
}

export interface SinglyLinkedList<T> {
  head: SingleNode<T> | null;
  tail: SingleNode<T> | null;
  length: number;
  push: (value: T) => this;
  pop: () => SingleNode<T> | null;
  shift: () => SingleNode<T> | null;
  unshift: (value: T) => SingleNode<T>;
  get: (index: number) => SingleNode<T> | null;
  set: (index: number, value: T) => boolean;
  insert: (index: number, value: T) => boolean;
  remove: (index: number) => SingleNode<T> | null;
  reverse: () => this;
  traverse: () => T[];
  print: () => void;
  sum?: () => number;
  removeDuplicates?: () => this;
}

const findDuplicateIndexes = <T extends string | number>(
  array: T[],
): number[] => {
  const values: Record<string, T> = {};
  const duplicateIndexes: number[] = [];

  array.forEach((item, index) => {
    const key = String(item);
    if (!(key in values)) {
      values[key] = item;
    } else {
      duplicateIndexes.push(index);
    }
  });

  return duplicateIndexes;
};

class NodeClass<T> implements SingleNode<T> {
  public value: T;
  public next: SingleNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedListClass<T> implements SinglyLinkedList<T> {
  public head: SingleNode<T> | null = null;
  public tail: SingleNode<T> | null = null;
  public length = 0;

  public push(value: T): this {
    const node = new NodeClass(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      if (this.tail) this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  public pop(): SingleNode<T> | null {
    if (!this.head) return null;

    let current: SingleNode<T> | null = this.head;
    let newTail: SingleNode<T> | null = current;

    while (current?.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    if (this.tail) this.tail.next = null;

    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  public shift(): SingleNode<T> | null {
    if (!this.head) return null;

    const currentHead = this.head;
    this.head = currentHead.next;

    this.length--;
    if (this.length === 0) this.tail = null;

    return currentHead;
  }

  public unshift(value: T): SingleNode<T> {
    const node = new NodeClass(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return node;
  }

  public get(index: number): SingleNode<T> | null {
    if (index < 0 || index >= this.length) return null;

    let current: SingleNode<T> | null = this.head;
    let count = 0;

    while (current && count !== index) {
      current = current.next;
      count++;
    }

    return current;
  }

  public set(index: number, value: T): boolean {
    const node = this.get(index);
    if (!node) return false;

    node.value = value;
    return true;
  }

  public insert(index: number, value: T): boolean {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) {
      this.push(value);
      return true;
    }

    if (index === 0) {
      this.unshift(value);
      return true;
    }

    const previous = this.get(index - 1);
    if (!previous) return false;

    const node = new NodeClass(value);
    node.next = previous.next;
    previous.next = node;

    this.length++;
    return true;
  }

  public remove(index: number): SingleNode<T> | null {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const previous = this.get(index - 1);
    if (!previous || !previous.next) return null;

    const removed = previous.next;
    previous.next = removed.next;
    removed.next = null;

    this.length--;
    return removed;
  }

  public reverse(): this {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let prev: SingleNode<T> | null = null;

    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return this;
  }

  public traverse(): T[] {
    const values: T[] = [];
    let current = this.head;

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }

  public print(): void {
    console.log(this.traverse());
  }

  public sum(this: SinglyLinkedListClass<number>): number {
    return this.traverse().reduce((a, b) => a + b, 0);
  }

  public removeDuplicates(this: any): this {
    const values = this.traverse();
    const indexes = findDuplicateIndexes(values).reverse();

    indexes.forEach((i) => this.remove(i));

    return this;
  }
}
