import { describe, expect, it } from "vitest";
import { merge } from "../src/merge";

describe("merge", () => {
  it("merges all three collections in ascending order", () => {
    expect(merge([0, 3, 7], [1, 4, 8], [9, 6, 2])).toEqual([
      0, 1, 2, 3, 4, 6, 7, 8, 9
    ]);
  });

  it("preserves duplicate values", () => {
    expect(merge([0, 2, 2], [2, 3], [3, 2, 0])).toEqual([
      0, 0, 2, 2, 2, 2, 3, 3
    ]);
  });

  it("returns an empty array when all collections are empty", () => {
    expect(merge([], [], [])).toEqual([]);
  });

  it("handles a single nonempty collection", () => {
    expect(merge([1, 3], [], [])).toEqual([1, 3]);
    expect(merge([], [1, 3], [])).toEqual([1, 3]);
    expect(merge([], [], [3, 1])).toEqual([1, 3]);
  });

  it("does not modify its inputs", () => {
    const first = [1, 4];
    const second = [2, 5];
    const third = [6, 3];
    merge(first, second, third);
    expect(first).toEqual([1, 4]);
    expect(second).toEqual([2, 5]);
    expect(third).toEqual([6, 3]);
  });
});
