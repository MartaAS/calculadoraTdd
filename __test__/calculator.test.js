const application = require('../js/main.js');
var app;
app = application();

describe('calculator', function () {
  // var string = 'hola';
  // var numeroIntroducido = 3;


  it('if is not a number', function () {
    expect(app.isNumber(typeof 3)).toBe('number');
  });

  it('sum two values', function () {
    expect(app.sum(2, 3)).toBe(5);
  });

  it('rest two values', function () {
    expect(app.rest(5, 3)).toBe(2);
  });

  it('multiply two values', function () {
    expect(app.multiply(5, 3)).toBe(15);
  });

  it('division two values', function () {
    expect(app.division(10, 5)).toBe(2);
  });


});