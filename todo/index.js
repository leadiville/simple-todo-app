
const todoList = document.getElementById('todoList');
const testId = document.getElementById('testId');
const submitBtn = document.getElementById('submit');
const todo = [];
const todoHistory = [...todo];
function clearInput() {
    todo.pop();
    document.getElementById('inputId').value = "";
}
function createTodo() {

    if (todo && todo.length >= 1) {
        let li = document.createElement('li');
        li.append(todo);
        todoList.append(li);
        clearInput()
    } else
        alert('Please input a task you want to focus on before submitting!!!');
    // console.log('working still');
}



document.addEventListener('submit', (e) => {
    e.preventDefault();
    createTodo();
});

document.addEventListener('change', (e) => {
    todo.push(e.target.value);
});






















