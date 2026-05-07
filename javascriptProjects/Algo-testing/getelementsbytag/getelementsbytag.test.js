const getElementsByTag = require("./getelementsbytag");

describe("Get Elements By Tag", () => {
  it("should be a function", () => {
    expect(typeof getElementsByTag).toEqual("function");
  });
  it("should return an array", () => {
    expect(Array.isArray(getElementsByTag())).toEqual(true);
  });
});
