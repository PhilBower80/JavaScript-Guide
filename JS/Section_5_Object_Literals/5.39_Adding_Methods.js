let user = {
	name: 'crystal',
	age: 30,
	email: 'crystal@thenetninja.co.uk',
	location: 'Berlin',
	blogs: ['why mac n cheese rules', '10 things to make with marmite'],
	login: function() {
		console.log('the user logged in');
	},
	logout: function() {
		console.log('the user logged out');
	}
};

console.log(user);
console.log(user.login);
console.log(user.logout);
