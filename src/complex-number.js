const createComplexNumber = function(realPart, imaginaryPart) {
  const toString = function() {
    if(!imaginaryPart) return `${realPart}`

    if(!realPart) return `${imaginaryPart}i`;

    const sign = imaginaryPart < 0 ? "-" : "+";
    return`${realPart} ${sign} ${Math.abs(imaginaryPart)}i`; 
  }

  const getImaginaryPart = function() {
    return imaginaryPart;
  }

  const getRealPart = function() {
    return realPart;
  }

  const add = function(addend) {
    const sumRealPart =  realPart + addend.getRealPart();
    const sumImaginaryPart = imaginaryPart + addend.getImaginaryPart();

    return createComplexNumber(sumRealPart, sumImaginaryPart);
  }

  const multiply = function(multiplier) {
    const productRealPart = realPart * multiplier.getRealPart() - imaginaryPart * multiplier.getImaginaryPart();
    const productImaginaryPart = realPart * multiplier.getImaginaryPart() + imaginaryPart * multiplier.getRealPart();

    return createComplexNumber(productRealPart, productImaginaryPart);
  }

  return {toString, getRealPart, getImaginaryPart, add, multiply};
}


exports.createComplexNumber = createComplexNumber;
