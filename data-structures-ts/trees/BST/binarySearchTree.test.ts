import { describe, it, expect, beforeEach } from "vitest";
import { BSTClass } from "./binarySearchTree";

describe("BSTClass", () => {
  let tree: BSTClass<number>;

  beforeEach(() => {
    tree = new BSTClass<number>();
    tree.insert(10).insert(5).insert(15).insert(3).insert(7);
  });

  it("should insert values correctly", () => {
    expect(tree.BFS()).toEqual([10, 5, 15, 3, 7]);
  });

  it("should find existing value", () => {
    const node = tree.find(7);
    expect(node?.value).toBe(7);
  });

  it("should return null for non-existing value", () => {
    expect(tree.find(999)).toBeNull();
  });

  it("should not insert duplicates", () => {
    tree.insert(10);
    expect(tree.BFS()).toEqual([10, 5, 15, 3, 7]);
  });

  it("BFS should return correct order", () => {
    expect(tree.BFS()).toEqual([10, 5, 15, 3, 7]);
  });

  it("DFS InOrder should return sorted values", () => {
    expect(tree.DFSInOrder()).toEqual([3, 5, 7, 10, 15]);
  });

  it("DFS PreOrder should return correct order", () => {
    expect(tree.DFSPreOrder()).toEqual([10, 5, 3, 7, 15]);
  });

  it("DFS PostOrder should return correct order", () => {
    expect(tree.DFSPostOrder()).toEqual([3, 7, 5, 15, 10]);
  });

  it("iterative DFS should match preorder", () => {
    expect(tree.traverseDFS()).toEqual(tree.DFSPreOrder());
  });

  describe("delete()", () => {
    it("should delete a leaf node", () => {
      tree.delete(3);
      expect(tree.DFSInOrder()).toEqual([5, 7, 10, 15]);
    });

    it("should delete node with one child", () => {
      tree.delete(5);
      expect(tree.DFSInOrder()).toEqual([3, 7, 10, 15]);
    });

    it("should delete node with two children", () => {
      tree.delete(10);
      expect(tree.DFSInOrder()).toEqual([3, 5, 7, 15]);
    });

    it("should handle deleting non-existing value", () => {
      tree.delete(999);
      expect(tree.DFSInOrder()).toEqual([3, 5, 7, 10, 15]);
    });
  });

  it("should work with custom comparator (objects)", () => {
    const objTree = new BSTClass<{ id: number }>((a, b) => a.id - b.id);

    objTree.insert({ id: 10 });
    objTree.insert({ id: 5 });
    objTree.insert({ id: 15 });

    const result = objTree.DFSInOrder().map((x) => x.id);

    expect(result).toEqual([5, 10, 15]);
  });

  it("should handle empty tree", () => {
    const emptyTree = new BSTClass<number>();

    expect(emptyTree.BFS()).toEqual([]);
    expect(emptyTree.DFSInOrder()).toEqual([]);
    expect(emptyTree.find(1)).toBeNull();
  });

  it("should support chaining", () => {
    const newTree = new BSTClass<number>();
    newTree.insert(1).insert(2).insert(3);

    expect(newTree.BFS()).toEqual([1, 2, 3]);
  });
});

describe("BST heightBFS", () => {
  it("should return 0 for an empty tree", () => {
    const bst = new BSTClass<number>();
    expect(bst.heightBFS()).toBe(0);
  });

  it("should return 1 for a single node tree", () => {
    const bst = new BSTClass<number>();
    bst.insert(10);

    expect(bst.heightBFS()).toBe(1);
  });

  it("should return correct height for a balanced tree", () => {
    const bst = new BSTClass<number>();

    //      10
    //     /  \
    //    5   15
    //   / \
    //  3   7

    [10, 5, 15, 3, 7].forEach((v) => bst.insert(v));

    expect(bst.heightBFS()).toBe(3);
  });

  it("should return correct height for a right-skewed tree", () => {
    const bst = new BSTClass<number>();

    // 10 -> 20 -> 30 -> 40

    [10, 20, 30, 40].forEach((v) => bst.insert(v));

    expect(bst.heightBFS()).toBe(4);
  });

  it("should return correct height for a left-skewed tree", () => {
    const bst = new BSTClass<number>();

    // 40 -> 30 -> 20 -> 10

    [40, 30, 20, 10].forEach((v) => bst.insert(v));

    expect(bst.heightBFS()).toBe(4);
  });

  it("should not increase height when inserting duplicate values", () => {
    const bst = new BSTClass<number>();

    bst.insert(10);
    bst.insert(10); // ignored

    expect(bst.heightBFS()).toBe(1);
  });

  it("should update height after deletions", () => {
    const bst = new BSTClass<number>();

    [10, 5, 15, 3, 7].forEach((v) => bst.insert(v));

    expect(bst.heightBFS()).toBe(3);

    bst.delete(3);
    bst.delete(7);

    // Now:
    //    10
    //   /  \
    //  5   15

    expect(bst.heightBFS()).toBe(2);
  });
});
