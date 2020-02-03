let score = '100';
console.log(score + 1); // this will concat the string to the number giving a result of 1001.

score = Number(score); // this will convert the string into a number
console.log(score + 1); // this will then give the correct result of 101

//

let score2 = '100';
console.log(typeof score);

let result = Number('hello'); // this will return NaN.
console.log(result);

let result2 = String(50); // this will return the string '50'.
console.log(result2);
console.log(result2, typeof result2); // this will show the type.

let result3 = Boolean(100);
console.log(result3, typeof result3);
