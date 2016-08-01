function map(array, fn, thisArg) {
  var arr = [];
  var ctx;

  if (arguments.length > 2) {
      // call with context if supplied as parameter. 
      ctx = thisArg;
    }


  for (var i = 0; array.length > i; i++) {
    arr.push(fn.call(ctx, array[i], i, array));
  }

  return arr;

}

module.exports = map;
