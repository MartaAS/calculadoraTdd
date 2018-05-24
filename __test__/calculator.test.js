const application = require('../js/main.js');
var app;

describe('calculator', function () {
  app = application();
  it('return a number', function () {
    var number = 3;
    expect(app.start(number)).toBe(2);
  });


});