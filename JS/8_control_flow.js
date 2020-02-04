// FOR LOOPS

for (let i = 0; i < 5; i++) {
	console.log('in loop:', i);
} // No ';' at end of a loop

console.log('loop finished');

// Example of how to output an array to HTML
const names = ['shaun', 'mario', 'luigi'];

for (let i = 0; i < names.length; i++) {
	// console.log(names[i]); // this will output all names in the array
	let html = `<div>${names[i]}</div>`;
	console.log(html);
}

// WHILE LOOPS

let i = 0;
while (i < 5) {
	console.log('in loop:', i);
	i++;
}

let j = 0;
while (j < names.length) {
	console.log(names[j]);
	j++;
}

//DO WHILE LOOPS (this allows you to run code at least once even if the condition isn't true)

let k = 5;

do {
	console.log('val of k is: ', k);
	k++;
} while (k < 5);

// IF STATEMENTS

const password = 'p@ss';

if (password.length >= 12) {
	console.log('that password is mighty strong');
} else if (password.length >= 8) {
	console.log('that password is long enough');
} else {
	console.log('password is not long enough');
}

// LOGICAL OPERATORS ---  OR || AND and &&

const password = 'p@ss';

if (password.length >= 12 && password.includes('@')) {
	console.log('that password is mighty strong');
} else if (
	password.length >= 8 ||
	(password.includes('@') && password.length >= 5)
) {
	console.log('that password is long enough');
} else {
	console.log('password is not long enough');
}

// SWITCH STATEMENTS
//Switch statments use STRICT EQUALITY (===)

const grade = 'D';

switch (grade) {
	case 'A':
		console.log('you got an A!');
		break;
	case 'B':
		console.log('you got an B!');
		break;
	case 'C':
		console.log('you got an C!');
		break;
	case 'D':
		console.log('you got an D!');
		break;
	case 'E':
		console.log('you got an E!');
		break;
	default:
		console.log('not a valid grade');
}
