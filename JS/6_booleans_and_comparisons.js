let email = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];

let result = email.includes('@');
let result2 = names.includes('bowser');
console.log(result);
console.log(result2);

// Comparions Operators
let age = 25;

console.log(age == 25); // double = (abstract equality) is asking are these two things the same
console.log(age == 30);
console.log(age != 30); //! = not equal to.
console.log(age > 20); // is age greater than 20.
console.log(age < 20); // is age less than 20.
console.log(age <= 25); // less than or equal to.

let name = 'shaun';
console.log(name == 'shaun'); // this will return true.
console.log(name == 'Shaun'); // this will return false.
console.log(name > 'crystal'); // this will true as 's' is after 'c' in alphabet.
console.log(name > 'Shaun'); // this will return true as uppercase are after lowercase
