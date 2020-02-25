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

burgerMenu.addEventListener('click', e => {
	const sidebar = document.querySelector('.nav-sidebar');
	burgerMenu.classList.toggle('open');
	// const mainContent = document.querySelector('body');
	sidebar.classList.toggle('active');
	// mainContent.classList.toggle('active');
});
