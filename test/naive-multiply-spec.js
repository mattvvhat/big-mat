var matrix   = require('../src/matrix.js');
var multiply = require('../src/naive-multiply.js');
var expect   = require('expect.js');

describe('naive multiplication', function () {

  /**
   * [description]
   * @return {[type]} [description]
   */
  it('should multiply zero matrix', function () {

    var A = new matrix(5, 3), B = new matrix(3, 1);

    A.define([
      1, 0, 0,
      0, 1, 0,
      0, 0, 1,
      1, 0, 1,
      0, 2, 1
    ]);

    B.define([
      0,
      0,
      0,
      0,
      0
    ]);

    var C = multiply(A, B);

    expect(C.toArray()).to.eql([0, 0, 0, 0, 0]);

  });

  /**
   * [description]
   * @return {[type]} [description]
   */
  it('should multiple identity matrix', function () {

    var A = new matrix(3, 3), B = new matrix(3, 1);

    A.define([
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
    ]);

    B.define([
      1,
      1,
      1
    ]);

    var C = multiply(A, B);

    expect(C.toArray()).to.eql([1, 1, 1]);

  });

  /**
   * [description]
   * @return {[type]} [description]
   */
  it('should multiple identity matrix', function () {

    var A = new matrix(3, 3), B = new matrix(3, 2);

    A.define([
      1, 0, 2,
      0, 2, 1,
      0, 0, 1
    ]);

    B.define([
      1, 2,
      1, 2,
      1, 2
    ]);

    var C = multiply(A, B);

    expect(C.toArray()).to.eql([3, 6, 3, 6, 1, 2]);

  });
});