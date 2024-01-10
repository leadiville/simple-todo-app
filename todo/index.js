
const todoList = document.getElementById('todoList');
const testId = document.getElementById('testId');
const submitBtn = document.getElementById('submit');
const todo = [];
const todoHistory = [...todo];
const {checkIfEmpty, ifEmpty} = require('./components/emptyError');
function clearInput() {
    todo.pop();
    document.getElementById('inputId').value = "";
}
function createTodo() {
    
    if (todo && todo.length >= 1) {
        let li = document.createElement('li');
        li.className = 'todo-title';
        li.style.textTransform = 'capitalize';
        
        
        let span1 = document.createElement('span');
        let editIcon = document.createElement('i');
        editIcon.className = 'fa fa-pencil-square warning';
        span1.append(editIcon);
        span1.className = 'icon';
        
        let span2 = document.createElement('span');
        let deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa fa-trash danger';
        span2.append(deleteIcon);
        span2.className = 'icon';
        
        let span3 = document.createElement('span');
        let label = document.createElement('label');
        label.className = 'completed';
        label.innerText = 'completed';
        // label.textContent = 'completed';
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        label.append(checkbox,);
        span3.append(label);
        span3.className = 'completed';
        
        let lineBreak = document.createElement('br');
        
        let p = document.createElement('p');
        p.className = 'todo-icons';
        p.append(span1, span2, span3);
        
        li.append(todo, lineBreak, p);
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




















