function binarySearch(arr, query) {
  var array = arr.sort();
  var match = query;

  var newArray;

  // if one item in array
  if (array.length == 1 && array[0] == match) {
    if(array[0] == match) {
      console.log(array[0] == match, 'these match!!');
      return 0;
    };
  }

  if (array.length == 1 && array[0] != match) {
    console.log('there is one item, and it doesnt match');
    return -1;
  }

  // covers empty array
  if (array.length == 0) {
    console.log('the array is empty');
    return -1;
  }

  // find the middle

  var mid = Math.floor((array.length - 1) / 2);

  // check if middle matches query return if so

  if (array[mid] === match) {
    return mid;
  }

  // other wise chop up the array and call binarySearch again

  if (array[mid] > match) {
    var secondidx = mid - 1;
    newArray = array.slice(0, secondidx);
    console.log('get first half', newArray, match);
    binarySearch(newArray, match);
  } else {
    var secondidx = mid + 1;
    newArray = array.slice(secondidx);
    console.log('get second half', newArray, match);
    binarySearch(newArray, match);
  }

  // why does this always get returned?
  return -1;

};

module.exports = binarySearch;
