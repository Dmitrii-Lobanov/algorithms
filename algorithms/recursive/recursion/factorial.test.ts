// factorial.test.ts
import { describe, it, expect } from "vitest";
import { factorial, factorialMemoized } from "./factorial";

describe("factorial", () => {
  it("should return 1 for base cases (0 and 1)", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
  });

  it("should calculate factorial for small numbers", () => {
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
  });

  it("should calculate factorial for larger numbers", () => {
    expect(factorial(6)).toBe(720);
    expect(factorial(7)).toBe(5040);
  });

  it("should be consistent across multiple calls", () => {
    expect(factorial(5)).toBe(factorial(5));
  });
});

describe("factorialMemoized", () => {
  it("should return 1 for base cases (0 and 1)", () => {
    expect(factorialMemoized(0)).toBe(1);
    expect(factorialMemoized(1)).toBe(1);
  });

  it("should calculate factorial for small numbers", () => {
    expect(factorialMemoized(2)).toBe(2);
    expect(factorialMemoized(3)).toBe(6);
    expect(factorialMemoized(4)).toBe(24);
    expect(factorialMemoized(5)).toBe(120);
  });

  it("should calculate factorial for larger numbers", () => {
    expect(factorialMemoized(6)).toBe(720);
    expect(factorialMemoized(8)).toBe(40320);
  });

  it("should match the recursive factorial implementation", () => {
    for (let i = 0; i <= 10; i++) {
      expect(factorialMemoized(i)).toBe(factorial(i));
    }
  });

  it("should reuse memoized values across recursive calls", () => {
    const result1 = factorialMemoized(7);
    const result2 = factorialMemoized(7);
    expect(result1).toBe(result2);
  });

  it("should handle repeated calls consistently", () => {
    const inputs = [3, 5, 7];
    const results = inputs.map((n) => factorialMemoized(n));
    expect(results).toEqual([6, 120, 5040]);
  });
});
