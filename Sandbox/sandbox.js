// // FACTORY FUNCTION
// let logCall = function() {
// 	console.log('logCall was called back');
// };

// setTimeout(logCall, 3000);

// // ARROW FUNCTION
// let logCall = () => console.log('logCall was called back');

// setTimeout(logCall, 3000);

// // Anon Callback
// setTimeout(e => {
// 	console.log('The anon function was called back');
// }, 3000);

// event listener / callback
const button = document.querySelector('.pb-button');

button.addEventListener('click', e => {
	alert('the button was clicked');
});

//
// const NameList = {
// 	names: [],
// 	onNewName: null,

// 	init: function(newNameCallback) {
// 		this.onNewName = newNameCallback;
// 	},

// 	addName: function(name) {
// 		this.names.push(name);
// 		this.onNewName(name, this.names);
// 	}
// };

// NameList.init(function(newName, allNames) {
// 	console.log(newName);
// 	console.log('The current list is:' + allNames);
// });

// NameList.addName('Phil');
// NameList.addName('Mavis');
// NameList.addName('Derek');
// NameList.addName('Clyde');
// console.log(NameList.names);

const NameList = {
	names: [],
	onNewName: null,

	init: function(newNameCallback) {
		this.onNewName = newNameCallback;
	},

	addName: function(name) {
		this.names.push(name);
		this.onNewName(name, this.names);
	}
};

NameList.init(function(newName, allNames) {
	console.log(newName);
	console.log('The current list is: ' + allNames);
});

NameList.addName('Phil');
NameList.addName('Mavis');
NameList.addName('Derek');
NameList.addName('Clyde');
// console.log(NameList.names);

// SIDEBAR

// const burgerMenu = document.querySelector('#burger-container');
// const sidebar = document.querySelector('.sidebar');

// if (sidebar.classList.contains === 'open') {
// 	sidebar.classList.visibility = 'visible';
// } else {
// 	sidebar.classList.visibility = 'hidden';
// }
