function flattenThunk(func) {
  // return a function, which takes a callback as an argument
  return function(fn) {
    // result will either be another function or the result, decide what to do based on its type
    function next(err, result) {
      return typeof result === 'function' ? result(next) : fn(err, result);
    }

    // kick off the flattening
    func(next);
  };
}

module.exports = flattenThunk;
