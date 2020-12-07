class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  
  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.values.push(node);
    
    let idx = this.values.length - 1;
    let element = this.values[idx];
    
    while(idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if(element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    
    if(this.values.length > 0) {
      this.values[0] = end;
    
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];

      while(true) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;

        if(leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if(leftChild.priority < element.priority) {
            swap = leftChildIdx;
          }
        }
        if(rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if(
            (!swap && rightChild.priority < element.priority) || 
            (swap && rightChild.priority < leftChild.priority)
          ) {
             swap = rightChildIdx; 
          }
        }
        if(swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
    
    
    
    return min;
  }
}

const queue = new PriorityQueue();
queue.enqueue('1', 1);
queue.enqueue('2', 2);
queue.enqueue('3', 3);
queue.values

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
