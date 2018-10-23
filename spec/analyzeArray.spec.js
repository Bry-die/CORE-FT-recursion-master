const { expect } = require("chai");
const { analyzeArray } = require("../analyzeArray");
const { assert } = require("chai");
const sinon = require("sinon");

describe("analyzeArray", () => {
  let spy = sinon.spy(console, "log");
  it("given an empty array should log a collection name followed by index 0", () => {
    analyzeArray("Bryan", []);
    assert(spy.calledWith("Bryan.0:"));
  });
  it("finds path for a single item in a flat array", () => {
    analyzeArray("Frank", ["toy"]);
    assert(spy.calledWith("Frank.0: toy"));
  });
  it("should work for any number of items in a flat array", () => {
    analyzeArray("bobby", ["a", "b", "c"]);
    assert(spy.calledWith("bobby.0: a"));
    assert(spy.calledWith("bobby.1: b"));
    assert(spy.calledWith("bobby.2: c"));
  });
  it("should log all items with correct indexes even when items are nested at several levels", () => {
    analyzeArray("bobby", ["a", "b", ["c", ["d"], "e"], "f"]);
    assert(spy.calledWith("bobby.0: a"));
    assert(spy.calledWith("bobby.1: b"));
    assert(spy.calledWith("bobby.20: c"));
    assert(spy.calledWith("bobby.210: d"));
    assert(spy.calledWith("bobby.22: e"));
    assert(spy.calledWith("bobby.3: f"));
    spy.restore();
  });
});
