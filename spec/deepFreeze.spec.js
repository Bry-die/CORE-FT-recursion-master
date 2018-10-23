const { expect } = require("chai");
const { deepFreeze } = require("../deepFreeze");

describe("deepFreeze", () => {
  it("should return frozen for flat array", () => {
    const result = Object.isFrozen(deepFreeze([1, 2]));
    const result2 = Object.isFrozen(deepFreeze({ name: "Jeff" }));
    expect(result).to.eql(true);
    expect(result2).to.eql(true);
  });
  it("should return true if objects are frozen at one nested level", () => {
    const result = deepFreeze([1, [1, 2]]);
    expect(result).to.be.frozen;
    expect(result[1]).to.be.frozen;
  });
  it("should return all objects frozen for mutliple levels of nesting", () => {
    const result = deepFreeze([1, [1, [1, [1]]]]);
    expect(result).to.be.frozen;
    expect(result[1]).to.be.frozen;
    expect(result[1][1]).to.be.frozen;
    expect(result[1][1][1]).to.be.frozen;
    const result2 = deepFreeze({
      name: "Zack",
      ob: { b: { a: 1 } }
    });
    expect(result2).to.be.frozen;
    expect(result2.ob).to.be.frozen;
    expect(result2.ob.b).to.be.frozen;
    expect(result2.ob.b.a).to.be.frozen;
  });
});
