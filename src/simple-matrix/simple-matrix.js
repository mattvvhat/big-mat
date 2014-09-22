/**
 * [simple_matrix description]
 * @param  {[type]} rows   [description]
 * @param  {[type]} cols   [description]
 * @param  {[type]} values [description]
 * @return {[type]}        [description]
 */
function simple_matrix (rows, cols, values) {
  this.x = 0;
  this.y = 0;
  this.rows = rows;
  this.cols = cols;
  this.vals = new Float32Array(rows*cols);
}

/**
 * [sub description]
 * @param  {[type]} x      [description]
 * @param  {[type]} y      [description]
 * @param  {[type]} size_x [description]
 * @param  {[type]} size_y [description]
 * @return {[type]}        [description]
 */
simple_matrix.prototype.sub = function (i, j, end_i, end_j) {
  return new child_mat(this, i, end_i, j, end_j);
}

/**
 * [child_mat description]
 * @param  {[type]} start_x [description]
 * @param  {[type]} end_x   [description]
 * @param  {[type]} start_y [description]
 * @param  {[type]} end_y   [description]
 * @return {[type]}         [description]
 */
function child_mat (parent, start_i, end_i, start_j, end_j) {
  this.i      = start_i;
  this.i_end  = end_i;
  this.i_len  = end_i - start_i + 1;

  this.j      = start_j;
  this.j_end  = end_j;
  this.j_len  = end_j - start_j + 1;

  this.parent = parent;
}

/**
 * [get description]
 * @param  {[type]} i [description]
 * @param  {[type]} j [description]
 * @return {[type]}   [description]
 */
child_mat.prototype.get = function (i, j) {
  i += this.i;
  j += this.j;
  return this.parent.entries[i * this.parent.cols + j];
}

/**
 * [sub description]
 * @param  {[type]} i     [description]
 * @param  {[type]} j     [description]
 * @param  {[type]} end_i [description]
 * @param  {[type]} end_j [description]
 * @return {[type]}       [description]
 */
child_mat.prototype.sub = function (i, j, end_i, end_j) {
  return new child_mat(this.parent, i, end_i, j, end_j);
}