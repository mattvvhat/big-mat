/**
 * @brief [brief description]
 * @details [long description]
 * 
 * @param  [description]
 * @return [description]
 */
function add (dest) {
  var rest = Array.prototype.slice(arguments, 1);
  for (var i=0; i < dest.length; i++) {
    for (var j=0; j < rest.length; j++) {
      dest[i] += rest[j][i];
    }
  }
  return dest;
}

/**
 * EXPORT
 */

module.exports = add;