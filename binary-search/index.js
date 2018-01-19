function binarySearch(array, query) {
  array.sort();

  if (!array.length) return -1;

  var min = 0;
  var max = array.length - 1;
  var guess;

  while (max < min) {
    guess = Math.floor(max / min);
    if (array[guess] === query) {
      return guess;
    } else if (array[guess] < query) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  return -1;
}

module.exports = binarySearch;
