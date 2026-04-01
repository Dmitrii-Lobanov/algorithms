import { describe, it, expect } from "vitest";
import { binarySearch, binarySearch2 } from "./binarySearch";

const implementations = [
  { name: "binarySearch (iterative)", fn: binarySearch },
  { name: "binarySearch2 (recursive)", fn: binarySearch2 },
];

implementations.forEach(({ name, fn }) => {
  describe(name, () => {
    it("should find target in the middle", () => {
      expect(fn([1, 3, 5, 7, 9], 5)).toBe(2);
    });

    it("should find target at the beginning", () => {
      expect(fn([1, 3, 5, 7, 9], 1)).toBe(0);
    });

    it("should find target at the end", () => {
      expect(fn([1, 3, 5, 7, 9], 9)).toBe(4);
    });

    it("should return -1 if target is not found", () => {
      expect(fn([1, 3, 5, 7, 9], 4)).toBe(-1);
    });

    it("should handle empty array", () => {
      expect(fn([], 10)).toBe(-1);
    });

    it("should handle single element array (found)", () => {
      expect(fn([42], 42)).toBe(0);
    });

    it("should handle single element array (not found)", () => {
      expect(fn([42], 10)).toBe(-1);
    });

    it("should handle negative numbers", () => {
      expect(fn([-10, -5, 0, 5, 10], -5)).toBe(1);
    });

    it("should handle duplicates (returns any valid index)", () => {
      const arr = [1, 2, 2, 2, 3];
      const index = fn(arr, 2);

      expect(index).toBeGreaterThanOrEqual(1);
      expect(index).toBeLessThanOrEqual(3);
      expect(arr[index]).toBe(2);
    });

    it("should not mutate the original array", () => {
      const arr = [1, 2, 3, 4, 5];
      const copy = [...arr];

      fn(arr, 3);

      expect(arr).toEqual(copy);
    });
  });
});
