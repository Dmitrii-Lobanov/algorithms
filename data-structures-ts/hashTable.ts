interface IMap<T> {
  [key: string]: T;
  [key: number]: T;
}

interface Storage {
  value: string;
}

interface HashTable<T> {
  storage: IMap<T>; 
  set: (key: string, value: string) => T;
  get: (key: string) => T;
  keys: () => string[];
  values: () => T[];
  print: () => void;
}

const hash = require('string-hash');

class HashTableClass implements HashTable<string> {
  public storage: IMap<string>;

  constructor() {
    this.storage = {};
  }

  public set(key: string, value: string): string {
    const hashed: string = hash(key);
    this.storage[hashed] = value;
    return hashed;
  }

  public get(key: string): string {
    const hashed: string = hash(key);
    return this.storage[hashed] ?? null;
  }

  public keys(): string[] {
    let keys: string[] = [];
    for (let key in this.storage) {
      keys.push(key);
    }
    return keys;
  }

  public values(): string[] {
    let values: string[] = [];
    for (let item of Object.values(this.storage)) {
      values.push(item);
    }
    
    return [...new Set(values)];
  }

  public print(): void {
    console.log(this.storage);
  }
} 

const ht = new HashTableClass();
ht.set('1', 'first');
ht.set('2', 'second');
ht.set('third', 'third');
ht.set('4', 'second');

ht.print();
console.log(ht.keys());
console.log(ht.values());