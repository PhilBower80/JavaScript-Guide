const ul = document.querySelector('.event-basics-ul');

const button = document.querySelector('button');

button.addEventListener('click', e => {
	const li = document.createElement('li');
	li.textContent = 'something new to do';
	ul.append(li);
	ul.prepend(li);
});

// There is a better way to do the above. Creating li tags in this manner will not attach any attributes like class name so styling is lost and it also won't attach any javascript functions that have already loaded, so they won't have the dsame functionality that the already existing li tags have.

const items = document.querySelectorAll('.event-basics-li');

items.forEach(item => {
	item.addEventListener('click', e => {
		e.target.remove();
	});
});
