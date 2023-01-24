// var s = document.getElementById('s');
// var o = document.getElementById('o');

// document.addEventListener('keydown', event => {
//   if (event.key === 's') {
//     s.className = 'activated';
//   } if (event.key === 'o') {
//     o.className = 'activated';
//   }
// });

var span = document.querySelectorAll('span');

document.addEventListener('keydown', event => {
  // eslint-disable-next-line no-console
  console.log('span:', span[1].textContent);
});
