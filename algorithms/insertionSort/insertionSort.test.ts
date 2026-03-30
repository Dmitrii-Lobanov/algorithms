// insertionSort.test.ts
import { describe, it, expect } from "vitest";
import { insertionSort } from "./insertionSort";

describe("insertionSort", () => {
  it("should sort an unsorted array", () => {
    const arr = [5, 2, 9, 1, 5, 6];
    const result = insertionSort(arr);
    expect(result).toEqual([1, 2, 5, 5, 6, 9]);
  });

  it("should handle an already sorted array", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = insertionSort(arr);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle a reverse sorted array", () => {
    const arr = [5, 4, 3, 2, 1];
    const result = insertionSort(arr);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an array with duplicates", () => {
    const arr = [3, 1, 2, 3, 1];
    const result = insertionSort(arr);
    expect(result).toEqual([1, 1, 2, 3, 3]);
  });

  it("should handle an empty array", () => {
    const arr: number[] = [];
    const result = insertionSort(arr);
    expect(result).toEqual([]);
  });

  it("should handle a single element array", () => {
    const arr = [42];
    const result = insertionSort(arr);
    expect(result).toEqual([42]);
  });

  it("should sort negative numbers correctly", () => {
    const arr = [0, -1, 5, -3, 2];
    const result = insertionSort(arr);
    expect(result).toEqual([-3, -1, 0, 2, 5]);
  });

  it("should mutate the original array (in-place)", () => {
    const arr = [3, 2, 1];
    const result = insertionSort(arr);
    expect(result).toBe(arr); // same reference
    expect(arr).toEqual([1, 2, 3]);
  });
});
