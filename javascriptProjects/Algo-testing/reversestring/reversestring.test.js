const reverseString = require("./reversestring");

describe("Reverse String", () => {
  it("should be a function", () => {
    expect(typeof reverseString).toEqual("function");
  });
  it("should return a string", () => {
    expect(typeof reverseString("hello")).toEqual("string");
  });
  it("it should return a reversed string", () => {
    expect(reverseString("hello")).toEqual("olleh");
    expect(reverseString("bye")).toEqual("eyb");
    expect(reverseString("wow")).toEqual("wow");
    expect(reverseString("hello world")).toEqual("dlrow olleh");
  });
});
