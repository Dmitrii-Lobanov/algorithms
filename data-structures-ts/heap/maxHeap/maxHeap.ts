export class MaxHeap {
  private heap: number[] = [];

  private getParentIndex(i: number) {
    return Math.floor((i - 1) / 2);
  }

  private getLeftChildIndex(i: number) {
    return 2 * i + 1;
  }

  private getRightChildIndex(i: number) {
    return 2 * i + 2;
  }

  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  public insert(value: number): void {
    this.heap.push(value);
    this.bubbleUp();
  }

  private bubbleUp(): void {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.heap[parentIndex] >= this.heap[index]) break;

      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  public extractMax(): number | undefined {
    if (!this.heap.length) return undefined;

    const max = this.heap[0];
    const end = this.heap.pop()!;

    if (this.heap.length) {
      this.heap[0] = end;
      this.sinkDown();
    }

    return max;
  }

  private sinkDown(): void {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      const left = this.getLeftChildIndex(index);
      const right = this.getRightChildIndex(index);

      let largest = index;

      if (left < length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }

      if (right < length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }

      if (largest === index) break;

      this.swap(index, largest);
      index = largest;
    }
  }

  public peek(): number | undefined {
    return this.heap[0];
  }

  public size(): number {
    return this.heap.length;
  }

  public toArray(): number[] {
    return [...this.heap];
  }

  public buildHeap(arr: number[]): void {
    this.heap = [...arr];

    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  private heapifyDown(index: number): void {
    const length = this.heap.length;

    while (true) {
      const left = this.getLeftChildIndex(index);
      const right = this.getRightChildIndex(index);

      let largest = index;

      if (left < length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }

      if (right < length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }

      if (largest === index) break;

      this.swap(index, largest);
      index = largest;
    }
  }

  public static heapSort(arr: number[]): number[] {
    const heap = new MaxHeap();
    heap.buildHeap(arr);

    const result: number[] = [];

    while (heap.size()) {
      result.unshift(heap.extractMax()!);
    }

    return result;
  }
}
