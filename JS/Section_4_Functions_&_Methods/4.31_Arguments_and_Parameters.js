////////////////////////////
// ARGUMENTS & PARAMETERS //
////////////////////////////

const talk = function(name) {
	// name is a parameter
	console.log(`Good day ${name}`);
};

talk('Phil'); // Phil is an argument which is passed as a parameter in the function

// You can set default parameters also, see below...
const talk2 = function(name = 'luigi', time = 'night') {
	// name is a parameter
	console.log(`Good ${time} ${name}`);
};

talk2('Phil'); // arguments must be passed in the same order as parameters are set. In this cas eonly one argument is being passed so it overwrite the first parameter.
