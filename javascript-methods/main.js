var twentyOne = 21;

var sixtyFive = 65;

var oneEleven = 111;

var maximumValue = Math.max(twentyOne, sixtyFive, oneEleven);
console.log('maximumValue:', maximumValue);

var heroes = ['batman', 'spiderman', 'wolverine', 'professor x'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'The Silmarillion',
    author: 'J.R.R. Tolkien'
  },
  {
    title: 'A People\'s Guide To Capitalism',
    author: 'Hadas Thier'
  },
  {
    title: 'Monster',
    author: 'Sanyika Shakur'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Nick Sturz';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName', sayMyName);
