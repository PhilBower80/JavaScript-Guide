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

//////////////////////////////////////////////////////
// testing RegEx

const username = 'shaunp';
const pattern = /^[a-zA-Z0-9]{6,}$/; // only letters a-z must be at least characters long.

let result = pattern.test(username);
console.log(result);

if (result) {
	console.log('RegEx test has passed :)');
} else {
	console.log('RegEx test has failed :(');
}

// the below is an alternative of the above. result will return -1 if incorrect or 0 or above for any correct usernames. The number equals the position of the match.
let result = username.search(pattern);
console.log(result);
