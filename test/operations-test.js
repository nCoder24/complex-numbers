const {describe, it} = require("node:test");
const {strictEqual} = require("assert");
const {createComplexNumber} = require("../src/complex-number.js");

describe("Complex Number", function() {
  const number = createComplexNumber(3, 4);
  it("should give 'realPart' + 'imaginaryPart'i", function() {
    strictEqual(number.toString(), "3 + 4i"); 
  });

  it("should give the real part", function() {
    strictEqual(number.getRealPart(), 3);
  });

  it("should give the imaginary part", function() {
    strictEqual(number.getImaginaryPart(), 4);
  });

  const number2 = createComplexNumber(0, 5);
  it("should give only imaginary part if realpart is 0", function() {
    strictEqual("5i", number2.toString());
  });
});
