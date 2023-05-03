const {describe, it} = require("node:test");
const {strictEqual} = require("assert");
const {createComplexNumber} = require("../src/complex-number.js");

describe("Complex Number", function() {
  describe("toString", function() {
    it("should give 'realPart' + 'imaginaryPart'i", function() {
      const complexNum = createComplexNumber(3, 4);

      strictEqual(complexNum.toString(), "3 + 4i"); 
    });

    it("should give only imaginary part if realPart is 0", function() {
      const complexNum = createComplexNumber(0, 5);

      strictEqual(complexNum.toString(), "5i");
    });

    it("should give only real part if imaginaryPart is 0", function() {
      const complexNum = createComplexNumber(5, 0);

      strictEqual(complexNum.toString(), "5");
    });

    it("should give negative sign before realPart when realPart is negative", function() {
      const complexNum = createComplexNumber(-4, 5);

      strictEqual(complexNum.toString(), "-4 + 5i");
    });

    it("should get a negative sign in the middle when imaginary part is negative", function() {
      const complexNum = createComplexNumber(4, -5);

      strictEqual(complexNum.toString(), "4 - 5i");
    });
  });

  describe("getters", function() {
    it("should give the real part", function() {
      const complexNum = createComplexNumber(3, 4);

      strictEqual(complexNum.getRealPart(), 3);
    });

    it("should give the imaginary part", function() {
      const complexNum = createComplexNumber(3, 4);

      strictEqual(complexNum.getImaginaryPart(), 4);
    });
  });

  describe("arithmetic operations", function() {
    it("should add two complex complexNumbers", function() {
      const complexNum1 = createComplexNumber(2, 3);
      const complexNum2 = createComplexNumber(5, 4);

      const sum = complexNum1.add(complexNum2);

      strictEqual(sum.getRealPart(), 7);
      strictEqual(sum.getImaginaryPart(), 7);
    });

    it("should multiply two complex complexNumbers", function() {
      const complexNum1 = createComplexNumber(2, 3);
      const complexNum2 = createComplexNumber(1, 2);

      const product = complexNum1.multiply(complexNum2);

      strictEqual(product.getRealPart(), -4);
      strictEqual(product.getImaginaryPart(), 7);
    });
  });
});
