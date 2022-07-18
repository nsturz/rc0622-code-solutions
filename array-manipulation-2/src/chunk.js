/* exported chunk */
/*
- some notes: array.length / size should equal 1
- there is an original array, and a final array, with an unknown
number of subsequent arrays contained in the final array.
-

*/

function chunk(array, size) {
  var finalArray = [];
  var sliced = array.slice(0, size);
  var sliced2 = array.slice(-size);
  finalArray.push(sliced, sliced2);
  return finalArray;
}
