
var s = document.getElementById('S');

s.addEventListener('keydown', event => {
  if (event.key === 'S') {
    s.className = 'activated';
  }
});
