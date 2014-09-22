var quicksort = require('../src/quicksort.js');
var expect    = require('expect.js');

describe('quicksort', function () {

  it('should run on an empty list', function () {

    var a = [];
    expect(quicksort(a, 0, 0)).to.eql([]);

  });

  it('should run on a sorted list', function () {

    var a = [1, 2, 3];
    expect(quicksort(a, 0, 2)).to.eql([1, 2, 3]);

  });

  it('should run on a sorted list', function () {

    var a = [6, 3, 1, 2, 4, 5];
    expect(quicksort(a)).to.eql([1, 2, 3, 4, 5, 6]);

  });

});