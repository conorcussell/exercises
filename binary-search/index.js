function binarySearch(array, query) {
  let mid = Math.floor((array.length - 1) / 2);

  while (array.length) {
    if (array[mid] === query) {
      return mid;
    } else if (array[mid] < query) {
      return binarySearch(array.slice(mid + 1), query);
    } else {
      return binarySearch(array.slice(0, mid - 1), query);
    }
  }
  return -1;
}

module.exports = binarySearch;
