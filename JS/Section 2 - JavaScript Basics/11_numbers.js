let radius = 10;
const pi = 3.14;

console.log(radius, pi);

/*

Math operators
+,
-,
*,
/,
**, (to the power of)
%, (remainder)

*/

console.log(10 / 2);
let result = radius % 3;
console.log(result);

let result2 = pi * radius ** 2; // How to work out area of a circle (pi x radius squared).
console.log(result2);

/*
 Order of operation B I D M A S

Brackets
Indices (such as **)
Division
Muliplication
Addition
Subtraction

*/

let result3 = 5 * (10 - 3) ** 2;
console.log(result3);

let likes = 10;
likes = likes + 1;
console.log(likes);
likes++; // Shorthand operation of line above.
console.log(likes);
likes--;
console.log(likes);
likes = likes + 10;
console.log(likes);
likes += 10; // Shorthand of above.
console.log(likes);

//can use shorthand with any of the math operators.

// NaN = not a number error message.

// Number concatenation

let result4 = 'the blog has ' + likes + ' likes';
console.log(result4);
