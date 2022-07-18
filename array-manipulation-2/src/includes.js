/* exported includes */
/*
- function includes(array,value)
- dont need a new array
- need to loop through the array
- if array[i] === "value" {
  return true
- there also needs to be a seperate loop because if we put it all
in one loop, the loop will return false booleans before it gets to the true
ones.
*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  } for (var j = 0; j < array.length; j++) {
    if (array[i] !== value || array[i] === null || array[i]) {
      return false;
    }
  } return false;
}
