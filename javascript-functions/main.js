function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log('convertMinutesToSeconds:', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}

console.log('greet:', greet('shaggy!'));

function getArea(width, height) {
  return width * height;
}

console.log('getArea:', getArea(55, 98));

function getFirstName(person) {
  return person.firstName;
}

console.log('getFirstName:', getFirstName(
  { firstName: 'Nick', lastName: 'Sturz' }));

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('getLastElement:', getLastElement(
  ['sith', 'lords', 'are', 'our', 'speciality']));
