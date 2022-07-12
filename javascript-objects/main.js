var student = {
  firstName: 'Nick',
  lastName: ' Sturz',
  age: 29
};

var fullName = student.firstName += student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'technical specialist at Apple';

console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'toyota',
  model: 'pickup',
  year: 1991
};

vehicle['color'] = 'blue';
vehicle['isConvertible'] = false;

console.log('value of vehicle color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Rajah',
  type: 'Pomeranian'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
