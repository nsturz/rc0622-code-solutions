function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event target:', event.target);
}

var clickButton = document.querySelector('.click-button');
clickButton.addEventListener('click', handleClick);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event target:', event.target);
}

var buttonObject = document.querySelector('.hover-button');
buttonObject.addEventListener('mouseover', handleMouseOver);

function handleDoubleClick(event) {
  console.log('button double clicked');
  console.log('event:', event);
  console.log('event target:', event.target);
}

var doubleClick = document.querySelector('.double-click-button');
doubleClick.addEventListener('dblclick', handleDoubleClick);
