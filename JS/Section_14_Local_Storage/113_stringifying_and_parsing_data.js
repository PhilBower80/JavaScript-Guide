const todos = [
	{ text: 'play mariokart', author: 'shaun' },
	{ text: 'buy some milk', author: 'mario' },
	{ text: 'buy some bread', author: 'luigi' }
];

// console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos)); // this turns an array into JSON

const stored = localStorage.getItem('todos');

console.log(stored);

console.log(JSON.parse(stored)); // this parses the JSON back into an array.
