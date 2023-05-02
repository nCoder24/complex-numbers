const createComplexNumber = function(realPart, imaginaryPart) {
  const toString = function() {
    if(!realPart) return `${imaginaryPart}i`;

    let stringified = "";

    stringified += realPart;
    stringified += imaginaryPart < 0 ? " - " : " + ";
    stringified += Math.abs(imaginaryPart) + "i"; 

    return stringified;
  }

  const getImaginaryPart = function() {
    return imaginaryPart;
  }

  const getRealPart = function() {
    return realPart;
  }

  const add = function(complexNumber) {
    const result = {
      realPart: realPart + complexNumber.getRealPart(),
      imaginaryPart: imaginaryPart + complexNumber.getImaginaryPart()
    };

    return createComplexNumber(result.realPart, result.imaginaryPart);
  }

  const multiply = function(complexNumber) {
    const result = {
      realPart: realPart * complexNumber.getRealPart() - imaginaryPart * complexNumber.getImaginaryPart(),
      imaginaryPart: realPart * complexNumber.getImaginaryPart() + imaginaryPart * complexNumber.getRealPart()
    };

    return createComplexNumber(result.realPart, result.imaginaryPart);
  }

  return {toString, getRealPart, getImaginaryPart, add, multiply};
}


exports.createComplexNumber = createComplexNumber;
