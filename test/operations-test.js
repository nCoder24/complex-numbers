const {describe, it} = require("node:test");
const {strictEqual} = require("assert");
const {createComplexNumber} = require("../src/complex-number.js");

describe("Complex Number", function() {
  describe("toString", function() {
    it("should give 'realPart' + 'imaginaryPart'i", function() {
      const complexNum = createComplexNumber(3, 4);

      strictEqual(complexNum.toString(), "3 + 4i"); 
    });

    it("should give only imaginary part if realpart is 0", function() {
      const complexNum = createComplexNumber(0, 5);

      strictEqual(complexNum.toString(), "5i");
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

      strictEqual(complexNum1.add(complexNum2).toString(), "7 + 7i")
    });

    it("should multiply two complex complexNumbers", function() {
      const complexNum1 = createComplexNumber(2, 3);
      const complexNum2 = createComplexNumber(1, 2);

      strictEqual(complexNum1.multiply(complexNum2).toString(), "-4 + 7i")
    });
  });
});
