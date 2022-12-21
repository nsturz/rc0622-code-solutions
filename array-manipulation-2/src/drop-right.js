/* exported dropRight */
/*
- since we can not use splice, we must be able to access the indexes
that are NOT being shaved off the end of the array
- we will use a for loop. and as it incriments through the loop, it will push
each element of array into newArray.
- for loop must STOP once it hits the index of (-count)
-return newArray, which will contain the values up to that point
*/

function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  } return newArray;
}
