// fibonacci.test.ts
import { describe, it, expect } from "vitest";
import { fibonacci, fibonacciMemoized } from "./fibonacci";

describe("fibonacci", () => {
  it("should return correct values for small numbers", () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
  });

  it("should return correct values for larger numbers", () => {
    expect(fibonacci(10)).toBe(55);
    expect(fibonacci(15)).toBe(610);
  });

  it("should handle n = 0 and n = 1", () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
  });

  it("should not modify external state", () => {
    const result1 = fibonacci(6);
    const result2 = fibonacci(6);
    expect(result1).toBe(result2);
  });
});

describe("fibonacciMemoized", () => {
  it("should return correct values for small numbers", () => {
    expect(fibonacciMemoized(0)).toBe(0);
    expect(fibonacciMemoized(1)).toBe(1);
    expect(fibonacciMemoized(2)).toBe(1);
    expect(fibonacciMemoized(3)).toBe(2);
    expect(fibonacciMemoized(4)).toBe(3);
    expect(fibonacciMemoized(5)).toBe(5);
  });

  it("should return correct values for larger numbers", () => {
    expect(fibonacciMemoized(10)).toBe(55);
    expect(fibonacciMemoized(20)).toBe(6765);
  });

  it("should match non-memoized implementation", () => {
    for (let i = 0; i <= 15; i++) {
      expect(fibonacciMemoized(i)).toBe(fibonacci(i));
    }
  });

  it("should handle repeated calls consistently", () => {
    const results = [10, 10, 10].map((n) => fibonacciMemoized(n));
    expect(results.every((r) => r === 55)).toBe(true);
  });
});
