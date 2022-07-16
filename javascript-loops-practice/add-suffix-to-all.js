/* exported addSuffixToAll */

/*
  function definition needs to  occur
  empty array needs to be created
  loop needs to iterate through the array of words provided
  for every word, the suffix needs to be concatenated (+), and stored into a
  new variable called newWord
  newWord needs to then be pushed into the empty array
  loop stops once all words have been converted (words.length)
  after the loop's code block, the empty array is returned from thr function's
  code block

*/
function addSuffixToAll(words, suffix) {
  var newArray = [];
  for (var i = 0; i < words.length; i++) {
    var newWord = words[i] + suffix;
    newArray.push(newWord);
  } return newArray;
}
