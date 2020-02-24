const header = document.querySelector('header');
const sticky = header.offsetTop;

let lastScrollTop = 0;
window.addEventListener(
	'scroll',
	e => {
		let currentScrollPos =
			window.pageYOffset || document.documentElement.scrollTop;
		if (currentScrollPos > lastScrollTop) {
			header.classList.remove('sticky');
		} else {
			header.classList.add('sticky');
		}
		lastScrollTop = currentScrollPos <= 0 ? 0 : currentScrollPos; // For Mobile or negative scrolling
	},
	false
);
