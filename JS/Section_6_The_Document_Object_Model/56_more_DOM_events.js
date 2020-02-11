// Example of copy event

const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
	alert('OI!, this content is copyright!!!');
});

//////////////////////////////////////////

// Example of how to log mouse position within a box.
const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
	// console.log(e);
	// console.log(e.offsetX, e.offsetY);
	box.textContent = `x pos = ${e.offsetX} y pos = ${e.offsetY}`;
});

// reset text once mouse leaves the box.
box.addEventListener('mouseout', e => {
	box.textContent = 'move the mouse around this box';
});

/////////////////////////////////////////////////////
// Example of scroll (mousewheel) event.
document.addEventListener('wheel', e => {
	console.log(e.pageX, e.pageY);
});
