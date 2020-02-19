window.onload = function() {
	document
		.querySelector('#burger-container')
		.addEventListener('click', function() {
			this.classList.toggle('open');
		});
};
