const form = document.querySelector('form');
const input = document.getElementById('input');
const todoContainer = document.querySelector('.todo-container');

const createTodo = (e) => {
  e.preventDefault();
  const divContent = input.value.trim();
  if (divContent !== '') {
    const div = document.createElement('div');
    div.classList.add('todo');
    div.innerText = divContent;
    input.value = '';

    div.addEventListener('click', toggleCompletion);
    div.addEventListener('contextmenu', removeTodo);

    addToDom(div);
  }
};

function toggleCompletion(e) {
  e.target.classList.toggle('completed');
}

function removeTodo(e) {
  e.preventDefault();
  e.target.remove();
}

function addToDom(e) {
  todoContainer.appendChild(e);
}

form.addEventListener('submit', createTodo);
