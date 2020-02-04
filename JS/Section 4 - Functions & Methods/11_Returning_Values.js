const calcArea = function(radius) {
	let area = 3.14 * radius ** 2; // calculates the area of a circle
	// This allows you to return the area so that it can be logged outside of the scope of this function
	return area;
};

const area = calcArea(5);
console.log(area);

// Shorthand - you don't need to store the result as a variable. The value can be returned immediately...

const calcArea2 = function(radius) {
	return 3.14 * radius ** 2;
};

const area2 = calcArea2(5);
console.log(area2);
