//////////////////////
// Regular Function //
//////////////////////

const calcArea = function(radius) {
	return 3.14 * radius ** 2; // calculates the area of a circle
	// This allows you to return the area so that it can be logged outside of the scope of this function
};

const area = calcArea(5);
console.log(area);

///////////////////////
// vs Arrow Function //
///////////////////////

const calcArea2 = radius => {
	//use () if more than one parameter e.g (radius, name)
	return 3.14 * radius ** 2;
};

const area2 = calcArea2(5);
console.log('area is:', area2);

// If there is only one return we can remove 'return' keyword and curly braces.
const calcArea3 = radius => 3.14 * radius ** 2;

const area3 = calcArea3(7);
console.log('area is:', area3);
