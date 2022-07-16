/* exported filterOutNulls */
/*
-function must be defined with paramater of values
-(values  will be an [array] consisting of multiple numerical values)
- an empty array must be assigned to a new variable. we'll call it 'numbers'
-since this is an array, we will use a for loop to iterate through each index
  of the values array.
- if null is found, the conditional needs to slice it out of the array
- the loop then continues to push numbers into the numbers array like normal
- after the loops's code block, the numbers array is returned

*/

function filterOutNulls(values) {
  var numbers = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      numbers.push(values[i]);
    }
  }
  return numbers;
}
