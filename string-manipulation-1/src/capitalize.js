/* exported capitalize */
/*
for this one, we need to use toUpperCase to capitalize the
first letter of each string, and we can save that to a variable
- we then need to remove the rest of the string, make it lowercase, and then
save that to a variable as well.
- we then concatenate the two variables, and then return the result of
that exoression from the function
*/
function capitalize(string) {
  var capFirstLetter = string[0].toUpperCase();
  var restOfword = string.slice(1).toLowerCase();
  var newWord = capFirstLetter + restOfword;

  return newWord;
}
