const ul = document.querySelector('.event-basics-ul');
const button = document.querySelector('button');

button.addEventListener('click', e => {
	const li = document.createElement('li');
	li.textContent = 'something new to do';
	// ul.prepend('li');
	ul.append('li');
});

const items = document.querySelectorAll('.event-basics-li');

items.forEach(item => {
	item.addEventListener('click', e => {
		console.log('event in LI');
		e.stopPropagation(); // This stops the event bubbling up to the parent element.
		e.target.remove();
	});
});

// The function below shows that the click event bubbles up to the parent.
ul.addEventListener('click', e => {
	console.log('event in UL');
});

///////////////////////////////////////////////////////////

// The below is an example of how to use event bubbling / delegation to affect it's child elements
// This is a great method because any newly created LI tags will retain the click functionality.

const ul = document.querySelector('.event-basics-ul');
const button = document.querySelector('button');

button.addEventListener('click', e => {
	const li = document.createElement('li');
	li.textContent = 'something new to do';
	ul.prepend(li);
});

ul.addEventListener('click', e => {
	// console.log('event in UL');
	if (e.target.tagName === 'LI') {
		// If statement incluided to ensure that only the li tags are affected and potentially not any other elements within the parent.
		e.target.remove();
	}
});
