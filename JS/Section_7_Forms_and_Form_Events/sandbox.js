const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z0-9]{8,}$/;

form.addEventListener('submit', e => {
	e.preventDefault();

	// Validation
	const username = form.username.value;

	if (usernamePattern.test(username)) {
		// feedback good info
		feedback.textContent = 'username = valid';
	} else {
		// feedback help info
		feedback.textContent =
			'invalid username, must contain letter &/or numbers only & be at least 8 characters long';
	}
});

// Live feedback

form.username.addEventListener('keyup', e => {
	// console.log(e.target.value);
	if (usernamePattern.test(e.target.value)) {
		// console.log('Success');
		form.username.setAttribute('class', 'success');
	} else {
		// console.log('Error');
		form.username.setAttribute('class', 'error');
	}
});
