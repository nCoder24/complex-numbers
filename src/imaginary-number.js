const { RealNumber } = require("./real-number");

class ImaginaryNumber {
  #value

  constructor(value) {
    this.#value = value;
  }

  toString() {
    return this.#value + "i";
  }

  equals(other) {
    return this.#value.equals(other.#value);
  }

  add(other) {
    return new ImaginaryNumber(this.#value.add(other.#value));
  }

  multiply(other) {
    return this.#value.multiply(other.#value);
  }

  multiplyReal(other) {
    return new ImaginaryNumber(this.#value.multiply(other));
  }
}

exports.ImaginaryNumber = ImaginaryNumber;