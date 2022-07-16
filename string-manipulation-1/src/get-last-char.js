/* exported getLastChar */

/*
- we need to access the last character of the string. then we
need to slice it, and save the result of that expression to
a vairable.
- then we can return the variable from the function's code block
*/
function getLastChar(string) {
  var lastChar = string.slice(string.length - 1);
  return lastChar;
}
