/* exported reverse */

/*
- function must be declared with parameter of array
- a new array must be initialized and assigned to a variable called
  "newArray"
- a for loop will be used to decrement through array
- each element must be sliced and pushed into the "newArray" array
- newArray will be returned from the function's code block
*/

function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  } return newArray;
}
