/* exported take */
/*
- function declaration
- new array  contains sliced elements
- since we do not know what the count will be but we know that we want to start
 from the beginning of the array, we will start the slice at 0, and stop
 the slice at 0 + count
 -return the new array
*/

function take(array, count) {
  const newArray = array.slice(0, 0 + count);
  return newArray;
}
