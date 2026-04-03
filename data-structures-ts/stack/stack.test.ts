import { describe, it, expect } from "vitest";
import { StackClass } from "./stack";

describe("Min Stack (O(1) getMin)", () => {
  it("should return undefined for getMin on empty stack", () => {
    const stack = new StackClass();
    expect(stack.getMin()).toBeUndefined();
  });

  it("should push values and track minimum correctly", () => {
    const stack = new StackClass();

    stack.push(3);
    expect(stack.getMin()).toBe(3);

    stack.push(5);
    expect(stack.getMin()).toBe(3);

    stack.push(2);
    expect(stack.getMin()).toBe(2);

    stack.push(1);
    expect(stack.getMin()).toBe(1);
  });

  it("should handle duplicate minimum values correctly", () => {
    const stack = new StackClass();

    stack.push(2);
    stack.push(2);
    stack.push(3);

    expect(stack.getMin()).toBe(2);

    stack.pop(); // remove 3
    expect(stack.getMin()).toBe(2);

    stack.pop(); // remove 2
    expect(stack.getMin()).toBe(2); // still 2 because duplicate exists

    stack.pop(); // remove last 2
    expect(stack.getMin()).toBeUndefined();
  });

  it("should update minimum correctly after pops", () => {
    const stack = new StackClass();

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

  it("should return values in LIFO order", () => {
    const stack = new StackClass();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  it("should return undefined when popping empty stack", () => {
    const stack = new StackClass();
    expect(stack.pop()).toBeUndefined();
  });

  it("should peek correctly", () => {
    const stack = new StackClass();

    expect(stack.peek()).toBeUndefined();

    stack.push(10);
    stack.push(20);

    expect(stack.peek()).toBe(20);

    stack.pop();
    expect(stack.peek()).toBe(10);
  });

  it("should traverse correctly", () => {
    const stack = new StackClass();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.traverse()).toEqual([3, 2, 1]);
  });
});
