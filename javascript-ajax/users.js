var userList = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();

function appendLi(array) {
  for (var i = 0; i < array.length; i++) {
    var newLi = document.createElement('li');
    newLi.textContent = array[i].name;
    userList.appendChild(newLi);
  }

}

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log('xhr status:', xhr.status);
  console.log('xhr response:', xhr.response);

  appendLi(xhr.response);
});

xhr.send();
