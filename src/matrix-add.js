var matrix = require('./matrix.js');

/**
 * [add description]
 * @param {[type]} A [description]
 * @param {[type]} B [description]
 */
function add (A, B) {
  if (A.rows() !== B.rows())
    throw Error('Matrix: Row-size does no match');
  
  if (A.cols() !== B.cols())
    throw Error('Matrix: Col-size does no match');

  var C = new matrix(A.row, B.col);
  array_sum(A.entries, B.entries, C.entries);
}

/**
 * [array_sum description]
 * @param  {[type]} lhs [description]
 * @param  {[type]} rhs [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
function array_sum (lhs, rhs, res) {
  res = new Float32Array(lhs.length);
  for (var i=0; i < lhs.length; i++) {
    res[i] = lhs[i] + rhs[i];
  }
}

/**
 * EXPORT ADD FUNCTION
 */

module.exports = add;