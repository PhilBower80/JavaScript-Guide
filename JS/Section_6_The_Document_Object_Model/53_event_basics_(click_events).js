const button = document.querySelector('button');

button.addEventListener('click', () => {
	// () empty brackets are fine in this instance because we do not need to reference the event in the code block.
	console.log('you clicked me');
});

///////////////////////////////////////////////////////////

// Use forEach to cycle through all li tags (class = event-basics-li)
// Then add event listener to those results to add a click event.
const items = document.querySelectorAll('.event-basics-li');

items.forEach(item => {
	item.addEventListener('click', e => {
		// console.log('item clicked');
		// console.log(e);
		// console.log(e.target);
		e.target.style.textDecoration = 'line-through';
	});
});
