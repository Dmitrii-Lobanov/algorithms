type Tuple<T, K> = [T, K];

interface StackArray <T>{
  storage: Tuple<T, number>[];
  push: (value: T) => T;
  pop: () => T;
  peek: () => T;
  getMin: () => T;
}

class StackArrayClass implements StackArray<number> {
  public storage: Tuple<number, number>[];
  
  public constructor() {
    this.storage = [];
  }

  public push(value: number): number {
    const min: number = this.storage.length ? Math.min(this.getMin(), value): value;
    this.storage.push([value,  min]);
    return value;
  }

  public pop(): number {
    return this.storage.pop()[0];
  }

  public peek(): number {
    return this.storage[this.storage.length - 1][0];
  }

  public getMin(): number {
    return this.storage[this.storage.length - 1][1];
  }
}

const stackArr = new StackArrayClass();
stackArr.push(3);
stackArr.push(10);
stackArr.push(-88);
stackArr.push(123);

console.log(stackArr.storage);
console.log(stackArr.getMin());

stackArr.pop();
stackArr.pop();

console.log(stackArr.storage);
console.log(stackArr.getMin());
