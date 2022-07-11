/* exported isVowel */

/*
- all char values must firt be converted into a capital letter to
make this easier, and they must be saved into a new variable
- a conditional statment must be declared that checks to see
- if the new variable is strictly equal to 1 of 6 vowels
- if true for any, return true
- if false, return false

*/
function isVowel(char) {
  var newChar = char.toUpperCase();
  if (newChar === 'A' || newChar === 'E' || newChar === 'I' ||
  newChar === 'O' || newChar === 'U') {
    return true;
  } else {
    return false;
  }
}
