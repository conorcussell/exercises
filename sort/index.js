// A selection sort implementation I original wrote for Khan Academy Comp. Sci module

function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

function indexOfMinimum(array, startIndex) {
  let minValue = array[startIndex];
  let minIndex = startIndex;

  for (let i = minIndex + 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
}

function sort(array) {
  array.forEach((_, i) => swap(array, i, indexOfMinimum(array, i)));
  return array;
}

module.exports = sort;
