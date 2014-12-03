module.exports = function (x, cutoff) {
  return Math.abs(x) >= cutoff ? x : 0;
};
