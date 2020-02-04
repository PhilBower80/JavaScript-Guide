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
	},
	logBlogs: function() {
		console.log('this user has written the following blogs');
		this.blogs.forEach(blog => {
			console.log(blog);
		});
	}
};

user.logBlogs();

// When using 'this' keywork use it conjuction with arrow function.

// Shorthand - you do not need the words ':' 'function' just use brackets and this will denote it as a function.

let user2 = {
	name: 'crystal',
	age: 30,
	email: 'crystal@thenetninja.co.uk',
	location: 'Berlin',
	blogs: ['why mac n cheese rules', '10 things to make with marmite'],
	login() {
		console.log('the user logged in');
	},
	logout() {
		console.log('the user logged out');
	},
	logBlogs() {
		console.log('this user has written the following blogs');
		this.blogs.forEach(blog => {
			// 'this' refers to the object it's within in this context. Use in conjuction with arrow function.
			console.log(blog);
		});
	}
};

user2.logBlogs();
