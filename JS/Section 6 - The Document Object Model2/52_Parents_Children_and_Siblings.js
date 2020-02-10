const content = document.querySelector('.content');

// console.log(content.children);
// console.log(Array.from(content.children)); // non-destructive.

// So use Array.from when you need to create an array from a returned HTML collection.

Array.from(content.children).forEach(child => {
	child.classList.add('article-element');
	console.log(
		'the class-name "article-list" has been added to all children of the "content" class.'
	);
});

const heading = document.querySelector('#heading');

console.log(heading.parentElement);
console.log(heading.parentElement.parentElement); // these can be chained together
console.log(heading.nextElementSibling);
console.log(heading.previousElementSibling);

// Chaining - it is possible to chain these together to get the desired result.
console.log(heading.nextElementSibling.parentElement.children);
