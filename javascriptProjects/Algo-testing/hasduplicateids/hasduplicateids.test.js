const hasDuplicateIds = require("./hasduplicateids");

describe("DOM Tree has Duplicate IDs", () => {
  it("Should be a function", () => {
    expect(typeof hasDuplicateIds).toEqual("function");
  });
  it("Should be return a boolean", () => {
    expect(typeof hasDuplicateIds()).toEqual("boolean");
  });
  it("Should return false if there is no root", () => {
    expect(typeof hasDuplicateIds()).toBeFalsy();
  });
  it("Should return true if there are duplicate ids", () => {
    //Create mock elements
    const root = document.createElement("div");
    const child1 = document.createElement("div");
    const child2 = document.createElement("div");
  });
});
