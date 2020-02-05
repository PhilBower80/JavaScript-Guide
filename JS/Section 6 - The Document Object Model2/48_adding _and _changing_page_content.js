// Adding and changing Page Content

// Changing text
const para = document.querySelector('p');

console.log(para.innerText);
para.innerText = 'ninjas are awesome!'; // This will change the content
para.innerText += 'ninjas are awesome!'; // This will append the content

///////////////////////////////////////////////////////////////////////////

// with querySelector you can use forEach to cycle through the nodes...

const paras = document.querySelectorAll('p');

paras.forEach(para => {
	console.log(para.innerText);
	para.innerText += ' new text'; // this will append 'new text' to the end of all <p> tags.
});

//////////////////////////////////////////////////////////////////////////

//  Changing HTML

// loop through ALL p tags and add a H2 element.
const paras = document.querySelectorAll('p');

paras.forEach(para => {
	console.log(para.innerHTML);
	para.innerHTML += '<h2>this is a new H2 tag</h2>'; // this will append 'new HTML' to the end of all <p> tags.
});

// loop through .content classes and add some HTML
const content = document.querySelector('.content');
const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
	content.innerHTML += `<p>${person}</p>`; // += will append data
});
