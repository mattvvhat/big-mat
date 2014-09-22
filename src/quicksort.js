/**
 * [quicksort description]
 * @param  {[type]} list  [description]
 * @param  {[type]} begin [description]
 * @param  {[type]} end   [description]
 * @return {[type]}       [description]
 */
function quicksort (list, begin, end) {
  if (begin < end) {
    var pivot = partition(list, begin, end);
    quicksort(list, begin, pivot-1);
    quicksort(list, pivot+1, end);
  }
}

/**
 * [partition description]
 * @param  {[type]} list  [description]
 * @param  {[type]} left  [description]
 * @param  {[type]} right [description]
 * @return {[type]}       [description]
 */
function partition (list, left, right) {
  
  var pivot = rand(left, right);
  var val   = list[pivot];
  
  swap(list, pivot, right);

  var store = left;

  for (var i=store; i < right; i++) {
    if (list[i] < val) {
      swap(list, i, store);
      store++;
    }
  }

  swap(list, store, right);

  return store;
}

/**
 * [swap description]
 * @param  {[type]} list [description]
 * @param  {[type]} i    [description]
 * @param  {[type]} j    [description]
 * @return {[type]}      [description]
 */
function swap (list, i, j) {
  var val = list[i];
  list[i] = list[j];
  list[j] = val;
}

/**
 * [rand description]
 * @param  {[type]} begin [description]
 * @param  {[type]} end   [description]
 * @return {[type]}       [description]
 */
function rand (begin, end) {
  return Math.floor(Math.random() * (begin-end+1) + end);
}

/**
 * [quicksort_wrapper description]
 * @param  {[type]} list [description]
 * @return {[type]}      [description]
 */
function quicksort_wrapper (list) {
  quicksort(list, 0, list.length-1);
  return list;
}

/**
 *
 * 
 * 
 */

module.exports = quicksort_wrapper;