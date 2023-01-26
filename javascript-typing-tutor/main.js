var span = document.querySelectorAll('span');
var counter = 0;

document.addEventListener('keydown', event => {
  if (event.key !== ' ') {
    counter++;
  }
  for (var i = 0; i < span.length; i++) {
    if (event.key === span[i].textContent && counter - 1 === i) {
      span[i].className = 'correct';
      span[i + 1].className = 'underline';
    } else if (event.key !== span[i].textContent && counter - 1 === i && event.key !== ' ') {
      span[i].className = 'wrong underline';
      counter--;
    }
  }
});
