var matrix   = require('../src/matrix.js');
var multiply = require('../src/strassen-multiply.js');
var expect   = require('expect.js');

describe('strassen-multiplication', function () {


  /**
   * [description]
   * @return {[type]} [description]
   */
  it('should return a matrix', function () {
    var A = new matrix(3, 3);
    var B = new matrix(3, 1);
    var C = multiply(A, B);
    expect(C).to.be.a(matrix);
  });

  /**
   * [description]
   * @return {[type]} [description]
   */
  it('should return a matrix with the correct dimensions', function () {
    var A = new matrix(3, 3);
    var B = new matrix(3, 1);
    var C = multiply(A, B);
    expect(C.size()).to.be.eql([3, 1]);
  });

  /**
   * [description]
   * @return {[type]} [description]
   */
  it('should correctly multiply the zero vector', function () {
    var A = new matrix(3, 3), B = new matrix(3, 1);
    
    A.define([
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
    ]);

    B.define([0, 0, 0]);

    var C = multiply(A, B);

    expect(C.toArray()).to.be.eql([0, 0, 0]);
  });



  /**
   * [description]
   * @return {[type]} [description]
   */
  it('should correctly multiply the identity matrix', function () {
    var A = new matrix(2, 2), B = new matrix(2, 2);
    
    A.define([
      1, 0,
      0, 1
    ]);

    B.define([
      1, 2,
      3, 4
    ]);

    var C = multiply(A, B);

    expect(C.toArray()).to.be.eql([1, 2, 3 , 4]);
  });

});