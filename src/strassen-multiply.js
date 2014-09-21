var matrix = require('./matrix.js');

/**
 * [multiply description]
 * @param  {[type]} lhs [description]
 * @param  {[type]} rhs [description]
 * @return {[type]}     [description]
 */
function multiply (lhs, rhs) {
  var result = new matrix(lhs.rows(), rhs.cols());

  // result.set(0, 0, lhs.get(0, 0) * rhs.get(0, 0) + lhs.get(0, 1) * rhs.get(1, 0));
  // result.set(0, 1, lhs.get(0, 0) * rhs.get(0, 1) + lhs.get(0, 1) * rhs.get(1, 1));
  // result.set(1, 0, lhs.get(1, 0) * rhs.get(0, 0) + lhs.get(1, 1) * rhs.get(1, 0));
  // result.set(1, 1, lhs.get(1, 0) * rhs.get(0, 1) + lhs.get(1, 1) * rhs.get(1, 1));
  
  var m = new Float32Array(7);

  m[0] = (lhs.get(0, 0) + lhs.get(1, 1)) * (rhs.get(0, 0) + rhs.get(1, 1));
  m[1] = (lhs.get(1, 0) + lhs.get(1, 1)) * rhs.get(0, 0);
  m[2] = lhs.get(0, 0) * (rhs.get(0, 1) - rhs.get(1, 1));
  m[3] = lhs.get(1, 1) * (rhs.get(1, 0) - rhs.get(0, 0));
  m[4] = (lhs.get(0, 0) + lhs.get(0, 1)) * rhs.get(1, 1);
  m[5] = (lhs.get(1, 0) - lhs.get(0, 0)) * (rhs.get(0, 0) + rhs.get(0, 1));
  m[6] = (lhs.get(0, 1) - lhs.get(1, 1)) * (rhs.get(1, 0) + rhs.get(1, 1));

  result.set(0, 0, m[0] + m[3] - m[4] + m[6]);
  result.set(0, 1, m[2] + m[4]);
  result.set(1, 0, m[1] + m[3]);
  result.set(1, 1, m[0] - m[1] + m[2] + m[5]);

  return result;
}



module.exports = multiply;