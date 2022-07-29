// you now need to edit the event listener for the side buttons
var dot1 = document.getElementById('dot-1');
var dot2 = document.getElementById('dot-2');
var dot3 = document.getElementById('dot-3');
var dot4 = document.getElementById('dot-4');
var dot5 = document.getElementById('dot-5');
var image = document.querySelector('img');
// var leftButton = document.getElementById('left-button');
// var rightButton = document.getElementById('right-button');

function dotSwap(pokemon) {
  if (pokemon === 'bulbasaur') {
    dot1.className = 'fa-solid fa-circle fa-1x';
    dot2.className = 'fa-regular fa-circle fa-1x';
    dot3.className = 'fa-regular fa-circle fa-1x';
    dot4.className = 'fa-regular fa-circle fa-1x';
    dot5.className = 'fa-regular fa-circle fa-1x';
  } else if (pokemon === 'charmander') {
    dot1.className = 'fa-regular fa-circle fa-1x';
    dot2.className = 'fa-solid fa-circle fa-1x';
    dot3.className = 'fa-regular fa-circle fa-1x';
    dot4.className = 'fa-regular fa-circle fa-1x';
    dot5.className = 'fa-regular fa-circle fa-1x';
  } else if (pokemon === 'squirtle') {
    dot1.className = 'fa-regular fa-circle fa-1x';
    dot2.className = 'fa-regular fa-circle fa-1x';
    dot3.className = 'fa-solid fa-circle fa-1x';
    dot4.className = 'fa-regular fa-circle fa-1x';
    dot5.className = 'fa-regular fa-circle fa-1x';
  } else if (pokemon === 'pikachu') {
    dot1.className = 'fa-regular fa-circle fa-1x';
    dot2.className = 'fa-regular fa-circle fa-1x';
    dot3.className = 'fa-regular fa-circle fa-1x';
    dot4.className = 'fa-solid fa-circle fa-1x';
    dot5.className = 'fa-regular fa-circle fa-1x';
  } else if (pokemon === 'jigglypuff') {
    dot1.className = 'fa-regular fa-circle fa-1x';
    dot2.className = 'fa-regular fa-circle fa-1x';
    dot3.className = 'fa-regular fa-circle fa-1x';
    dot4.className = 'fa-regular fa-circle fa-1x';
    dot5.className = 'fa-solid fa-circle fa-1x';
  }
}

function photoSwap(pokemon) {

  if (
    image.getAttribute('src') === 'images/001.png' || pokemon === 'charmander') {
    image.setAttribute('src', 'images/004.png');
    dotSwap('charmander');
  } else if (
    image.getAttribute('src') === 'images/004.png' || pokemon === 'squirtle') {
    image.setAttribute('src', 'images/007.png');
    dotSwap('squirtle');
  } else if (
    image.getAttribute('src') === 'images/007.png' || pokemon === 'pikachu') {
    image.setAttribute('src', 'images/025.png');
    dotSwap('pikachu');
  } else if (
    image.getAttribute('src') === 'images/025.png' || pokemon === 'jigglypuff') {
    image.setAttribute('src', 'images/039.png');
    dotSwap('jigglypuff');
  } else if (
    image.getAttribute('src') === 'images/039.png' || pokemon === 'bulbasaur') {
    image.setAttribute('src', 'images/001.png');
    dotSwap('bulbasaur');
  }
}

// function clear() {
//   clearInterval(interval);
// }

// leftButton.addEventListener('click', function (event) {
//   clear();

// });

photoSwap('squirtle');
// var interval = setInterval(photoSwap, 3000);
// console.log(setInterval(photoSwap, 3000));

// console.log(image.getAttribute('src'));
