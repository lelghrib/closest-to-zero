import closestToZero from "../src/closestToZero";

describe("closestToZero", () => {
  it("should return 0 when input is undefined", () => {
    expect(closestToZero(undefined)).toBe(0);
  });

  it("should return 0 when input is empty", () => {
    expect(closestToZero([])).toBe(0);
  });

  it("should return 5 when input is [8, 5, 10]", () => {
    expect(closestToZero([8, 5, 10])).toBe(5);
  });

  it("should return -1 when input is [5, 4, -9, 6, -10, -1, 8]", () => {
    expect(closestToZero([5, 4, -9, 6, -10, -1, 8])).toBe(-1);
  });

  it("should return 2 when input is [8, 2, 3, -2]", () => {
    expect(closestToZero([8, 2, 3, -2])).toBe(2);
  });

  it("should return 2 when input is [8, -2, 3, 2]", () => {
    expect(closestToZero([8, -2, 3, 2])).toBe(2);
  });

  it("should return 0 when input is [2, 0]", () => {
    expect(closestToZero([2, 0])).toBe(0);
  });
});
