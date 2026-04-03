type StackNode<T> = {
  value: T;
  min: T;
};

interface StackArray<T> {
  storage: StackNode<T>[];

  push(value: T): T;
  pop(): T | undefined;
  peek(): T | undefined;
  getMin(): T | undefined;
}

export class StackArrayClass<T> implements StackArray<T> {
  public storage: StackNode<T>[] = [];

  constructor(private compare: (a: T, b: T) => number) {}

  public push(value: T): T {
    const lastMin = this.storage.length
      ? this.storage[this.storage.length - 1].min
      : value;

    const min =
      this.storage.length && this.compare(value, lastMin) > 0 ? lastMin : value;

    this.storage.push({ value, min });
    return value;
  }

  public pop(): T | undefined {
    return this.storage.pop()?.value;
  }

  public peek(): T | undefined {
    return this.storage.at(-1)?.value;
  }

  public getMin(): T | undefined {
    return this.storage.at(-1)?.min;
  }
}
