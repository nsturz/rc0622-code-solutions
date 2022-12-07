const modalButton = document.getElementById('modal-button');
const surveyModal = document.getElementById('survey-modal');
const overlay = document.getElementById('overlay');
const noButton = document.getElementById('no-button');

modalButton.addEventListener('click', () => {
  surveyModal.className = 'row justify-center';
  overlay.className = 'overlay';
});

noButton.addEventListener('click', () => {
  surveyModal.className = 'row justify-center hidden';
  overlay.className = 'overlay hidden';
});
