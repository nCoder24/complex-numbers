const { RealNumber } = require("./real-number");

class ImaginaryNumber {
  #value

  constructor(value) {
    this.#value = value;
  }

  toString() {
    return this.#value + "i";
  }

  isNegative() {
    return this.#value.isNegative();
  }

  isZero() {
    return this.#value.isZero();
  }

  equals(other) {
    return this.#value.equals(other.#value);
  }

  add(other) {
    return new ImaginaryNumber(this.#value.add(other.#value));
  }

  multiply(other) {
    return this.#value.multiply(other.#value).multiply(new RealNumber(-1));
  }

  multiplyReal(other) {
    return new ImaginaryNumber(this.#value.multiply(other));
  }
}

exports.ImaginaryNumber = ImaginaryNumber;