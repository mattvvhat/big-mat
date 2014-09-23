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

  it('should pad rows', function () {
    var A = new matrix(3, 3);
    A.define([
      1, 1, 1,
      1, 1, 1,
      1, 1, 1
    ]);
    A.pad(4, 4);
    expect(A.size()).to.eql([4,4]);
    expect(A.toArray()).to.eql([
      1, 1, 1, 0,
      1, 1, 1, 0,
      1, 1, 1, 0,
      0, 0, 0, 0
    ]);

    A.pad(4, 5);
    expect(A.size()).to.eql([4, 5]);

    A.pad(6, 5);
    expect(A.size()).to.eql([6, 5]);
    expect(A.toArray()).to.eql([
      1, 1, 1, 0, 0,
      1, 1, 1, 0, 0,
      1, 1, 1, 0, 0,
      0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
    ]);
  });

});