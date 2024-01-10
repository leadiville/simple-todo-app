
const todoList = document.getElementById('todoList');
const ifEmpty = false;

function checkIfEmpty() {
    if (todoList.length = 0) {
        ifEmpty = true;
    } else {
        ifEmpty = false;
    }
};

module.exports = {checkIfEmpty, ifEmpty};
