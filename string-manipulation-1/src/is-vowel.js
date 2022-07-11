/* exported isVowel */

/*
- new variable needs to

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
