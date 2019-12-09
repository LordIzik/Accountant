//contains all todos
let todoList = [];
let doneTodoList = [];

//get the value of the newly typed todo and validate
function getNewTodo() {
	let result = 'Kindly input a valid text';
	let todo = document.getElementById('addTodo').value;
	if (todo == null || todo == ' ' || todo == '') {
		document.getElementById('ifInvalidInput').innerHTML = result;
	} else {
		addTodo(todo.trim());
		document.getElementById('addTodo').value = '';
	}
}

//adds the newly typed todo to the todoList
function addTodo(todo) {
	todoList.push(todo);
	displayTodos();
}

// display all todoList
function displayTodos() {
	let todos = '';
	for (let index = 0; index < todoList.length; index++) {
		let counter = index + 1;
		todos += `<p>
                ${counter}.  ${todoList[index]} 
                <button type="button" onclick="editTodo(${index})">Edit</button> 
                <button type="button" onclick="deleteTodo(${index})">Delete</button>
                <button type="button" onclick="doneTodo(${index})">Done</button></p>
            `;
	}
	document.getElementById('displayTodoList').innerHTML = todos;
}

function editTodo(index) {
	let result;
	let editedTodo = prompt('Please kindly edit your todo:', todoList[index]);
	if (editedTodo != null || editedTodo != '' || editedTodo != ' ') {
		todoList[index] = editedTodo;
		result = 'Todo Edited Successfully';
		displayTodos();
	}
	document.getElementById('editSuccess').innerHTML = result;
}

function deleteTodo(index) {
    let confirmDelete = confirm(`Are you sure you want to delete`);
    if (confirmDelete) {
        todoList.splice(index, 1);
        displayTodos();
    }
    
}


function doneTodo(index) {
	doneTodoList.push(todoList[index]);
	todoList.splice(index, 1);
	displayTodos();
	displayDoneTodos();
}

// display all DONE todo
function displayDoneTodos() {
	let todos = '';
	for (let index = 0; index < doneTodoList.length; index++) {
		let counter = index + 1;
		todos += `<p>
                ${counter}.  ${doneTodoList[index]} 
            `;
	}
	document.getElementById('displayDoneTodoList').innerHTML = todos;
}
