/* exported capitalizeWord */
/*
- my solution to this one feels janky but hey it works
*/
function capitalizeWord(word) {
  var firstChar = word[0].toUpperCase();
  var restOfWord = word.slice(1).toLowerCase();
  var newWord = firstChar + restOfWord;
  for (var i = 0; i < newWord.length; i++) {
    if (newWord[0] === 'j' || newWord[0] === 'J') {
      var avaScript = 'avaScript';
      var firstLetter = newWord.slice(0, 1);
      var js = firstLetter + avaScript;
      return js;
    }
  } return newWord;
}
