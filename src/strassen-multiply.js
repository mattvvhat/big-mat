var matrix = require('./matrix.js');

/**
 * [multiply description]
 * @param  {[type]} lhs [description]
 * @param  {[type]} rhs [description]
 * @return {[type]}     [description]
 */
function multiply (lhs, rhs) {
  var result = new matrix(lhs.rows(), rhs.cols());
  return result;
}

module.exports = multiply;