function flatten(array) {
  return array.reduce((a, b) => {
    return [].concat(a).concat( Array.isArray(b) ? flatten(b) : b);
  });
}

module.exports = flatten;
