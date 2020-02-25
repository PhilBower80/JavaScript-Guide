// SIMPLE CHANGE VISIBILITY

// const burgerMenu = document.querySelector('#burger-container');

// burgerMenu.addEventListener('click', e => {
// 	burgerMenu.classList.toggle('open');
// 	const sidebar = document.querySelector('.nav-sidebar');
// 	if (window.getComputedStyle(sidebar).visibility === 'hidden') {
// 		sidebar.style.visibility = 'visible';
// 	} else {
// 		sidebar.style.visibility = 'hidden';
// 	}
// });

const burgerMenu = document.querySelector('#burger-container');
const sidebar = document.querySelector('.nav-sidebar');

burgerMenu.addEventListener('click', e => {
	sidebar.classList.toggle('active');
});
