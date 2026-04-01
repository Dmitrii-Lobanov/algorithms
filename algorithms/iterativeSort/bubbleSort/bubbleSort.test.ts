import { describe, it, expect } from 'vitest';
import { bubbleSort, swap } from './bubbleSort';

describe('swap', () => {
  it('should swap two elements in an array in place', () => {
    const arr = [1, 2, 3];
    swap(arr, 0, 2);
    expect(arr).toEqual([3, 2, 1]);
  });
});

describe('bubbleSort', () => {
  it('should sort an empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it('should sort an array with one element', () => {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it('should sort an already sorted array', () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort a reverse sorted array', () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort an array with positive numbers', () => {
    expect(bubbleSort([35, 12, 76, 32, 1, 12])).toEqual([1, 12, 12, 32, 35, 76]);
  });

  it('should sort an array with positive and negative numbers', () => {
    expect(bubbleSort([5, -1, 3, -10, 0, 7])).toEqual([-10, -1, 0, 3, 5, 7]);
  });

  it('should sort an array with decimal numbers', () => {
    expect(bubbleSort([5.5, -1.1, 3.3, -10.1, 0, 7.7])).toEqual([-10.1, -1.1, 0, 3.3, 5.5, 7.7]);
  });

  it('should mutate the original array and return it', () => {
    const arr = [3, 2, 1];
    const sorted = bubbleSort(arr);
    expect(sorted).toEqual([1, 2, 3]);
    expect(sorted).toBe(arr); // Check if it's the same reference
  });
});
