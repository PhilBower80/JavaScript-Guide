// Common string methods
let email = 'philbower80@outlook.com';

let result = email.lastIndexOf('@');
console.log(result);

let result2 = email.slice(0, result); // I have used the variable result as the 2nd parameter, however this can also be a number.
console.log(result2);

let result3 = email.substr(4, 10); // Starts at position 4 and count 10 characters from this position.
console.log(result3);

let result4 = email.replace('ph', 'f'); // This replaces the first instance of 'ph' that it finds.
console.log(result4);
