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
var contactForm = document.getElementById('contact-form');
var button = document.querySelector('button');
contactForm.addEventListener('submit', onSubmit);
button.addEventListener('click', onSubmit);
