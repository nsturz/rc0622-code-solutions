function beginCountDown() {
  var h1 = document.querySelector('h1');
  if (h1.textContent === '4') {
    var three = h1.textContent = '3';
    return three;
  } else if (h1.textContent === '3') {
    var two = h1.textContent = '2';
    return two;
  } else if (h1.textContent === '2') {
    var one = h1.textContent = '1';
    return one;
  } else if (h1.textContent === '1') {
    var earthBelow = h1.textContent = '~Earth Beeeellooww Us~';
    return earthBelow;
  }

}

setInterval(beginCountDown, 1000);
