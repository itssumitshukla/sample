const palindrome = require("./palindrome");

describe("Palindrome", () => {
  it("should be a function", () => {
    expect(typeof palindrome).toEqual("function");
  });
  it("should return a string", () => {
    expect(typeof palindrome("hello")).toEqual("boolean");
  });
  it("it should return a true if it is a palindrome", () => {
    expect(palindrome("kayak")).toBeTruthy();
    expect(palindrome("rotator")).toBeTruthy();
    expect(palindrome("wow")).toBeTruthy();
  });
  it("it should return a false if it not a palindrome", () => {
    expect(palindrome("hello")).toBeFalse();
    expect(palindrome("world")).toBeFalse();
    expect(palindrome("bye")).toBeFalse();
  });
});
