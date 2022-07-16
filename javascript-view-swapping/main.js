var tabContainer = document.querySelector('.tab-container');
var tabs = document.querySelectorAll('.tab');
var views = document.querySelectorAll('.view');
tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i] === event.target) {
        tabs[i].className = 'tab active';
      } else {
        tabs[i].className = 'tab';
      }
    } var dataView = event.target.getAttribute('data-view');
    for (var j = 0; j < views.length; j++) {
      if (dataView === views[j].getAttribute('data-view')) {
        views[j].className = 'view';
      } else {
        views[j].className = 'view hidden';
      }
    }
  }
});
