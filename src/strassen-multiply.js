var matrix = require('./matrix.js');

/**
 * [multiply description]
 * @param  {[type]} lhs [description]
 * @param  {[type]} rhs [description]
 * @return {[type]}     [description]
 */
function multiply (lhs, rhs) {
  var result = new matrix(lhs.rows(), rhs.cols());

  // 

  if (lhs.rows() !== 2 || lhs.cols() !== 2) {
    return;
  }

  if (rhs.rows() !== 2 || rhs.cols() !== 2) {
    return;
  }

  var C = multiply_2x2(lhs.toArray(), rhs.toArray());

  // console.log(C);
  result.define(C);

  // result.set(0, 0, lhs.get(0, 0) * rhs.get(0, 0) + lhs.get(0, 1) * rhs.get(1, 0));
  // result.set(0, 1, lhs.get(0, 0) * rhs.get(0, 1) + lhs.get(0, 1) * rhs.get(1, 1));
  // result.set(1, 0, lhs.get(1, 0) * rhs.get(0, 0) + lhs.get(1, 1) * rhs.get(1, 0));
  // result.set(1, 1, lhs.get(1, 0) * rhs.get(0, 1) + lhs.get(1, 1) * rhs.get(1, 1));
  
  // var m = new Float32Array(7);

  // m[0] = (lhs.get(0, 0) + lhs.get(1, 1)) * (rhs.get(0, 0) + rhs.get(1, 1));
  // m[1] = (lhs.get(1, 0) + lhs.get(1, 1)) * rhs.get(0, 0);
  // m[2] = lhs.get(0, 0) * (rhs.get(0, 1) - rhs.get(1, 1));
  // m[3] = lhs.get(1, 1) * (rhs.get(1, 0) - rhs.get(0, 0));
  // m[4] = (lhs.get(0, 0) + lhs.get(0, 1)) * rhs.get(1, 1);
  // m[5] = (lhs.get(1, 0) - lhs.get(0, 0)) * (rhs.get(0, 0) + rhs.get(0, 1));
  // m[6] = (lhs.get(0, 1) - lhs.get(1, 1)) * (rhs.get(1, 0) + rhs.get(1, 1));

  // result.set(0, 0, m[0] + m[3] - m[4] + m[6]);
  // result.set(0, 1, m[2] + m[4]);
  // result.set(1, 0, m[1] + m[3]);
  // result.set(1, 1, m[0] - m[1] + m[2] + m[5]);

  return result;
}

/**
 * [multiply_2x2 description]
 * @param  {[type]} A [description]
 * @param  {[type]} B [description]
 * @return {[type]}   [description]
 */
function multiply_2x2 (A, B) {
  var M = [
    (A[0] + A[3]) * (B[0] + B[3]),
    (A[2] + A[3]) * B[0],
    A[0] * (B[1] - B[3]),
    A[3] * (B[2] - B[0]),
    (A[0] + A[1]) * B[3],
    (A[2] - A[0]) * (B[0] + B[1]),
    (A[1] - A[3]) * (B[2] + B[3])
  ];
  var C = [0, 0, 0, 0];
  C[0] = M[0] + M[3] - M[4] + M[6];
  C[1] = M[2] + M[4];
  C[2] = M[1] + M[3];
  C[3] = M[0] - M[1] + M[2] + M[5];
  return C;
}



module.exports = multiply;