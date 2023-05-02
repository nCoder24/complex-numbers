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

  return {toString, getRealPart, getImaginaryPart};
}


exports.createComplexNumber = createComplexNumber;
