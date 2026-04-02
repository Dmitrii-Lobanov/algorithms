import { describe, it, expect, beforeEach, vi } from "vitest";
import { SinglyLinkedListClass } from "./singlyLinkedList";

describe("SinglyLinkedListClass", () => {
  let list: SinglyLinkedListClass<number>;

  beforeEach(() => {
    list = new SinglyLinkedListClass<number>();
  });

  it("should initialize empty list", () => {
    expect(list.length).toBe(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  it("push should add elements to the end", () => {
    list.push(1).push(2);

    expect(list.length).toBe(2);
    expect(list.head?.value).toBe(1);
    expect(list.tail?.value).toBe(2);
  });

  it("pop should remove last element", () => {
    list.push(1).push(2).push(3);

    const removed = list.pop();

    expect(removed?.value).toBe(3);
    expect(list.tail?.value).toBe(2);
    expect(list.length).toBe(2);
  });

  it("shift should remove first element", () => {
    list.push(1).push(2);

    const removed = list.shift();

    expect(removed?.value).toBe(1);
    expect(list.head?.value).toBe(2);
    expect(list.length).toBe(1);
  });

  it("unshift should add element to beginning", () => {
    list.push(2);
    list.unshift(1);

    expect(list.head?.value).toBe(1);
    expect(list.length).toBe(2);
  });

  it("get should return correct node", () => {
    list.push(1).push(2).push(3);

    expect(list.get(1)?.value).toBe(2);
    expect(list.get(99)).toBeNull();
  });

  it("set should update node value", () => {
    list.push(1).push(2);

    const result = list.set(1, 5);

    expect(result).toBe(true);
    expect(list.get(1)?.value).toBe(5);
  });

  it("insert should insert at index", () => {
    list.push(1).push(3);

    const result = list.insert(1, 2);

    expect(result).toBe(true);
    expect(list.traverse()).toEqual([1, 2, 3]);
  });

  it("remove should remove node at index", () => {
    list.push(1).push(2).push(3);

    const removed = list.remove(1);

    expect(removed?.value).toBe(2);
    expect(list.traverse()).toEqual([1, 3]);
  });

  it("reverse should reverse the list", () => {
    list.push(1).push(2).push(3);

    list.reverse();

    expect(list.traverse()).toEqual([3, 2, 1]);
    expect(list.head?.value).toBe(3);
    expect(list.tail?.value).toBe(1);
  });

  it("traverse should return all values", () => {
    list.push(1).push(2).push(3);

    expect(list.traverse()).toEqual([1, 2, 3]);
  });

  it("sum should return total (number list only)", () => {
    list.push(1).push(2).push(3);

    expect(list.sum()).toBe(6);
  });

  it("removeDuplicates should remove duplicates", () => {
    list.push(1).push(2).push(2).push(3).push(1);

    list.removeDuplicates();

    expect(list.traverse()).toEqual([1, 2, 3]);
  });

  it("pop on empty list should return null", () => {
    expect(list.pop()).toBeNull();
  });

  it("shift on empty list should return null", () => {
    expect(list.shift()).toBeNull();
  });

  it("print should call console.log", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});

    list.push(1).push(2);
    list.print();

    expect(spy).toHaveBeenCalledWith([1, 2]);

    spy.mockRestore();
  });
});
