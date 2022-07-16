/* exported isLowerCased */

/*
- in order to check to see if an entire string is lower cased, we need
to slice the word from the index of 0, so that we get the whole word
- we then assign the toLowerCase method to it, to make all the letters
lower cased. if the string entered === all of that, then our function
will return true
- if not, it will return false
*/
function isLowerCased(word) {
  if (word === word.slice(0).toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
