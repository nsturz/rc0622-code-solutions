/* exported tail */
/*
- for this exercise, we need to access all elements of the array
after the first(indexed at 0), and push them into a new array.
- since we cant use certain methods, we need to iterate through the array.
- if index of array (array[i]) is !== to 0, we push it into the new array.
- then we return the new array from the function's code block.
*/

function tail(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== 0) {
      newArray.push(array[i]);
    }
  } return newArray;
}
