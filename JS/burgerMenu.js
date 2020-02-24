const burgerMenu = document.querySelector('#burger-container');

burgerMenu.addEventListener('click', function() {
	const sidebar = document.querySelector('.nav-sidebar');
	if (window.getComputedStyle(sidebar).visibility === 'hidden') {
		sidebar.style.visibility = 'visible';
	} else {
		sidebar.style.visibility = 'hidden';
	}
});
