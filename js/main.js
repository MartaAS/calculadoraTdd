

const application = function () {
  'use strict';

  function checkIfIsNumber(number) {
    if (!typeof number == 'number') {
      return 'no es un numero';
    }
    else {
      return number;
    }

  }

  function sumNumber(value, otherValue) {
    return value + otherValue;
  }

  function restNumber(value, otherValue) {
    return value - otherValue;
  }

  function multiplyNumber(value, otherValue) {
    return value * otherValue;
  }

  function divsionNumber(value, otherValue) {
    return value / otherValue;
  }



  return {
    isNumber: checkIfIsNumber,
    sum: sumNumber,
    rest: restNumber,
    multiply: multiplyNumber,
    division: divsionNumber


  };
};

if (typeof (module) != 'undefined') {
  module.exports = application;
}

