/* exported isUpperCased */
/*
-this one is just like isLowerCase(), but we will use toUpperCase
  in the conditional statement
*/
function isUpperCased(word) {
  if (word === word.slice(0).toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
