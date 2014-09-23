var matrix = require('../src/matrix.js');
var expect = require('expect.js');

describe('matrix', function () {

  it('should create a matrix object', function () {
    var A = new matrix(0, 0);
    expect(A).to.be.a(matrix);
  });

  it('should correctly clone an zero matrix', function () {
    var A = new matrix(2, 2);
    A.define([
      0, 0,
      0, 0
    ]);
    var B = A.copy();
    expect(A.toArray()).to.eql(B.toArray());
  });

  it('should correctly clone a random matrix', function () {
    var A = new matrix(3, 3);
    A.define([
      Math.random(), Math.random(), Math.random(),
      Math.random(), Math.random(), Math.random(),
      Math.random(), Math.random(), Math.random()
    ]);
    var B = A.copy();
    expect(A.toArray()).to.eql(B.toArray());
  });

  it('should create a new copy *NOT* a reference', function () {
    var A = new matrix(3, 3);
    A.define([
      Math.random(), Math.random(), Math.random(),
      Math.random(), Math.random(), Math.random(),
      Math.random(), Math.random(), Math.random()
    ]);

    var B = A.copy();
    B.set(0, 0, -1);

    expect(A.toArray()).to.not.eql(B.toArray());
  });

});