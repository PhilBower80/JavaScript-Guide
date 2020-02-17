// store data in local storage
localStorage.setItem('name', 'mario');
localStorage.setItem('age', 50);

console.log(localStorage);

// get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);

// updating data
localStorage.setItem('name', 'luigi'); // this will overwrite what is set against name with luigi
name = localStorage.getItem('name'); // then also need to update the value saved to the name variable.

localStorage.age = 40; // can also be written as dot notation.
age = localStorage.age;

console.log(name, age);
