interface SingleNode<T> {
  value: T;
  next: SingleNode<T> | null;
}

class NodeClass implements SingleNode<number> {
  public value: number;
  public next: SingleNode<number> | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class StackClass {
  private mainTop: SingleNode<number> | null = null;
  private minTop: SingleNode<number> | null = null;
  public length: number = 0;

  public push(value: number): void {
    const newNode = new NodeClass(value);
    newNode.next = this.mainTop;
    this.mainTop = newNode;

    // 🧠 update min stack
    if (!this.minTop || value <= this.minTop.value) {
      const minNode = new NodeClass(value);
      minNode.next = this.minTop;
      this.minTop = minNode;
    }

    this.length++;
  }

  public pop(): number | undefined {
    if (!this.mainTop) return undefined;

    const removed = this.mainTop;
    this.mainTop = this.mainTop.next;

    // 🧠 sync min stack
    if (this.minTop && removed.value === this.minTop.value) {
      this.minTop = this.minTop.next;
    }

    this.length--;
    return removed.value;
  }

  public peek(): number | undefined {
    return this.mainTop?.value;
  }

  public getMin(): number | undefined {
    return this.minTop?.value;
  }

  public traverse(): number[] {
    const values: number[] = [];
    let current = this.mainTop;

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }
}
