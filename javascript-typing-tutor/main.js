/* eslint-disable no-console */
// letters now turn green when correct, and red when incorrect, but they also turn red when you
// press "space" after a correct letter

var span = document.querySelectorAll('span');
var counter = 0;

document.addEventListener('keydown', event => {
  if (event.key !== ' ') {
    counter++;
  }
  for (var i = 0; i < span.length; i++) {
    if (event.key === span[i].textContent && counter - 1 === i) {
      span[i].className = 'activated';
      console.log('i', i);
      console.log('counter:', counter);
    } else if (event.key !== span[i].textContent && counter - 1 === i) {
      span[i].className = 'wrong';

    }
  }
  // // eslint-disable-next-line no-console
  // span[0].className = 'activated';
  //   console.log('span:', span);
  //   console.log('span.textContent', span[0].textContent);
  // console.log('event.key', typeof event.key);
  // console.log('event:', event);
});
