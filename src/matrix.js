/**
 * [matrix description]
 * @param  {[type]} row [description]
 * @param  {[type]} col [description]
 * @return {[type]}     [description]
 */
function matrix (row, col) {
  this.row = row;
  this.col = col;
  this.entries = new Float32Array(row*col);
}

/**
 * Copy Matrix
 * @return {[type]} [description]
 */
matrix.prototype.copy = function () {
  var clone = new matrix(this.row, this.col);
  clone.entries.set(this.entries);
  return clone;
};

/**
 * [pad description]
 * @return {[type]} [description]
 */
matrix.prototype.pad = function (rows, cols) {
  var old_entries = this.entries;
  this.entries = new Float32Array(rows * cols);
  for (var i=0; i < this.row; i++) {
    for (var j=0; j < this.col; j++) {
      this.entries[cols*i+j] = old_entries[this.col*i+j];
    }
  }
  this.row = rows;
  this.col = cols;
  delete old_entries;
  return this;
};

/**
 * [pad_row description]
 * @return {[type]} [description]
 */
matrix.prototype.pad_row = function () {
  var old_entries = this.entries;
  this.entries = new Float32Array(old_entries.length + this.col);
  this.row++;
  this.entries.set(old_entries);
  delete old_entries;
  return this;
};

/**
 * [pad_col description]
 * @return {[type]} [description]
 */
matrix.prototype.pad_col = function () {
  var old_entries = this.entries;
  this.entries = new Float32Array(old_entries.length + this.row);
  this.col++;
  this.entries.set(old_entries);
  for (var i=0; i < this.row; i++) {
    for (var j=0; j < this.col; j++) {
      this.entries[i*this.col + j] = old_entries[i*(this.col-1)+j];
    }
  }
  delete old_entries;
  return this;
};

/**
 * [define description]
 * @param  {[type]} vals [description]
 * @return {[type]}      [description]
 */
matrix.prototype.define = function (vals) {
  for (var count=0; count < vals.length; count++) {
    var y = Math.floor(count / this.col);
    var x = count % this.col;
    this.set(y, x, vals[count]);
  }
  return this;
};

/**
 * [cols description]
 * @return {[type]} [description]
 */
matrix.prototype.cols = function () {
  return this.col;
};

/**
 * [rows description]
 * @return {[type]} [description]
 */
matrix.prototype.rows = function () {
  return this.row;
};

/**
 * [size description]
 * @return {[type]} [description]
 */
matrix.prototype.size = function () {
  return [ this.row, this.col ];
};

/**
 * [get description]
 * @param  {[type]} i [description]
 * @param  {[type]} j [description]
 * @return {[type]}   [description]
 */
matrix.prototype.get = function (i, j) {
  return this.entries[this.col * i + j];
};

/**
 * [set description]
 * @param {[type]} i   [description]
 * @param {[type]} j   [description]
 * @param {[type]} val [description]
 */
matrix.prototype.set = function (i, j, val) {
  this.entries[this.col * i + j] = val;
  return this;
};

/**
 * [sub description]
 * @param  {[type]} i      [description]
 * @param  {[type]} j      [description]
 * @param  {[type]} size_i [description]
 * @param  {[type]} size_j [description]
 * @return {[type]}        [description]
 */
matrix.prototype.sub = function (i, j, size_i, size_j) {
  var m = new matrix(size_i, size_j);
  for (var y=0; y < size_i; y++) {
    for (var x=0; x < size_j; x++) {
      m.set(y, x, this.get(i+y, j+x));
    }
  }
  return m;
};

/**
 * [toArray description]
 * @return {[type]} [description]
 */
matrix.prototype.toArray = function () {
  return Array.prototype.slice.call(this.entries);
}

module.exports = matrix;