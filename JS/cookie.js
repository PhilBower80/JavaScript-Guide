const cookie = document.querySelector('.cookie-wrapper');
const closeCookie = document.querySelector('.cookie-close');
let cookieCheck = localStorage.getItem('cookie');

closeCookie.addEventListener('click', () => {
	localStorage.setItem('cookie', 'true');
	cookie.style.display = 'none';
	// console.log(typeof cookieCheck);
});

if (cookieCheck === 'true') {
	console.log('cookie = true');
	cookie.classList.toggle('open');
	cookie.style.display = 'none';
} else {
	console.log('no cookie found');
	cookie.style.display = 'block';
}
