// you need to somehow make the counter variable NOT get
// reset every time the function calls

function countDown() {
  var h1 = document.querySelector('h1');
  var counter = 4;
  if (counter === 4) {
    counter--;
    var three = h1.textContent = '3';
    return three;
  } else if (counter === 3) {
    var two = h1.textContent = '2';
    counter--;
    return two;
  } else if (counter === 2) {
    var one = h1.textContent = '1';
    counter--;
    return one;
  } else if (counter === 1) {
    var earthBelow = h1.textContent = '~Earth Beeeellooww Us~';
    return earthBelow;
  }
}

setInterval(countDown, 1000);
