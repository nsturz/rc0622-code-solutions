/* exported toObject */
/*
- function declaration ()
- new object called (object {})
- place index 0 and 1 into object one at a time
- return object from function code block
*/

function toObject(keyValuePair) {
  var obj = {};
  var objKey = keyValuePair[0];
  var objVal = keyValuePair[1];
  obj[objKey] = objVal;
  return obj;
}
