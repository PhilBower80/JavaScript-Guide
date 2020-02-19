const title = document.querySelector('#heading');

// title.setAttribute('style', 'margin: 50px;');

console.log(title.style);
console.log(title.style.color);

// this is a better way than the commented out version above.
// this way will not overwrite all styles and just overwrite the specified style.
title.style.backgroundColor = '#666';
