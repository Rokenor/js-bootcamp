const myElId = document.getElementById('someid');
console.dir(myElId); // see the object

const myElTag = document.getElementsByTagName('input'); // return all inputs

const myElClass = document.getElementsByClassName('someclass'); // return all elements with that class

// ---------------

document.querySelector('h1'); // first h1 element
document.querySelector('#red'); // first element with id of red
document.querySelector('.big'); // first element with class of big
document.querySelectorAll('input'); // all elements with type of input
