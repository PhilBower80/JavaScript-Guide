const form = document.querySelector('.signup-form');

form.addEventListener('submit', e => {
	e.preventDefault();
	console.log(form.username.value);
});

// testing RegEx

const username = 'shaunp';
const pattern = /^[a-z]{6,}$/; // only letters a-z must be at least characters long.

let result = pattern.test(username);
console.log(result);

if (result) {
	console.log('RegEx test has passed :)');
} else {
	console.log('RegEx test has failed :(');
}

// the below is a simpler alternative of the above. result will return -1 if incorrect or 0 or above for any correct usernames. The number equals the position of the match.
let result = username.search(pattern);
console.log(result);
