function handleFocus(event) {
  console.log('focusEvent: fired');
  console.log('targetName:', event.target.name);
}

function handleBlur(event) {
  console.log('blurEvent: fired');
  console.log('targetName:', event.target.name);
}

function handleInput(event) {
  console.log(
    'targetName:', event.target.name,
    'targetValue:', event.target.value);
}

var userName = document.getElementById('user-name');
var userEmail = document.getElementById('user-email');
var userTextArea = document.getElementById('user-message');

userName.addEventListener('focus', handleFocus);
userName.addEventListener('blur', handleBlur);
userName.addEventListener('input', handleInput);

userEmail.addEventListener('focus', handleFocus);
userEmail.addEventListener('blur', handleBlur);
userEmail.addEventListener('input', handleInput);

userTextArea.addEventListener('focus', handleFocus);
userTextArea.addEventListener('blur', handleBlur);
userTextArea.addEventListener('input', handleInput);
