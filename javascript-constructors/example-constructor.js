function ExampleConstructor() {

}
console.log(ExampleConstructor.prototype);
console.log(
  'ExampleConstructor prototype typeof:', typeof ExampleConstructor.protoype);

var newExampleConstructor = new ExampleConstructor();
console.log('newExampleConstructor:', newExampleConstructor);
var instanceOfCheck = newExampleConstructor instanceof ExampleConstructor;
console.log('instanceOfCheck:', instanceOfCheck);
