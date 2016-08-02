function value(arg) {
  var val = arg;

  while (!isValue(val)) {
    val = val();
  }

  return val;
}

var isValue = function(val) {
  return !!(val && typeof val === 'number' || typeof val === 'String');
}

module.exports = value;
