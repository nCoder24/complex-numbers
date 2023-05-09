class ComplexNumber {
  #real
  #imaginary

  constructor(real, imaginary) {
    this.#real = real;
    this.#imaginary = imaginary;
  };

  toString() {
    if(!this.#imaginary) return this.#real.toString();
    if(!this.#real) return this.#imaginary.toString() + "i";

    const sign = this.#imaginary < 0 ? "-" : "+";
    return `${this.#real} ${sign} ${Math.abs(this.#imaginary)}i`;
  }

  equals(other) {
    const hasSameReal = this.#real === other.#real;
    const hasSameImaginary = this.#imaginary === other.#imaginary;
    
    return hasSameReal && hasSameImaginary;
  }

  add(addend) {
    const real = this.#real + addend.#real; 
    const imaginary = this.#imaginary + addend.#imaginary;

    return new ComplexNumber(real, imaginary);
  }
  
  multiply(multiplier) {
    const real = this.#real * multiplier.#real - this.#imaginary * multiplier.#imaginary;
    const imaginary = this.#real * multiplier.#imaginary + this.#imaginary * multiplier.#real;

    return new ComplexNumber(real, imaginary);
  }
}

exports.ComplexNumber = ComplexNumber;
