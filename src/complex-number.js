class ComplexNumber {
  #real
  #imaginary

  constructor(real, imaginary) {
    this.#real = real;
    this.#imaginary = imaginary;
  };

  toString() {
    if(this.#real.isZero()) return this.#imaginary.toString();
    if(this.#imaginary.isZero()) return this.#real.toString();

    const sign = this.#imaginary.isNegative() ? "" : "+";
    return this.#real + sign + this.#imaginary;
  }
  
  equals(other) {
    const isRealPartEqual = this.#real.equals(other.#real);
    const isImaginaryPartEqual = this.#imaginary.equals(other.#imaginary);
    
    return isRealPartEqual && isImaginaryPartEqual;
  }

  add(addend) {
    const real = this.#real.add(addend.#real); 
    const imaginary = this.#imaginary.add(addend.#imaginary);

    return new ComplexNumber(real, imaginary);
  }
  
  multiply(multiplier) {
    const thisRealxOtherReal = this.#real.multiply(multiplier.#real);
    const thisRealxOtherImaginary = multiplier.#imaginary.multiplyReal(this.#real);
    const thisImaginaryxOtherReal = this.#imaginary.multiplyReal(multiplier.#real);
    const thisImaginaryxOtherImaginary = this.#imaginary.multiply(multiplier.#imaginary);

    const real = thisRealxOtherReal.add(thisImaginaryxOtherImaginary);
    const imaginary = thisRealxOtherImaginary.add(thisImaginaryxOtherReal);

    return new ComplexNumber(real, imaginary);
  }
}

exports.ComplexNumber = ComplexNumber;