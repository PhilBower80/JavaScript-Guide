//////////////////////////
// Function Declaration //
//////////////////////////

// functions are hoisted so they can be called at any stage in the code.
function greet() {
	console.log('hello world');
}

greet();

/////////////////////////
// Function Expression //
/////////////////////////

// Expressions are not hoisted so they must be called after they are defined.
const speak = function() {
	console.log('Good day!');
}; // Function expressions are closed with a ';'

speak();
