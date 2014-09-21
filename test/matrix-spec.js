var matrix = require('../src/matrix.js');
var expect = require('expect.js');

describe('matrix', function () {

  it('should create a matrix object', function () {
    var A = new matrix(0, 0);
    expect(A).to.be.a(matrix);
  });

});