function value(arg) {
  if (isFunction(arg)) {
    var val = arg();

    while (!isValue(val)) {
      val = val();
    }

    return val;
  } else {
    return arg;
  }
}

var isFunction = function(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}

var isValue = function(val) {
  return !!(val && typeof val === 'number' || typeof val === 'String');
}

module.exports = value;
