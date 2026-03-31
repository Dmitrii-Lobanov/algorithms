import { describe, it, expect } from "vitest";
import { quickSort } from "./quickSort";

describe("quickSort", () => {
  it("should sort an unsorted array", () => {
    expect(quickSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  });

  it("should handle already sorted arrays", () => {
    expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle reverse sorted arrays", () => {
    expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle arrays with duplicates", () => {
    expect(quickSort([3, 1, 2, 3, 1])).toEqual([1, 1, 2, 3, 3]);
  });

  it("should handle negative numbers", () => {
    expect(quickSort([0, -1, 5, -3, 2])).toEqual([-3, -1, 0, 2, 5]);
  });

  it("should handle empty array", () => {
    expect(quickSort([])).toEqual([]);
  });

  it("should handle single element array", () => {
    expect(quickSort([42])).toEqual([42]);
  });

  it("should not mutate the original array", () => {
    const arr = [3, 1, 2];
    const copy = [...arr];

    quickSort(arr);

    expect(arr).toEqual(copy);
  });

  it("should return a new array reference", () => {
    const arr = [3, 2, 1];
    const result = quickSort(arr);

    expect(result).not.toBe(arr);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should handle large arrays consistently", () => {
    const arr = Array.from({ length: 100 }, () =>
      Math.floor(Math.random() * 1000),
    );

    const result = quickSort(arr);
    const expected = [...arr].sort((a, b) => a - b);

    expect(result).toEqual(expected);
  });
});
