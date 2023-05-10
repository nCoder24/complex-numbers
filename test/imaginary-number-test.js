const assert = require("assert");
const { describe, it } = require("node:test");
const { ImaginaryNumber } = require("../src/imaginary-number");
const { RealNumber } = require("../src/real-number");

describe("toString", function() {
  it("should concat an 'i' after value", function() {
    const imaginaryNumber = new ImaginaryNumber(new RealNumber(4));

    assert.strictEqual(imaginaryNumber.toString(), "4i");
  });
});

describe("isNegative", function() {
  it("should be true if it's value is negative", function() {
    const realNumber = new ImaginaryNumber(new RealNumber(-1));

    assert.ok(realNumber.isNegative());
  });

  it("should be false if it's value is negative", function() {
    const realNumber = new ImaginaryNumber(new RealNumber(5));

    assert.ok(!realNumber.isNegative());
  });
});

describe("equals", function() {
  it("should be true if value of other imaginary number equals to itself", function() {
    const imaginaryNumber = new ImaginaryNumber(new RealNumber(4));
    const otherImaginaryNumber = new ImaginaryNumber(new RealNumber(4));

    assert.ok(imaginaryNumber.equals(otherImaginaryNumber));
  });
});

describe("add", function() {
  it("should add another imaginary number", function() {
    const imaginaryNumber = new ImaginaryNumber(new RealNumber(4));
    const addend = new ImaginaryNumber(new RealNumber(5));

    const sum = imaginaryNumber.add(addend);
    const expectedSum = new ImaginaryNumber(new RealNumber(9));

    assert.ok(expectedSum.equals(sum));
  });
});

describe("multiply", function() {
  it("should multiply other imaginary number", function() {
    const multiplicand = new ImaginaryNumber(new RealNumber(5));
    const multiplier = new ImaginaryNumber(new RealNumber(4));

    const product = multiplicand.multiply(multiplier);
    const expectedProdect = new RealNumber(-20);

    assert.ok(expectedProdect.equals(product));
  });
});

describe("multiplyReal", function() {
  it("should multiply other real number and return imaginary number", function() {
    const multiplicand = new ImaginaryNumber(new RealNumber(5));
    const multiplier = new RealNumber(4);

    const product = multiplicand.multiplyReal(multiplier);
    const expectedProdect = new ImaginaryNumber(new RealNumber(20));

    assert.ok(expectedProdect.equals(product));
  });
});