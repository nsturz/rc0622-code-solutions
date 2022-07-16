/* exported getStudentNames */
/*
  function needs to be defined with one parameter
  a new, empty array must be declared
  a for...in loop will be used to loop through each object
  each value will be pushed into the new array
  loop will end once all objects have been iterated through
  new array will be returned from the function's code block

*/

function getStudentNames(students) {
  var studentNames = [];
  for (var i = 0; i < students.length; i++) {
    studentNames.push(students[i].name);

  } return studentNames;
}
