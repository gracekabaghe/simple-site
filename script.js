const theBody = document.body;
// append h1 element
const header = document.createElement('h1');
const secondHeader = document.createElement('h2');
const redBox = document.querySelector('#redBox');
theBody.append(header);
header.innerHTML = 'DOM Manipulation';
theBody.append(secondHeader);
secondHeader.innerHTML = 'Learning about DOM manipulation';

// when the red box is clicked it animates

redBox.addEventListener('click', e => {
alert('You clicked the red box');
});
