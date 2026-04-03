import { describe, it, expect } from "vitest";
import { StackArrayClass } from "./stackOnArrays";

describe("StackArrayClass (Min Stack - Array आधारित)", () => {
  it("should start empty", () => {
    const stack = new StackArrayClass<number>((a, b) => a - b);

    expect(stack.storage).toEqual([]);
    expect(stack.peek()).toBeUndefined();
    expect(stack.getMin()).toBeUndefined();
  });

  it("should push values and track min correctly", () => {
    const stack = new StackArrayClass<number>((a, b) => a - b);

    stack.push(3);
    expect(stack.getMin()).toBe(3);

    stack.push(10);
    expect(stack.getMin()).toBe(3);

    stack.push(-5);
    expect(stack.getMin()).toBe(-5);

    stack.push(7);
    expect(stack.getMin()).toBe(-5);
  });

  it("should pop values in LIFO order", () => {
    const stack = new StackArrayClass<number>((a, b) => a - b);

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  it("should return undefined when popping empty stack", () => {
    const stack = new StackArrayClass<number>((a, b) => a - b);

    expect(stack.pop()).toBeUndefined();
  });

  it("should peek correctly", () => {
    const stack = new StackArrayClass<number>((a, b) => a - b);

    expect(stack.peek()).toBeUndefined();

    stack.push(5);
    stack.push(8);

    expect(stack.peek()).toBe(8);

    stack.pop();
    expect(stack.peek()).toBe(5);
  });

  it("should update min correctly after pops", () => {
    const stack = new StackArrayClass<number>((a, b) => a - b);

    stack.push(5);
    stack.push(3);
    stack.push(7);
    stack.push(2);

    expect(stack.getMin()).toBe(2);

    stack.pop(); // remove 2
    expect(stack.getMin()).toBe(3);

    stack.pop(); // remove 7
    expect(stack.getMin()).toBe(3);

    stack.pop(); // remove 3
    expect(stack.getMin()).toBe(5);
  });

  it("should handle duplicate minimum values", () => {
    const stack = new StackArrayClass<number>((a, b) => a - b);

    stack.push(2);
    stack.push(2);
    stack.push(3);

    expect(stack.getMin()).toBe(2);

    stack.pop(); // remove 3
    expect(stack.getMin()).toBe(2);

    stack.pop(); // remove one 2
    expect(stack.getMin()).toBe(2);

    stack.pop(); // remove last 2
    expect(stack.getMin()).toBeUndefined();
  });

  it("should maintain correct internal structure", () => {
    const stack = new StackArrayClass<number>((a, b) => a - b);

    stack.push(3);
    stack.push(1);
    stack.push(2);

    expect(stack.storage).toEqual([
      { value: 3, min: 3 },
      { value: 1, min: 1 },
      { value: 2, min: 1 },
    ]);
  });
});
