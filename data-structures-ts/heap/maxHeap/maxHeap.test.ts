import { describe, it, expect } from "vitest";
import { MaxHeap } from "./maxHeap";

describe("MaxHeap", () => {
  it("should insert and maintain max at root", () => {
    const heap = new MaxHeap();

    heap.insert(10);
    heap.insert(5);
    heap.insert(20);
    heap.insert(15);

    expect(heap.peek()).toBe(20);
  });

  it("should extract max correctly", () => {
    const heap = new MaxHeap();

    [10, 5, 20, 15].forEach((v) => heap.insert(v));

    expect(heap.extractMax()).toBe(20);
    expect(heap.extractMax()).toBe(15);
    expect(heap.extractMax()).toBe(10);
    expect(heap.extractMax()).toBe(5);
  });

  it("should return undefined when extracting from empty heap", () => {
    const heap = new MaxHeap();
    expect(heap.extractMax()).toBeUndefined();
  });

  it("should maintain heap property after multiple operations", () => {
    const heap = new MaxHeap();

    heap.insert(3);
    heap.insert(1);
    heap.insert(6);
    heap.insert(5);
    heap.insert(2);
    heap.insert(4);

    expect(heap.peek()).toBe(6);

    heap.extractMax(); // remove 6
    expect(heap.peek()).toBe(5);

    heap.insert(7);
    expect(heap.peek()).toBe(7);
  });

  it("should build heap from array correctly", () => {
    const heap = new MaxHeap();

    heap.buildHeap([3, 1, 6, 5, 2, 4]);

    expect(heap.peek()).toBe(6);
    expect(heap.size()).toBe(6);
  });

  it("should return elements in descending order via extractMax", () => {
    const heap = new MaxHeap();

    [3, 1, 6, 5, 2, 4].forEach((v) => heap.insert(v));

    const result: number[] = [];

    while (heap.size()) {
      result.push(heap.extractMax()!);
    }

    expect(result).toEqual([6, 5, 4, 3, 2, 1]);
  });
});

describe("Heap Sort", () => {
  it("should sort an array in ascending order", () => {
    const arr = [5, 3, 8, 1, 2];

    const sorted = MaxHeap.heapSort(arr);

    expect(sorted).toEqual([1, 2, 3, 5, 8]);
  });

  it("should handle empty array", () => {
    expect(MaxHeap.heapSort([])).toEqual([]);
  });

  it("should handle single element array", () => {
    expect(MaxHeap.heapSort([42])).toEqual([42]);
  });

  it("should handle already sorted array", () => {
    const arr = [1, 2, 3, 4, 5];

    expect(MaxHeap.heapSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle reverse sorted array", () => {
    const arr = [5, 4, 3, 2, 1];

    expect(MaxHeap.heapSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle duplicates", () => {
    const arr = [3, 1, 2, 3, 1];

    expect(MaxHeap.heapSort(arr)).toEqual([1, 1, 2, 3, 3]);
  });
});
