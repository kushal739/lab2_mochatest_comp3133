const assert = require("assert");
const { add, sub, mul, div } = require("../app/calculator");

describe("Calculator Tests", function () {
  // Add test case Pass
  it("add(5, 2) should return 7", function () {
    assert.strictEqual(add(5, 2), 7);
  });

  // Add test case Fail
  it("add(5, 2) should not return 8", function () {
    assert.notStrictEqual(add(5, 2), 8);
  });

  // Sub test case Pass
  it("sub(5, 2) should return 3", function () {
    assert.strictEqual(sub(5, 2), 3);
  });

  // Sub test case Fail
  it("sub(5, 2) should not return 5", function () {
    assert.notStrictEqual(sub(5, 2), 5);
  });

  // Mul test case Pass
  it("mul(5, 2) should return 10", function () {
    assert.strictEqual(mul(5, 2), 10);
  });

  // Mul test case Fail
  it("mul(5, 2) should not return 12", function () {
    assert.notStrictEqual(mul(5, 2), 12);
  });

  // Div test case Pass
  it("div(10, 2) should return 5", function () {
    assert.strictEqual(div(10, 2), 5);
  });

  // Div test case Fail
  it("div(10, 2) should not return 2", function () {
    assert.notStrictEqual(div(10, 2), 2);
  });
});
