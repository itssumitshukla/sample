const palindrome = require("./palindrome");

describe("Palindrome", () => {
  it("should be a function", () => {
    expect(typeof palindrome).toEqual("function");
  });
  it("should return a string", () => {
    expect(typeof palindrome("hello")).toEqual("boolean");
  });
  it("it should return a reversed string", () => {});
});
