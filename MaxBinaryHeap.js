class MaxBinaryHeap {
  constructor() {
    this.values = [41,39,33,18,27,12];
  }
  
  insert(value) {
    this.values.push(value);
    
    let idx = this.values.length - 1;
    
    while(idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if(value <= parent) break;
      this.values[parentIdx] = value;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  
  extractMax() {
    const max = this.values[0];
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
          if(leftChild > element) {
            swap = leftChildIdx;
          }
        }
        if(rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if(
            (!swap && rightChild > element) || 
            (swap && rightChild > leftChild)
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
    
    
    
    return max;
  }
}

const heap = new MaxBinaryHeap();
heap.insert(55);
heap.values;

heap.extractMax();
heap.extractMax();
