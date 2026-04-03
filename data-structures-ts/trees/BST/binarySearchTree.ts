export interface BSTNode<T> {
  value: T;
  left: BSTNode<T> | null;
  right: BSTNode<T> | null;
}

export interface BST<T> {
  root: BSTNode<T> | null;

  insert(value: T): this;
  find(value: T): BSTNode<T> | null;
  delete(value: T): this;

  BFS(): T[];
  DFSPreOrder(): T[];
  DFSPostOrder(): T[];
  DFSInOrder(): T[];

  traverseDFS(): T[];
}

export class BSTNodeClass<T> implements BSTNode<T> {
  public value: T;
  public left: BSTNode<T> | null = null;
  public right: BSTNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class BSTClass<T> implements BST<T> {
  public root: BSTNode<T> | null = null;

  private compare: (a: T, b: T) => number;

  constructor(compareFn?: (a: T, b: T) => number) {
    this.compare =
      compareFn || ((a: any, b: any) => (a < b ? -1 : a > b ? 1 : 0));
  }

  public insert(value: T): this {
    const newNode = new BSTNodeClass(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current: BSTNode<T> = this.root;

    while (true) {
      const cmp = this.compare(value, current.value);

      if (cmp === 0) return this; // ignore duplicates

      if (cmp < 0) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  public find(value: T): BSTNode<T> | null {
    let current = this.root;

    while (current) {
      const cmp = this.compare(value, current.value);

      if (cmp === 0) return current;
      current = cmp < 0 ? current.left : current.right;
    }

    return null;
  }

  public delete(value: T): this {
    this.root = this._deleteNode(this.root, value);
    return this;
  }

  private _deleteNode(node: BSTNode<T> | null, value: T): BSTNode<T> | null {
    if (!node) return null;

    const cmp = this.compare(value, node.value);

    if (cmp < 0) {
      node.left = this._deleteNode(node.left, value);
      return node;
    }

    if (cmp > 0) {
      node.right = this._deleteNode(node.right, value);
      return node;
    }

    // ✅ Node found

    // Case 1: no children
    if (!node.left && !node.right) return null;

    // Case 2: one child
    if (!node.left) return node.right;
    if (!node.right) return node.left;

    // Case 3: two children
    const minRight = this._findMin(node.right);
    node.value = minRight.value;
    node.right = this._deleteNode(node.right, minRight.value);

    return node;
  }

  private _findMin(node: BSTNode<T>): BSTNode<T> {
    while (node.left) node = node.left;
    return node;
  }

  public BFS(): T[] {
    if (!this.root) return [];

    const queue: BSTNode<T>[] = [this.root];
    const values: T[] = [];

    while (queue.length) {
      const node = queue.shift()!;
      values.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return values;
  }

  public DFSPreOrder(): T[] {
    if (!this.root) return [];

    const values: T[] = [];

    const traverse = (node: BSTNode<T>) => {
      values.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return values;
  }

  public DFSPostOrder(): T[] {
    if (!this.root) return [];

    const values: T[] = [];

    const traverse = (node: BSTNode<T>) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      values.push(node.value);
    };

    traverse(this.root);
    return values;
  }

  public DFSInOrder(): T[] {
    if (!this.root) return [];

    const values: T[] = [];

    const traverse = (node: BSTNode<T>) => {
      if (node.left) traverse(node.left);
      values.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return values;
  }

  public traverseDFS(): T[] {
    if (!this.root) return [];

    const values: T[] = [];
    const stack: BSTNode<T>[] = [this.root];

    while (stack.length) {
      const node = stack.pop()!;
      values.push(node.value);

      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }

    return values;
  }

  public heightBFS(): number {
    if (!this.root) return 0;

    const queue: BSTNode<T>[] = [this.root];
    let height = 0;

    while (queue.length) {
      const levelSize = queue.length;

      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift()!;

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }

      height++; // finished one level
    }

    return height;
  }
}
