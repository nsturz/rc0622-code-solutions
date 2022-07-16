/* exported getWords */
/*
- string needs to be converted into an array and the result of that
needs ot be saved in a new variable
- new variable needs to be return from the function's code block
- for the empty string, since there will be nothing to convert, we will
need to create a conditional statement for that since its an exception
*/
function getWords(string) {
  if (string === '') {
    return [];
  } else {
    var words = string.split(' ');
    return words;
  }
}
