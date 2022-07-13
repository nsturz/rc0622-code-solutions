var clicks = 0;

function lightSwitch() {
  clicks++;
  if (clicks % 2 === 0) {
    backGround.className = 'background-off container';
    button.className = 'button-off circle';
  } else {
    backGround.className = 'background-on container';
    button.className = 'button-on circle';
  }
}

var backGround = document.querySelector('.background-off');
var button = document.querySelector('.button-off');
button.addEventListener('click', lightSwitch);
