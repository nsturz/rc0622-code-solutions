/* exported countdown */

/*
 - function will be called countDown and take a parameter of number
 - number needs to be subtracted by 1 for every iteration
 -array needs to start at number and end at 0
 -once number is > = 0,, the loop stops (while (number >= 0),
    execute the code
  -the code block of the loop needs to push the result of number -1
   into the array
 -at the end, the function needs to return an array containing all t
  he numbers

*/
function countdown(number) {
  var numbers = [];
  for (var i = number; i >= 0; i--) {
    numbers.push(i);
  }

  return numbers;
}
