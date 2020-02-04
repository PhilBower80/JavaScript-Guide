// const blogs = [
// 	{ title: 'why mac n cheese rules', likes: 30 },
// 	{ title: '10 things to make with marmite', likes: 50 }
// ];

// console.log(blogs);

let user = {
	name: 'crystal',
	age: 30,
	email: 'crystal@thenetninja.co.uk',
	location: 'Berlin',
	blogs: [
		{ title: 'why mac n cheese rules', likes: 30 },
		{ title: '10 things to make with marmite', likes: 50 }
	],
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
			console.log(blog.title, blog.likes);
		});
	}
};

user.logBlogs();
