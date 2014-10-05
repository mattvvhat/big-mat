var matrix = require('./matrix.js');

/**
 * @brief [brief description]
 * @details [long description]
 * 
 * @param  [description]
 * @return [description]
 */
function multiply (dest) {
  var rest = Array.prototype.slice(arguments, 1);
  for (var i=0; i < rest.length; i++) {
    multiply_2(dest, rest[i]);
  }
  return dest;
}

/**
 * [multiply description]
 * @param  {[type]} lhs [description]
 * @param  {[type]} rhs [description]
 * @return {[type]}     [description]
 */
function multiply_2 (lhs, rhs) {

  var result = new matrix(lhs.rows(), rhs.cols());

  for (var i=0; i < result.row; i++) {
    for (var j=0; j < result.col; j++) {

      /**
       * [iter_end description]
       * @type {[type]}
       */
      var iter_end = lhs.cols() || rhs.rows();
      var sum = 0;

      /**
       * [iter description]
       * @type {Number}
       */
      for (var iter=0; iter < iter_end; iter++) {
        sum += lhs.get(i, iter) * rhs.get(iter, j);
      }

      /**
       * 
       */
      result.set(i, j, sum);
    }
  }

  return result;
}

module.exports = multiply;