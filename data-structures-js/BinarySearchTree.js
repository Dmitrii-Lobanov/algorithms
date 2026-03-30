function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BST() {
  this.root = null;
  
  this.add = function(data) {
    const node = this.root;
    if(node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if(data < node.value) {
          if(node.left === null) {
            node.left = new Node(data);
            return;
          } else if(node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.value) {
          if(node.right === null) {
            node.right = new Node(data);
            return;
          } else if(node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      }
      return searchTree(node);
    }
  }
  
  this.findMin = function() {
    if (!this.root) return null;

    let current = this.root;
    while(current.left !== null) {
      current = current.left;
    }
    return current.value;
  };

  this.findMax = function() {
    if(!this.root) return null;

    let current = this.root;
    while(current.right !== null) {
      current = current.right;
    }
    return current.value;
  };
  
  this.isPresent = function(data) {
    if(!this.root) return false;
    let current = this.root;

    while(current) {
      if(data === current.value) {
        return true;
      }
      if(data < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  };
  
  this.findMinHeight = function(node = this.root) {
    if(!node) return null;
    
    const left = this.findMinHeight(node.left);
    const right = this.findMinHeight(node.right);
    
    if(left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  };
  
  this.findMaxHeight = function(node = this.root) {
    if(!node) return null;
    
    const left = this.findMaxHeight(node.left);
    const right = this.findMaxHeight(node.right);
    
    if(left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  };
  
  this.isBalanced = function() {
    return (this.findMinHeight()  >= this.findMaxHeight() - 1);
  };
  
  // Begin the search at the left-most node and end at the right-most node
  this.inOrder = function() {
    if(!this.root) return null;
    
    let result = [];
    function traverseInOrder(node) {
      node.left && traverseInOrder(node.left);
      result.push(node.value);
      node.right && traverseInOrder(node.right);
    }
    
    traverseInOrder(this.root);
    return result;
  };
  
  // Explore all the roots before the leaves
  this.preOrder = function() {
    if(!this.root) return null;
    
    let result = [];
    function traversePreOrder(node) {
      result.push(node.value);
      node.left && traversePreOrder(node.left);
      node.right && traversePreOrder(node.right);
    }
    
    traversePreOrder(this.root);
    return result;
  };
  
  // Explore all the leaves before the roots
  this.postOrder = function() {
    if(!this.root) return null;
    
    let result = [];
    function traversePostOrder(node) {
      node.left && traversePostOrder(node.left);
      node.right && traversePostOrder(node.right);
      result.push(node.value);
    }
    
    traversePostOrder(this.root);
    return result;
  };
  
  // Breadth first search (left to right)
  this.levelOrder = function() {
    if(!this.root) return null;
    
    let result = [];
    let Q = [];
    
    Q.push(this.root);
    while(!!Q.length) {
      const node = Q.shift();
      result.push(node.value);
      if(!!node.left) {
        Q.push(node.left);
      }
      if(!!node.right) {
      Q.push(node.right);
      }
    }  
    return result;
  };
  
  // Breadth first search (right to left)
  this.reverseLevelOrder = function() {
    if(!this.root) return null;
    
    let result = [];
    let Q = [];
    
    Q.push(this.root);
    while(!!Q.length) {
      const node = Q.shift();
      result.push(node.value);
      if(!!node.right) {
      Q.push(node.right);
      }
      if(!!node.left) {
        Q.push(node.left);
      }
    }
    return result;
  };
  
  this.find = function(data) {
    let current = this.root;
    while(current.value !== data) {
      if(data < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
      if(!current) return null;
    }
    
    return current;
  };
  
  this.remove = function(data) {
    function removeNode(node, data) {
      if (!node) return null;
      console.log(node.value);
      if (node.value === data) {
        if(!node.left && !node.right) return null;
        if(!node.left) return node.right;
        if(!node.right) return node.left;
        
        // Node has two children
        let tempNode = node.right;
        while(!!tempNode.left) {
          tempNode = tempNode.left;
        }
        node.value = tempNode.value;
        node.right = removeData(node.right, tempNode.value);
        return node;
      } else if(data < node.value) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  };
}

function isBST(tree) {
  if(!tree.root) return false;
  return checkTree(tree.root);
}

function checkTree(node) {
  let isBST = true;
  if(!!node.left) {
    const left = node.left;
    if(left.value > node.value) {
      isBST = false;
    } else {
      checkTree(left);
    }
  }
  if(!!node.right) {
    const right = node.right;
    if(right.value < node.value) {
      isBST = false;
    } else {
      checkTree(right);
    }
  }
  return isBST;
}

const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst)

bst.findMin()
bst.findMax()

bst.isPresent(18)
isBST(bst)
bst.findMinHeight()
bst.findMaxHeight()
bst.isBalanced()
bst.inOrder()
bst.preOrder()
bst.postOrder()
bst.levelOrder();
bst.reverseLevelOrder();
bst.remove(17);
