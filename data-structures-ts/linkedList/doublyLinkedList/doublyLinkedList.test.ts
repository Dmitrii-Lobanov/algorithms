import { describe, it, expect, beforeEach } from "vitest";
import { DoublyLinkedList } from "./doublyLinkedList";

describe("DoublyLinkedList", () => {
  let list: DoublyLinkedList<number>;

  beforeEach(() => {
    list = new DoublyLinkedList<number>(10);
  });

  it("should initialize correctly", () => {
    expect(list.head?.value).toBe(10);
    expect(list.tail?.value).toBe(10);
    expect(list.length).toBe(1);
  });

  it("append should add element to the end", () => {
    list.append(20).append(30);

    expect(list.tail?.value).toBe(30);
    expect(list.length).toBe(3);
    expect(list.printList()).toEqual([10, 20, 30]);
  });

  it("prepend should add element to the beginning", () => {
    list.prepend(5);

    expect(list.head?.value).toBe(5);
    expect(list.length).toBe(2);
    expect(list.printList()).toEqual([5, 10]);
  });

  it("get should return correct node", () => {
    list.append(20).append(30);

    expect(list.get(1)?.value).toBe(20);
    expect(list.get(99)).toBeNull();
  });

  it("set should update value", () => {
    list.append(20);

    const result = list.set(1, 99);

    expect(result).toBe(true);
    expect(list.get(1)?.value).toBe(99);
  });

  it("insert should insert at index", () => {
    list.append(30);

    list.insert(1, 20);

    expect(list.printList()).toEqual([10, 20, 30]);
    expect(list.length).toBe(3);
  });

  it("insert at beginning should prepend", () => {
    list.insert(0, 5);

    expect(list.printList()).toEqual([5, 10]);
  });

  it("insert beyond length should append", () => {
    list.insert(10, 50);

    expect(list.tail?.value).toBe(50);
  });

  it("remove should remove middle element", () => {
    list.append(20).append(30);

    list.remove(1);

    expect(list.printList()).toEqual([10, 30]);
    expect(list.length).toBe(2);
  });

  it("remove first element", () => {
    list.append(20);

    list.remove(0);

    expect(list.head?.value).toBe(20);
    expect(list.length).toBe(1);
  });

  it("remove last element", () => {
    list.append(20).append(30);

    list.remove(2);

    expect(list.tail?.value).toBe(20);
    expect(list.printList()).toEqual([10, 20]);
  });

  it("reverse should reverse the list", () => {
    list.append(20).append(30);

    list.reverse();

    expect(list.printList()).toEqual([30, 20, 10]);
    expect(list.head?.value).toBe(30);
    expect(list.tail?.value).toBe(10);
  });

  it("should be iterable", () => {
    list.append(20).append(30);

    const values = [...list];

    expect(values).toEqual([10, 20, 30]);
  });

  it("traverseToIndex should return correct node", () => {
    list.append(20).append(30);

    expect(list.traverseToIndex(2)?.value).toBe(30);
    expect(list.traverseToIndex(-1)).toBeNull();
  });

  it("remove on single element list", () => {
    list.remove(0);

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.length).toBe(0);
  });

  it("should handle multiple chained operations", () => {
    list.append(20).prepend(5).insert(1, 15).remove(2);

    expect(list.printList()).toEqual([5, 15, 20]);
  });
});
