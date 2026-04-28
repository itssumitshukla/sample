const fizzBuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
  it("should be a function", () => {
    expect(typeof fizzBuzz).toEqual("function");
  });
});
