// See associated HTML doc for the output.

const ul = document.querySelector('.people');
const people2 = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
let html = ``;

people2.forEach(person => {
	// create html template
	html += `<li style="color: purple">${person}</li>`;
});

ul.innerHTML = html;
