window.onload = function() {
	document
		.querySelector('#burger-container')
		.addEventListener('click', function() {
			this.classList.toggle('open');

			const sidebar = document.querySelector('.nav-sidebar');
			if (window.getComputedStyle(sidebar).visibility === 'hidden') {
				sidebar.style.visibility = 'visible';
			} else {
				sidebar.style.visibility = 'hidden';
			}
		});
};
