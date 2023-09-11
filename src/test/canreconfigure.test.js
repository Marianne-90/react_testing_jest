import { describe, expect, it } from "vitest";

const canReConfigure = (from, to) => {
  if (typeof from !== "string") throw new Error("from should be a string");

  if (typeof to !== "string") throw new Error("from should be a string");

  const IS_SAME_LENGTH = from.length === to.length;
  const HAS_SAME_UNIQUE_LETTERS = new Set(from).size === new Set(to).size;

  const TRANSFOTMATIONS = {};

  for (let i = 0; i < from.length; i++) {
    let fromLetter = from[i];
    const toLetter = to[i];

    const STORED_LETTER = TRANSFOTMATIONS[fromLetter];

    if (STORED_LETTER && STORED_LETTER !== toLetter) return false;

    TRANSFOTMATIONS[fromLetter] = toLetter;
  }

  return HAS_SAME_UNIQUE_LETTERS && IS_SAME_LENGTH;
};

describe("canreconfigure", () => {
  //   it("should be a function", () => {
  //     expect(typeof canConfigure).toBe("function");
  //   });

  it("Should throw if first parameter is missing", () => {
    expect(() => canReConfigure()).toThrow();
  });

  it("Should throw if first parameter is not a String", () => {
    expect(() => canReConfigure(2)).toThrow();
  });

  it("Should throw if second parameter is not a String", () => {
    expect(() => canReConfigure("a")).toThrow();
  });

  it("Should return a boolean", () => {
    expect(canReConfigure("a", "b")).toBeTypeOf("boolean");
  });

  it("it should return false if strings provided have diferent lengths", () => {
    expect(canReConfigure("a", "bc")).toBe(false);
  });

  it("Should return false if string provided have diferent number of unique letters", () => {
    expect(canReConfigure("ac", "bb")).toBe(false);
  });

  it("Should return fales if strings have diferent order of transformation", () => {
    expect(canReConfigure("XBOX", "XXBO")).toBe(false);
  });
});
