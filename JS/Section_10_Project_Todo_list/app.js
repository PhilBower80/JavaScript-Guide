const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// ADD A NEW TODO
// Generate HTML
const generateTemplate = todo => {
	const html = `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
`;
	list.innerHTML += html;
};

// get text input
addForm.addEventListener('submit', e => {
	e.preventDefault();
	const todo = addForm.add.value.trim();

	if (todo.length) {
		generateTemplate(todo);
		addForm.reset();
	}
});

// DELETE
list.addEventListener('click', e => {
	if (e.target.classList.contains('delete')) {
		e.target.parentElement.remove();
	}
});

// SEARCH FUNCTION
// filter
const filterTodos = term => {
	Array.from(list.children)
		.filter(todo => !todo.textContent.toLowerCase().includes(term)) // ! means not, reverses the boolean to get correct result.
		.forEach(todo => todo.classList.add('filtered'));

	Array.from(list.children)
		.filter(todo => todo.textContent.toLowerCase().includes(term))
		.forEach(todo => todo.classList.remove('filtered'));
};

// keyup event (search)
search.addEventListener('keyup', () => {
	const term = search.value.trim().toLowerCase();
	filterTodos(term);
});
