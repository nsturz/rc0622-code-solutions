/* exported takeRight */
/*
- if (array.length < count){
  return [];
-  else, we will slice array at rray(-count) to return the last
number of strings in the array.
- we don't need a new empty array for this one because it will
automatically be made by using thr slice method
}
*/

function takeRight(array, count) {
  if (array.length < count) {
    return array;
  } else {
    var sliced = array.slice(-count);
  } return sliced;
}
