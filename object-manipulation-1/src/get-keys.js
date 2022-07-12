/* exported getKeys */
/*
-function declaration
- assign empty array to variable ( called array)
- use a for...in loop to iterate through the object
       (for(keys in object))
- inside the for..in loop: array.push(object[key].value)
*/

function getKeys(object) {
  var array = [];
  for (var keys in object) {
    array.push(keys);
  } return array;
}
