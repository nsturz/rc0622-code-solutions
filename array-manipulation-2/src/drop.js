/* exported drop */
/*
-similar to take(), but  we will need to start from the end of the
function and work our way backwards (array.length -1 - count)
*/

function drop(array, count) {
  var newArray = array.slice(count + 1 - 1);
  return newArray;
}
