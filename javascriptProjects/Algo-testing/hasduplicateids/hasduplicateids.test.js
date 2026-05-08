const hasDuplicateIds = require("./hasduplicateids");

describe("DOM Tree has Duplicate IDs", () => {
  it("Should be a function", () => {
    expect(typeof hasDuplicateIds).toEqual("function");
  });
  it("Should be return a boolean", () => {
    expect(typeof hasDuplicateIds()).toEqual("boolean");
  });
});
