const {describe, it} = require("node:test");
const assert = require("assert");
const {ComplexNumber} = require("../src/complex-number.js");

describe("Complex Number", function() {
  describe("toString", function() {
    it("should give 'realPart' + 'imaginaryPart'i", function() {
      const complexNum = new ComplexNumber(3, 4);

      assert.strictEqual(complexNum.toString(), "3 + 4i"); 
    });

    it("should give only imaginary part if realPart is 0", function() {
      const complexNum = new ComplexNumber(0, 5);

      assert.strictEqual(complexNum.toString(), "5i");
    });

    it("should give only real part if imaginaryPart is 0", function() {
      const complexNum = new ComplexNumber(5, 0);

      assert.strictEqual(complexNum.toString(), "5");
    });

    it("should give negative sign before realPart when realPart is negative", function() {
      const complexNum = new ComplexNumber(-4, 5);

      assert.strictEqual(complexNum.toString(), "-4 + 5i");
    });

    it("should get a negative sign in the middle when imaginary part is negative", function() {
      const complexNum = new ComplexNumber(4, -5);

      assert.strictEqual(complexNum.toString(), "4 - 5i");
    });
  });

  describe("equals", function() {
      it("should be equal to another complex number with same real and imaginary", function() {
        const complexNum = new ComplexNumber(2, 3);

        assert.ok(complexNum.equals(new ComplexNumber(2, 3)));
      });
  });

  describe("arithmetic operations", function() {
    it("should add two complex complexNumbers", function() {
      const complexNum1 = new ComplexNumber(2, 3);
      const complexNum2 = new ComplexNumber(5, 4);

      const sum = complexNum1.add(complexNum2);
      const expectedSum = new ComplexNumber(7, 7);

      assert.ok(expectedSum.equals(sum));
    });

    it("should multiply two complex complexNumbers", function() {
      const complexNum1 = new ComplexNumber(2, 3);
      const complexNum2 = new ComplexNumber(1, 2);

      const product = complexNum1.multiply(complexNum2);
      const expectedProduct = new ComplexNumber(-4, 7);

      assert.ok(expectedProduct.equals(product));
    });
  });
});
