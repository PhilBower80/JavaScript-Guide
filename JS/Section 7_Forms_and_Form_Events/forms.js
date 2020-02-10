const form = document.querySelector('.signup-form');
const username = document.querySelector('#username');

form.addEventListener('submit', e => {
	e.preventDefault(); // this prevents default behaviour of form when submit button is pressed. i.e. stops web page refreshing.
	console.log(username.value);
});

/////////////////////////////////////////////////////

// Because it is a FORM they have methods you can already use so we wouldn't need the additional const variable of username as this is already an attribute of a form.

const form = document.querySelector('.signup-form');

form.addEventListener('submit', e => {
	e.preventDefault();
	console.log(form.username.value);
});
