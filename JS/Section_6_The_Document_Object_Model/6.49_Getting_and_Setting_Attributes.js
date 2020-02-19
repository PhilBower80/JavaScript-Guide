// Get
const link = document.querySelector('a');
console.log(link.getAttribute('href'));

// Set
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

// more Get & Set examples
const msg = document.querySelector('p');
console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'newClassName');
console.log(msg.getAttribute('class'));
msg.setAttribute('style', 'color: green');
console.log(msg.getAttribute('style'));

///////////////////////////////////////////////////////////////

// Example of how to search a paragraph for a word and then apply a style if that word is found.
const answers = document.querySelectorAll('p');

answers.forEach(answer => {
	if (answer.textContent.includes('unique')) {
		answer.setAttribute('style', 'color: green');
	}
});
