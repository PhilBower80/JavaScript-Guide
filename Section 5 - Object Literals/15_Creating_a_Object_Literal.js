let user = {
	name: 'crystal',
	age: 30,
	email: 'crystal@thenetninja.co.uk',
	location: 'Berlin',
	blogs: ['why mac n cheese rules', '10 things to make with marmite']
};

console.log(user); // This will output the entire object

//DOT NOTATION
console.log(user.name); // To output one of the key pairs
user.age = 35; // To set a new value against a key pair.
console.log(user.age);

// BRACKET NOTATION
console.log(user['name']); // To output one of the key pairs
user['age'] = 40; // To set a new value against a key pair.
console.log(user['age']);

console.log(typeof user);
