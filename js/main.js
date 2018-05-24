'use strict';

const application = function () {

  function sumNumber() {
    var number = 2;
    return number;
  }
  return {
    start: sumNumber,
  };
}

if (typeof (module) != 'undefined') {
  module.exports = startApplication;
}

