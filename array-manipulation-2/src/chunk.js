/* exported chunk */
/*
- completed challenge!!! did not use array.prototype.slice()
- some notes: array.length / size should not equal zero exfept for the very last problem
- there is an original array, and a final array, with an unknown
number of subsequent arrays contained in the final array.
*/

function chunk(array, size) {
  if (array.length !== 0) {
    var finalArray = [];
    var subArray = [];
    for (var i = 0; i < array.length; i++) {
      if (subArray.length < size) {
        subArray.push(array[i]);
      } else if (subArray.length >= size) {
        finalArray.push(subArray);
        subArray = [];
        subArray.push(array[i]);
      }
    }
    finalArray.push(subArray);
    return finalArray;
  }
  return array;
}
