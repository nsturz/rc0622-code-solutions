/* exported compact */
/*
!false === true
!null === true
!NaN === true
!0 === true
!-0 === true
!undefined ===true
!''===true
*/
function compact(array) {
  var falsy = [];
  var truthy = [];
  for (var i = 0; i < array.length; i++) {
    if (!array[i] === true) {
      falsy.push(array[i]);
    } else {
      truthy.push(array[i]);
    }
  } return truthy;
}
