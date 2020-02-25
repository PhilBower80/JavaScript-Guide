const cookie = document.querySelector('.cookie-wrapper');
const closeCookie = document.querySelector('.cookie-close');
const cookieCheck = localStorage.getItem('cookie');

closeCookie.addEventListener('click', () => {
	localStorage.setItem('cookie', 'true');
	cookie.style.display = 'none';
});

if (cookieCheck === 'true') {
	console.log('cookie = true');
	cookie.style.display = 'none';
} else {
	console.log('no cookie found');
	cookie.style.display = 'block'; //used !important to override bootstrap
}
