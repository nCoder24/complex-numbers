const assert = require("assert");
const { describe, it } = require("node:test");
const { RealNumber } = require("../src/real-number");

describe("toString", function () {
  it("should get value as string", function () {
    const realNumber = new RealNumber(4);
    
    assert.strictEqual(realNumber.toString(), "4");
  });
});

describe("isZero", function() {
  it("should be true if it's value is zero", function() {
    const realNumber = new RealNumber(0);

    assert.ok(realNumber.isZero());
  });
});

describe("isNegative", function() {
  it("should be true if it's value is negative", function() {
    const realNumber = new RealNumber(-1);

    assert.ok(realNumber.isNegative());
  });

  it("should be false if it's value is negative", function() {
    const realNumber = new RealNumber(5);

    assert.ok(!realNumber.isNegative());
  });
});

describe("equals", function() {
  it("should be true if value of other real number is same as itself", function() {
    const realNumber = new RealNumber(4);
    const otherRealNumber = new RealNumber(4);

    assert.ok(realNumber.equals(otherRealNumber));
    });
});

describe("add", function () {
  it("should add real number with itself", function () {
    const realNumber = new RealNumber(4);

    const sum = realNumber.add(realNumber);
    const expectedSum = new RealNumber(8);

    assert.ok(expectedSum.equals(sum));
  });
});

describe("multiply", function() {
  it("should multiply two real numbers", function() {
    const multiplicand = new RealNumber(5);
    const multiplier = new RealNumber(4);

    const product = multiplicand.multiply(multiplier);
    const expectedProdect = new RealNumber(20);

    assert.ok(expectedProdect.equals(product));
  });
});