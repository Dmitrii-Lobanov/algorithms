interface BSTNode<T> {
  value: T;
  left: BSTNode<T>;
  right: BSTNode<T>;
}

interface BST<T> {
  root: BSTNode<T>;
  insert: (value: T) => BSTNodeClass<T> | string;
  find: (value: T) => BSTNodeClass<T> | string;
  BFS: () => T[];
  sum: () => number;
  DFSPreOrder: () => T[];
  DFSPostOrder: () => T[];
  DFSInOrder: () => T[];
  traverseDFS: () => T[];
}

class BSTNodeClass<T> implements BSTNode<T> {
  public value: T;
  public left: BSTNode<T>;
  public right: BSTNode<T>;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BSTClass implements BST<number> {
  public root: BSTNode<number>;

  constructor() {
    this.root = null;
  }

  public insert(value: number): BSTNodeClass<number> | string {
    const node: BSTNodeClass<number> = new BSTNodeClass(value);
    
    if(!this.root) {
      this.root = node;
      return node;
    }

    let current: BSTNodeClass<number> = this.root;
    while(true) {
      if(value === current.value) return 'This value already exists';
      
      if(value < current.value) {
        if(!current.left) {
          current.left = node;
          return node;
        }
        current = current.left;
      }
      if(value > current.value) {
        if(!current.right) {
          current.right = node;
          return node;
        }
        current = current.right;
      }
    }
  }

  public find(value: number): BSTNodeClass<number> | string {
    if(!this.root) return 'The tree is empty';

    let current = this.root;
    let found = false;

    while(current && !found) {
      if(value < current.value) {
        current = current.left;
      } else if(value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if(!found) return 'Not found';

    return current;
  }

  public BFS(): number[] {
    let queue: BSTNodeClass<number>[] = [];
    let values: number[] = [];
    let node = this.root;

    queue.push(node);
    while(queue.length) {
      node = queue.shift();
      values.push(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }

    return values;
  }

  public sum(): number {
    const values: number[] = this.BFS();
    return values.reduce((accumulator: number, current: number): number => accumulator + current, 0);
  }

  public DFSPreOrder(): number[] {
    let values: number[] = [];

    function traverse(node: BSTNodeClass<number>): void {
      values.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }

    traverse(this.root);
    return values;
  }

  public DFSPostOrder(): number[] {
    let values: number[] = [];

    function traverse(node: BSTNodeClass<number>): void {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      values.push(node.value);
    }

    traverse(this.root);
    return values;
  }

  public DFSInOrder(): number[] {
    let values: number[] = [];

    function traverse(node: BSTNodeClass<number>): void {
      if(node.left) traverse(node.left);
      values.push(node.value);
      if(node.right) traverse(node.right);
    }

    traverse(this.root);
    return values;
  }

  public traverseDFS(): number[] {
    const values: number[] = [];
    const stack: BSTNodeClass<number>[] = [];

    stack.push(this.root);
    while(stack.length) {
      const node: BSTNodeClass<number> = stack.pop();
      values.push(node.value);
      if(node.left) stack.push(node.left);
      if(node.right) stack.push(node.right);
    }
    return values;
  }
}

const bst = new BSTClass();
bst.insert(10);
bst.insert(12);
bst.insert(2);
bst.insert(3);
bst.insert(8);

console.log(bst.sum());
// console.log('preOrder', bst.DFSPreOrder());
// console.log('postOrder', bst.DFSPostOrder());
console.log('inOrder', bst.DFSInOrder());
console.log('iterativeDFS', bst.traverseDFS());