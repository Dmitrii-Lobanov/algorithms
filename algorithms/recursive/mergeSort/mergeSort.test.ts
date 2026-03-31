// merge.test.ts
import { describe, it, expect } from "vitest";
import { merge, mergeSort } from "./mergeSort";

describe("merge", () => {
  it("should merge two sorted arrays", () => {
    expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle arrays of different lengths", () => {
    expect(merge([1, 2], [3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle empty arrays", () => {
    expect(merge([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(merge([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  it("should handle duplicate values", () => {
    expect(merge([1, 2, 2], [2, 3])).toEqual([1, 2, 2, 2, 3]);
  });

  it("should handle negative numbers", () => {
    expect(merge([-3, -1, 2], [-2, 0, 3])).toEqual([-3, -2, -1, 0, 2, 3]);
  });

  it("should mutate the input arrays", () => {
    const arr1 = [1, 3];
    const arr2 = [2, 4];

    merge(arr1, arr2);

    expect(arr1.length).toBe(0);
    expect(arr2.length).toBe(1);
  });
});

describe("mergeSort", () => {
  it("should sort an unsorted array", () => {
    expect(mergeSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  });

  it("should handle already sorted arrays", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle reverse sorted arrays", () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle arrays with duplicates", () => {
    expect(mergeSort([3, 1, 2, 3, 1])).toEqual([1, 1, 2, 3, 3]);
  });

  it("should handle empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });

  it("should handle single element array", () => {
    expect(mergeSort([42])).toEqual([42]);
  });

  it("should handle negative numbers", () => {
    expect(mergeSort([0, -1, 5, -3, 2])).toEqual([-3, -1, 0, 2, 5]);
  });

  it("should not mutate the original array", () => {
    const arr = [3, 1, 2];
    const copy = [...arr];

    mergeSort(arr);

    expect(arr).toEqual(copy);
  });
});
