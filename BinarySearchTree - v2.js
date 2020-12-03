class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  insert(value) {
    const node = new Node(value);
    if(!this.root) {
      this.root = node;
      return this;
    }
    
    let current = this.root;
    while(true) {
      if(value === current.value) return 'This value is already exists';
      if(value < current.value) {
        if(!current.left) {
          current.left = node;
          return this;
        } else {
          current = current.left;
        }
      } else if(value > current.value) {
        if(!current.right) {
          current.right = node;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

