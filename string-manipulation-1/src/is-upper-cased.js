/* exported isUpperCased */
function isUpperCased(word) {
  if (word === word.slice(0).toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
