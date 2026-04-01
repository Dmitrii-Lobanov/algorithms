import { describe, it, expect } from "vitest";
import { getDigit, digitCount, longestNumber, radixSort } from "./radixSort";

describe("getDigit", () => {
  it("should get the correct digit at position", () => {
    expect(getDigit(1234, 0)).toBe(4);
    expect(getDigit(1234, 1)).toBe(3);
    expect(getDigit(1234, 2)).toBe(2);
    expect(getDigit(1234, 3)).toBe(1);
  });

  it("should return 0 for out-of-range digits", () => {
    expect(getDigit(123, 5)).toBe(0);
  });

  it("should handle negative numbers", () => {
    expect(getDigit(-123, 0)).toBe(3);
    expect(getDigit(-123, 1)).toBe(2);
  });

  it("should handle zero", () => {
    expect(getDigit(0, 0)).toBe(0);
  });
});

describe("digitCount", () => {
  it("should count digits correctly", () => {
    expect(digitCount(1)).toBe(1);
    expect(digitCount(123)).toBe(3);
    expect(digitCount(9999)).toBe(4);
  });

  it("should handle zero correctly", () => {
    expect(digitCount(0)).toBe(1);
  });

  it("should handle negative numbers", () => {
    expect(digitCount(-12345)).toBe(5);
  });
});

describe("longestNumber", () => {
  it("should return max digit length in array", () => {
    expect(longestNumber([1, 22, 333, 4444])).toBe(4);
  });

  it("should handle single element array", () => {
    expect(longestNumber([123])).toBe(3);
  });

  it("should handle empty array", () => {
    expect(longestNumber([])).toBe(0);
  });

  it("should handle negative numbers", () => {
    expect(longestNumber([-1, -22, -333])).toBe(3);
  });
});

describe("radixSort", () => {
  it("should sort numbers correctly", () => {
    expect(radixSort([170, 45, 75, 90, 802, 24, 2, 66])).toEqual([
      2, 24, 45, 66, 75, 90, 170, 802,
    ]);
  });

  it("should handle already sorted array", () => {
    expect(radixSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle reverse sorted array", () => {
    expect(radixSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle duplicates", () => {
    expect(radixSort([3, 1, 2, 3, 1])).toEqual([1, 1, 2, 3, 3]);
  });

  it("should handle empty array", () => {
    expect(radixSort([])).toEqual([]);
  });

  it("should handle single element array", () => {
    expect(radixSort([42])).toEqual([42]);
  });

  it("should handle zeros", () => {
    expect(radixSort([0, 0, 0])).toEqual([0, 0, 0]);
  });

  it("should not mutate original array reference (returns new array)", () => {
    const arr = [3, 1, 2];
    const result = radixSort(arr);

    expect(result).not.toBe(arr);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should match built-in sort for random arrays", () => {
    const arr = Array.from({ length: 50 }, () =>
      Math.floor(Math.random() * 1000),
    );

    const result = radixSort([...arr]);
    const expected = [...arr].sort((a, b) => a - b);

    expect(result).toEqual(expected);
  });
});
