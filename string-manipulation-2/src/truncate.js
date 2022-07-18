/* exported truncate */
function truncate(length, string) {
  var ellipses = '...';
  var truncated = string.slice(0, length);
  return truncated + ellipses;

}
