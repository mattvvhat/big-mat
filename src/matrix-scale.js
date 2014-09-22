/**
 * [scale description]
 * @param  {[type]} A [description]
 * @param  {[type]} k [description]
 * @return {[type]}   [description]
 */
function scale (A, k) {
  for (var i=0; i < A.entries.length; i++) {
    A.entries[i] *= k;
  }
}

/**
 * EXPORT SCALE FUNCTION
 */

module.exports = scale;