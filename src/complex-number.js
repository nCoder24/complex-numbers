const createComplexNumber = function(realPart, imaginaryPart) {
  const toString = function() {
    if(!realPart) return `${imaginaryPart}i`;

    const operator = imaginaryPart < 0 ? "-" : "+";
    return`${realPart} ${operator} ${Math.abs(imaginaryPart)}i`; 
  }

  const getImaginaryPart = function() {
    return imaginaryPart;
  }

  const getRealPart = function() {
    return realPart;
  }

  const add = function(addend) {
    const sum = {
      realPart: realPart + addend.getRealPart(),
      imaginaryPart: imaginaryPart + addend.getImaginaryPart()
    };

    return createComplexNumber(sum.realPart, sum.imaginaryPart);
  }

  const multiply = function(multiplier) {
    const product = {
      realPart: realPart * multiplier.getRealPart() - imaginaryPart * multiplier.getImaginaryPart(),
      imaginaryPart: realPart * multiplier.getImaginaryPart() + imaginaryPart * multiplier.getRealPart()
    };

    return createComplexNumber(product.realPart, product.imaginaryPart);
  }

  return {toString, getRealPart, getImaginaryPart, add, multiply};
}


exports.createComplexNumber = createComplexNumber;
