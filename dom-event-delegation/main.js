/* function e() {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
} */
var taskList = document.querySelector('.task-list');

taskList.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    var closest = event.target.closest('.task-list-item');
    console.log('closest:', closest);
    closest.remove();
  }
});
