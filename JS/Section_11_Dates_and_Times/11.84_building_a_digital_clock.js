const clock = document.querySelector('.clock');

const dblDigit = standIn => {
	if (standIn < 10) {
		standIn = '0' + standIn;
	}
	return standIn;
};

const currentTime = () => {
	const now = new Date();

	const h = now.getHours();
	const m = now.getMinutes();
	const s = now.getSeconds();
	// console.log(h, m, s);

	const html = `
  <span>${dblDigit(h)}</span> : 
  <span>${dblDigit(m)}</span> : 
  <span>${dblDigit(s)}</span>
  `;

	clock.innerHTML = html;
};

setInterval(currentTime, 1000);
