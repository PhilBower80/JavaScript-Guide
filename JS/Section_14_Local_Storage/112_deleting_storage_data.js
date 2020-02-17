// deleting data from local storage

localStorage.removeItem('name'); // specify the name of the property you wish to delete
localStorage.clear(); // or use this method to clear all

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name, age);
