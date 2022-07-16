/* exported reverseWord */
/*
 - since we cannot use split, we must use a for loop to iterate
 through the string. but we will need to go backwards (i--)
 - a new empty string must be initialized and saved to a variable
 called newWord
 - for each pass of thr loop, the newWord will be concatenated with each
 index of the string (word)
*/

function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  } return newWord;
}
