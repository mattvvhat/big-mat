var heapsort = require('../src/heapsort.js');
var expect   = require('expect.js');

describe('heapsort', function () {

  it('should run on an empty list', function () {

    var a = [];
    expect(heapsort(a, 0)).to.eql([]);

  });

  it('should run on a sorted list', function () {

    var a = [1, 2, 3];
    // expect(heapsort(a, 3)).to.eql([1, 2, 3]);

  });

  it('should run on a sorted list', function () {

    var a = [6, 3, 1, 2, 4, 5];
    // expect(heapsort(a)).to.eql([1, 2, 3, 4, 5, 6]);

  });

});