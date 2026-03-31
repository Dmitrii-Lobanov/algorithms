import { describe, it, expect } from "vitest";
import { nestedAddition } from "./newAddition";

describe("nestedAddition", () => {
  it("should sum a flat array of numbers", () => {
    expect(nestedAddition([1, 2, 3, 4])).toBe(10);
  });

  it("should handle a single nested array", () => {
    expect(nestedAddition([1, [2, 3], 4])).toBe(10);
  });

  it("should handle deeply nested arrays", () => {
    expect(nestedAddition([1, [2, [3, [4]]]])).toBe(10);
  });

  it("should handle multiple nested arrays", () => {
    expect(nestedAddition([[1, 2], [3, 4], 5])).toBe(15);
  });

  it("should handle empty array", () => {
    expect(nestedAddition([])).toBe(0);
  });

  it("should handle arrays with empty nested arrays", () => {
    expect(nestedAddition([1, [], [2, []], 3])).toBe(6);
  });

  it("should handle negative numbers", () => {
    expect(nestedAddition([1, [-2, 3], -4])).toBe(-2);
  });

  it("should handle zeros correctly", () => {
    expect(nestedAddition([0, [0, [0]], 0])).toBe(0);
  });

  it("should handle single value in array", () => {
    expect(nestedAddition([42])).toBe(42);
  });

  it("should not mutate the original array", () => {
    const input = [1, [2, 3]];
    const copy = JSON.stringify(input);

    nestedAddition(input);

    expect(JSON.stringify(input)).toBe(copy);
  });
});
