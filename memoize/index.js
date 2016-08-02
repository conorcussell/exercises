function memoize(fn) {

  // create cache
  var memo = {};

  // return function
  return function() {

    // create args array
    var args = Array.prototype.slice.call(arguments);

    // check if args in cache
    if (args in memo) {
      // if so, return
      return memo[args];
    } else {
      // else, add to cache
      return memo[args] = fn.apply(this, args);
    }
  }

}

module.exports = memoize;
