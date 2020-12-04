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
  
  find(value) {
    if(this.root === null) return 'The tree is empty';
    let current = this.root;
    let found = false;
    while(!found && current) {
      if (value < current.value) {
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
  
  // Breadth-first search
  BFS() {
    let queue = [];
    let values = [];
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
  
  // Depth-first search
  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root)
    return data;
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

