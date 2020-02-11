// Math Object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;
console.log(Math.round(area)); // rounds up or down
console.log(Math.floor(area)); // round down
console.log(Math.ceil(area)); // round up
console.log(Math.trunc(area)); // remove decimals

//Random Numbers

const random = Math.random();
console.log(random); // Generates a number between 0 - 1
console.log(Math.round(random * 6)); //In this case it generates a number between 1 - 6, change 6 to whatever integer you want to generate a number between.
