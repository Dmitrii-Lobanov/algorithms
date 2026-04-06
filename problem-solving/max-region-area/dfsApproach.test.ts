import { describe, it, expect } from "vitest";
import { findMaxRegionArea } from "./dfsApproach";

describe("findMaxRegionArea (DFS version)", () => {
  it("returns 0 when matrix has no 1s", () => {
    const matr = [
      [0, 0],
      [0, 0],
    ];
    expect(findMaxRegionArea(matr)).toBe(0);
  });

  it("returns 1 for a single cell matrix with 1", () => {
    expect(findMaxRegionArea([[1]])).toBe(1);
  });

  it("returns correct area for a single isolated 1", () => {
    const matr = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    expect(findMaxRegionArea(matr)).toBe(1);
  });

  it("handles horizontal connections", () => {
    const matr = [[1, 1, 1, 1]];
    expect(findMaxRegionArea(matr)).toBe(4);
  });

  it("handles vertical connections", () => {
    const matr = [[1], [1], [1], [1]];
    expect(findMaxRegionArea(matr)).toBe(4);
  });

  it("counts diagonal connections as part of the same region", () => {
    const matr = [
      [1, 0],
      [0, 1],
    ];
    expect(findMaxRegionArea(matr)).toBe(2);
  });

  it("finds the largest region among multiple regions", () => {
    const matr = [
      [1, 0, 0, 1],
      [1, 1, 0, 0],
      [0, 0, 1, 1],
    ];
    expect(findMaxRegionArea(matr)).toBe(5);
  });

  it("handles complex diagonally connected region", () => {
    const matr = [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 1],
    ];
    expect(findMaxRegionArea(matr)).toBe(5);
  });

  it("handles non-square matrices", () => {
    const matr = [
      [1, 1, 0, 0],
      [0, 1, 1, 0],
    ];
    expect(findMaxRegionArea(matr)).toBe(4);
  });

  it("handles multiple small isolated regions", () => {
    const matr = [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ];
    expect(findMaxRegionArea(matr)).toBe(1);
  });

  it("handles fully connected matrix", () => {
    const matr = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ];
    expect(findMaxRegionArea(matr)).toBe(9);
  });

  it("does not double-count visited cells", () => {
    const matr = [
      [1, 1],
      [1, 1],
    ];
    expect(findMaxRegionArea(matr)).toBe(4);
  });

  it("handles L-shaped region", () => {
    const matr = [
      [1, 0],
      [1, 1],
    ];
    expect(findMaxRegionArea(matr)).toBe(3);
  });

  it("handles large sparse matrix", () => {
    const matr = [
      [1, 0, 0, 0, 1],
      [0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0],
    ];
    expect(findMaxRegionArea(matr)).toBe(3);
  });
});
