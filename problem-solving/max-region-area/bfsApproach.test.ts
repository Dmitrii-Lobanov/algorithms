import { describe, it, expect } from "vitest";
import { findMaxRegionArea } from "./bfsApproach";

describe("findMaxRegionArea", () => {
  it("returns 0 for a matrix with no 1s", () => {
    const matr = [
      [0, 0],
      [0, 0],
    ];
    expect(findMaxRegionArea(matr)).toBe(0);
  });

  it("returns 1 for a single cell with 1", () => {
    const matr = [[1]];
    expect(findMaxRegionArea(matr)).toBe(1);
  });

  it("finds a simple horizontal region", () => {
    const matr = [[1, 1, 1]];
    expect(findMaxRegionArea(matr)).toBe(3);
  });

  it("finds a simple vertical region", () => {
    const matr = [[1], [1], [1]];
    expect(findMaxRegionArea(matr)).toBe(3);
  });

  it("counts diagonally connected cells as part of the same region", () => {
    const matr = [
      [1, 0],
      [0, 1],
    ];
    // diagonal connection → single region
    expect(findMaxRegionArea(matr)).toBe(2);
  });

  it("finds the largest region among multiple regions", () => {
    const matr = [
      [1, 0, 0, 1],
      [1, 1, 0, 0],
      [0, 0, 1, 1],
    ];
    // regions: size 3 (left), size 2 (right-bottom)
    expect(findMaxRegionArea(matr)).toBe(5);
  });

  it("handles complex connected regions", () => {
    const matr = [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 1],
    ];
    // all connected diagonally → 5
    expect(findMaxRegionArea(matr)).toBe(5);
  });

  it("handles non-square matrices", () => {
    const matr = [
      [1, 1, 0, 0],
      [0, 1, 1, 0],
    ];
    expect(findMaxRegionArea(matr)).toBe(4);
  });

  it("does not revisit cells (ensures no double counting)", () => {
    const matr = [
      [1, 1],
      [1, 1],
    ];
    expect(findMaxRegionArea(matr)).toBe(4);
  });

  it("handles isolated single cells correctly", () => {
    const matr = [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ];
    expect(findMaxRegionArea(matr)).toBe(1);
  });

  it("handles large connected region", () => {
    const matr = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ];
    expect(findMaxRegionArea(matr)).toBe(9);
  });
});
