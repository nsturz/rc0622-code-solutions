/* exported initial */
/*
like tail.js, we will need to loop through the array and push
each value into a new array BESIDES array.length -1
*/

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      newArray.push(array[i]);
    }
  } return newArray;
}
