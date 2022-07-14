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

function formReset() {
  document.getElementById('contact-form').reset();
}

function onSubmit(event) {
  event.preventDefault();
  var name = contactForm.elements.name.value;
  var email = contactForm.elements.email.value;
  var textArea = contactForm.elements.message.value;
  var formData = {};
  formData.name = name;
  formData.email = email;
  formData.textArea = textArea;

  formReset();
  console.log(formData);
}

var userName = document.getElementById('user-name');
var userEmail = document.getElementById('user-email');
var userTextArea = document.getElementById('user-message');
var contactForm = document.getElementById('contact-form');
var button = document.querySelector('button');

userName.addEventListener('focus', handleFocus);
userName.addEventListener('blur', handleBlur);
userName.addEventListener('input', handleInput);

userEmail.addEventListener('focus', handleFocus);
userEmail.addEventListener('blur', handleBlur);
userEmail.addEventListener('input', handleInput);

userTextArea.addEventListener('focus', handleFocus);
userTextArea.addEventListener('blur', handleBlur);
userTextArea.addEventListener('input', handleInput);
button.addEventListener('click', onSubmit);
contactForm.addEventListener('submit', onSubmit);
