// example of using callbacks.

let add = (a, b) => {
	return a + b;
};

let substract = (a, b) => {
	return a - b;
};

let multiply = (a, b) => {
	return a * b;
};

let divide = (a, b) => {
	return a / b;
};

let calc = (num1, num2, callback) => {
	return callback(num1, num2);
};

console.log(calc(2, 3, add));
