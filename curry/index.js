function curry(f, n) {
  // create array of arguments

  var args = Array.prototype.slice.call(arguments);

  // first time round at least, there will be no n, so set it from the
  // function.length which gives number of arguments

  if (typeof n === 'undefined') {
    args[1] = f.length;
  }

  // if the number given to the function is equal to the argument length - 2,
  // get the arguments remaining to be called because 1 and 2 of arguments
  // should be the function being called, and the number of times to call it.

  if (n === args.length - 2) {
    return f.apply(undefined, args.slice(2));
  }

  // return function which recursively calls curry with arguments until the above criteria is met

  return function() {
    return curry.apply(undefined, args.concat(Array.prototype.slice.call(arguments)));
  };
}

module.exports = curry;
