const {ComplexNumber} = require("../src/complex-number");

class RealNumber {
  #value

  constructor(value) {
    this.#value = value;
  }

  toString() {
    return this.#value.toString();
  }

  equals(other) {
    return this.#value === other.#value;
  }

  add(other) {
    return new RealNumber(this.#value + other.#value);
  }

  multiply(other) {
    return new RealNumber(this.#value * other.#value);
  }
}

exports.RealNumber = RealNumber;
