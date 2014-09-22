/**
 * [heapify description]
 * @param  {[type]} list   [description]
 * @param  {[type]} length [description]
 * @return {[type]}        [description]
 */
function heapify (list, length) {
  var end=1;

  while (end < length) {
    sift_up(list, 0, end);
    end++;
  }

  return list;
}

/**
 * [sift_up description]
 * @param  {[type]} list  [description]
 * @param  {[type]} start [description]
 * @param  {[type]} end   [description]
 * @return {[type]}       [description]
 */
function sift_up (list, start, end) {
  // 
  var parent = undefined, child = end;

  while (child > 0) {
    parent = (child-1) >> 1;
    if (list[parent] < list[child]) {
      swap(list, parent, child);
      child = parent;
    }
    else
      break;
  }
}

/**
 * [swap description]
 * @param  {[type]} list [description]
 * @param  {[type]} i    [description]
 * @param  {[type]} j    [description]
 * @return {[type]}      [description]
 */
function swap (list, i, j) {
  var val = list[j];
  list[j] = list[i];
  list[i] = val;
}

module.exports = heapify;