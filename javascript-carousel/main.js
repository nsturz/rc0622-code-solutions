// you now need to edit the event listener for the side buttons
var dot1 = document.getElementById('dot-1');
var dot2 = document.getElementById('dot-2');
var dot3 = document.getElementById('dot-3');
var dot4 = document.getElementById('dot-4');
var dot5 = document.getElementById('dot-5');
var image = document.querySelector('img');
var leftButton = document.getElementById('left-button');
var rightButton = document.getElementById('right-button');
var dotContainer = document.getElementById('dot-container');

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
    pokemon === 'charmander' || image.getAttribute('src') === 'images/001.png') {
    image.setAttribute('src', 'images/004.png');
    dotSwap('charmander');
  } else if (
    pokemon === 'squirtle' || image.getAttribute('src') === 'images/004.png') {
    image.setAttribute('src', 'images/007.png');
    dotSwap('squirtle');
  } else if (
    pokemon === 'pikachu' || image.getAttribute('src') === 'images/007.png') {
    image.setAttribute('src', 'images/025.png');
    dotSwap('pikachu');
  } else if (
    pokemon === 'jigglypuff' || image.getAttribute('src') === 'images/025.png') {
    image.setAttribute('src', 'images/039.png');
    dotSwap('jigglypuff');
  } else if (
    pokemon === 'bulbasaur' || image.getAttribute('src') === 'images/039.png') {
    image.setAttribute('src', 'images/001.png');
    dotSwap('bulbasaur');
  }
}

leftButton.addEventListener('click', function (event) {
  if (image.getAttribute('src') === 'images/039.png') {
    photoSwap('pikachu');
  } else if (image.getAttribute('src') === 'images/025.png') {
    photoSwap('squirtle');
  } else if (image.getAttribute('src') === 'images/007.png') {
    photoSwap('charmander');
  } else if (image.getAttribute('src') === 'images/004.png') {
    image.setAttribute('src', 'images/001.png');
    dotSwap('bulbasaur');
  } else if (image.getAttribute('src') === 'images/001.png') {
    image.setAttribute('src', 'images/039.png');
    dotSwap('jigglypuff');
  } clear();
});

rightButton.addEventListener('click', function (event) {
  clear();
  if (image.getAttribute('src') === 'images/039.png') {
    photoSwap('bulbasaur');
  } else if (image.getAttribute('src') === 'images/001.png') {
    image.setAttribute('src', 'images/004.png');
    dotSwap('charmander');
  } else if (image.getAttribute('src') === 'images/004.png') {
    photoSwap('squirtle');
  } else if (image.getAttribute('src') === 'images/007.png') {
    photoSwap('pikachu');
  } else if (image.getAttribute('src') === 'images/025.png') {
    photoSwap('jigglypuff');
  }
});

dotContainer.addEventListener('click', function (event) {
  clear();
  if (event.target === dot1) {
    image.setAttribute('src', 'images/001.png');
    dotSwap('bulbasaur');
  } else if (event.target === dot2) {
    photoSwap('charmander');
  } else if (event.target === dot3) {
    photoSwap('squirtle');
  } else if (event.target === dot4) {
    photoSwap('pikachu');
  } else if (event.target === dot5) {
    photoSwap('jigglypuff');
  }
});

var interval;
function carousel() {
  interval = setInterval(photoSwap, 3000);
}
carousel();

function clear() {
  clearInterval(interval);
  interval = setTimeout(carousel, 3000);
}
