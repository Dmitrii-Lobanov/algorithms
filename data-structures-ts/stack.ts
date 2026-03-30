interface SingleNode <T>{
  value: T;
  next: SingleNode<T>;
}

interface Stack <T>{
  first: SingleNode<T>;
  last: SingleNode<T>;
  length: number;
  min: number;
  push: (value: T) => SingleNode<T>;
  pop: () => SingleNode<T>;
  peek: () => SingleNode<T>;
  traverse: () => T[];
  getMin: () => T;
}

class NodeClass implements SingleNode<number> {
  public value: number;
  public next: SingleNode<number>;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class StackClass implements Stack<number> {
  public first: SingleNode<number>;
  public last: SingleNode<number>;
  public length: number;
  public min: number;

  public constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
    this.min  = Infinity;
  }

  public push(value: number): SingleNode<number> {
    const node = new NodeClass(value)

    if(!this.length) {
      this.first = node;
      this.last = node;
    } else {
      let current = this.first;
      this.first = node;
      node.next = current;
    }

    this.min = Math.min(this.min, value);
    this.length++;

    return node;
  }

  public traverse(): number[] {
    let values: number[] = [];
    let current = this.first;

    while(current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }

  public getMin(): number {
    return this.min;
  }

  public pop(): SingleNode<number> {
    if(!this.length) return undefined;

    const removed: SingleNode<number> = this.first;

    if(this.length === 1) {
      this.last = null;
    }
    this.first = removed.next;
    this.length--;

    if(this.min === removed.value) {
      this.min = Math.min(...this.traverse());
    }

    return removed;
  }

  public peek(): SingleNode<number> {
    return this.first;
  }
}

const stack = new StackClass();
stack.push(1);
stack.push(2);
stack.push(-15);
stack.push(3);

console.log(stack.traverse());
stack.pop();
stack.pop();
console.log(stack.getMin());