const assert = require("assert");
const { describe, it } = require("node:test");
const { ComplexNumber } = require("../src/complex-number.js");
const { RealNumber } = require("../src/real-number.js");
const { ImaginaryNumber } = require("../src/imaginary-number.js");

describe("toString", function () {
  it("should give 'realPart' + 'imaginaryPart'i", function () {
    const realPart = new RealNumber(3);
    const imaginaryPart = new ImaginaryNumber(new RealNumber(4));
    const complexNum = new ComplexNumber(realPart, imaginaryPart);

    assert.strictEqual(complexNum.toString(), "3+4i");
  });

  it("should give only imaginary part if realPart is 0", function () {
    const realPart = new RealNumber(0);
    const imaginaryPart = new ImaginaryNumber(new RealNumber(5));
    const complexNum = new ComplexNumber(realPart, imaginaryPart);

    assert.strictEqual(complexNum.toString(), "5i");
  });

  it("should give only real part if imaginaryPart is 0", function () {
    const realPart = new RealNumber(5);
    const imaginaryPart = new ImaginaryNumber(new RealNumber(0));
    const complexNum = new ComplexNumber(realPart, imaginaryPart);

    assert.strictEqual(complexNum.toString(), "5");
  });

  it("should give negative sign before realPart when realPart is negative", function () {
    const realPart = new RealNumber(-4);
    const imaginaryPart = new ImaginaryNumber(new RealNumber(5));
    const complexNum = new ComplexNumber(realPart, imaginaryPart);

    assert.strictEqual(complexNum.toString(), "-4+5i");
  });

  it("should get a negative sign in the middle when imaginary part is negative", function () {
    const realPart = new RealNumber(4);
    const imaginaryPart = new ImaginaryNumber(new RealNumber(-5));
    const complexNum = new ComplexNumber(realPart, imaginaryPart);
    assert.strictEqual(complexNum.toString(), "4-5i");
  });
});

describe("equals", function () {
  it("should be equal to another complex number with same real and imaginary", function () {
    const realPart = new RealNumber(2);
    const imaginaryPart = new ImaginaryNumber(new RealNumber(3));
    const complexNum = new ComplexNumber(realPart, imaginaryPart);

    const otherRealPart = new RealNumber(2);
    const otherImaginaryPart = new ImaginaryNumber(new RealNumber(3));
    const otherComplexNum = new ComplexNumber(otherRealPart, otherImaginaryPart);

    assert.ok(complexNum.equals(otherComplexNum));
  });
});

describe("arithmetic operations", function () {
  it("should add two complex complexNumbers", function () {
    const realPart = new RealNumber(2);
    const imaginaryPart = new ImaginaryNumber(new RealNumber(3));
    const complexNum = new ComplexNumber(realPart, imaginaryPart);

    const addendRealPart = new RealNumber(5);
    const addendImaginaryPart = new ImaginaryNumber(new RealNumber(4));
    const addend = new ComplexNumber(addendRealPart, addendImaginaryPart);

    const sum = complexNum.add(addend);

    const expectedRealPart = new RealNumber(7);
    const expectedImaginaryPart = new ImaginaryNumber(new RealNumber(7));
    const expectedSum = new ComplexNumber(expectedRealPart, expectedImaginaryPart);

    assert.ok(expectedSum.equals(sum));
  });

  it("should multiply two complex complexNumbers", function () {
    const multiplicandRealPart = new RealNumber(2);
    const multiplicandImaginaryPart = new ImaginaryNumber(new RealNumber(3));
    const multiplicand = new ComplexNumber(multiplicandRealPart, multiplicandImaginaryPart);

    const multiplierRealPart = new RealNumber(1);
    const multiplierImaginaryPart = new ImaginaryNumber(new RealNumber(2));
    const multiplier = new ComplexNumber(multiplierRealPart, multiplierImaginaryPart);

    const product = multiplicand.multiply(multiplier);

    const expectedRealPart = new RealNumber(-4);
    const expectedImaginaryPart = new ImaginaryNumber(new RealNumber(7));
    const expectedProduct = new ComplexNumber(expectedRealPart, expectedImaginaryPart);

    assert.ok(expectedProduct.equals(product));
  });
});
