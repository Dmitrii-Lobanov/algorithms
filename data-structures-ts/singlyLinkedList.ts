interface IMap<T> {
  [key: string]: T;
  [key: number]: T;
}

export interface SingleNode <T>{
  value: T;
  next: SingleNode<T>;
}

export interface SinglyLinkedList<T> {
  head: SingleNode<T>;
  tail: SingleNode<T>;
  length: number;
  push: (value: T) => SinglyLinkedList<T>;
  pop: () => SingleNode<T>;
  shift: () => SingleNode<T>;
  unshift: (value: T) => SingleNode<T>;
  get: (index: number) => SingleNode<T>;
  set: (index: number, value: T) => boolean;
  insert: (index: number, value: T) => boolean;
  remove: (index: number) => SingleNode<T>;
  reverse: () => SinglyLinkedList<T>;
  traverse: () => T[];
  sum: () => number; 
  removeDuplicates: () => SinglyLinkedList<T>;
  print: () => void;
}

const findDuplicateIndexes = <T extends string | number>(array: T[]): number[]=> {
  let values: IMap<T> = {};
  let duplicateIndexes: number[] = [];
  
  array.forEach((item: T, index: number): void => {
    if(!(item in values)) {
      values[item] = item;
    } else {
      duplicateIndexes.push(index);
    }
  })
  
  return duplicateIndexes;
}
class NodeClass implements SingleNode<number> {
  public value: number;
  public next: SingleNode<number>;

  public constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedListClass implements SinglyLinkedList<number> {
  public head: SingleNode<number>;
  public tail: SingleNode<number>;
  public length: number;

  public constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  public push(value: number): SinglyLinkedList<number> {
    const node: SingleNode<number> = new NodeClass(value);

    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  public pop(): SingleNode<number> {
    if(!this.length) return undefined;

    let current: SingleNode<number> = this.head;
    let newTail: SingleNode<number> = current;
    
    while(current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    return current;
  }

  public shift(): SingleNode<number> {
    if(!this.length) return undefined;

    let currentHead: SingleNode<number> = this.head;
    this.head = currentHead.next;
    this.length--;

    if(!this.length) this.tail = null;

    return currentHead;
  }

  public unshift(value: number): SingleNode<number> {
    const node: SingleNode<number> = new NodeClass(value);

    if(!this.length) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    
    this.length++;

    return node;
  }
 
  public get(index: number): SingleNode<number> {
    if(index < 0 || index >= this.length) return null;

    let count = 0;
    let current: SingleNode<number> = this.head;

    while(count !== index) {
      count++;
      current = current.next;
    }

    return current;
  }

  public set(index: number, value: number): boolean {
    const node: SingleNode<number> = this.get(index);
    if(node) {
      node.value = value;
      return true;
    }
    return false;
  }

  public insert(index: number, value: number): boolean {
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(value);
    if(index === 0) return !!this.unshift(value);

    const previous: SingleNode<number> = this.get(index - 1);
    const node: SingleNode<number> = new NodeClass(value);
    node.next = previous.next;
    previous.next = node;
    this.length++;

    return true;
  }

  public remove(index: number): SingleNode<number> {
    if(index < 0 || index >= this.length) return undefined;

    if(index === this.length) return this.pop();
    if(index === 0) return this.shift();

    let previous: SingleNode<number> = this.get(index - 1);
    let removed: SingleNode<number> = previous.next;
    previous.next = removed.next;
    removed.next = null;
    this.length--;

    return removed;
  }

  public reverse(): SinglyLinkedList<number> {
    let current: SingleNode<number> = this.head;
    this.head = this.tail;
    this.tail = current;

    let next: SingleNode<number>;
    let previous: SingleNode<number>;

    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    return this;
  }

  public traverse(): number[] {
    let values: number[] = [];

    let current: SingleNode<number> = this.head;
    while(current) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }

  public sum(): number {
    let values: number[] = this.traverse();
    return values.reduce((accumulator: number, current: number): number => accumulator + current, 0);
  }

  public removeDuplicates(): SinglyLinkedList<number> {
    const values: number[] = this.traverse();
    const indexes: number[] = findDuplicateIndexes(values).reverse(); 
    indexes.forEach((item: number): void => {
      this.remove(item);
    });

    return this;
  }

  public print(): void {
    let values: number[] = [];

    let current = this.head;
    while(current) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values);
  }
}

export const list = new SinglyLinkedListClass();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(2);
list.push(4);
