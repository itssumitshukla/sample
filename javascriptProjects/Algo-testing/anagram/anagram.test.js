const anagram = require("./anagram");

describe("Anagram", () => {
  it("should be a function", () => {
    expect(typeof anagram).toEqual("function");
  });
  it("should return a boolean", () => {
    expect(typeof anagram("ram", "arm")).toEqual("boolean");
  });
  it("should return true if anagram", () => {
    expect(anagram("ram", "arm")).toBeTruthy();
    expect(anagram("cinema", "iceman")).toBeTruthy();
    expect(anagram("dog", "god")).toBeTruthy();
  });
  it("should return false if not anagram", () => {
    expect(anagram("hello", "fello")).toBeFalse();
    expect(anagram("world", "twirl")).toBeFalse();
    expect(anagram("lost", "cost")).toBeFalse();
  });
});
