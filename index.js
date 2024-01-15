/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-foggy-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme)
    ? 'ri-moon-clear-line'
    : 'ri-sun-foggy-line';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[
    selectedIcon === 'ri-moon-clear-line' ? 'add' : 'remove'
  ](iconTheme);
}

themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

let todoCount = 0;

const gridContainer = document.querySelector('.grid');
const listInput = document.querySelector('input.new-list');
const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault;
  if (listInput.value === '' || listInput.value === null) {
    info('Please add a title', 2000);
    return;
  } else {
    createNewList(listInput.value);
  }
  listInput.value = '';
});

function createNewList(title) {
  const listContainer = document.createElement('div');
  listContainer.classList.add('todo-container');
  listContainer.innerHTML = ` <div class='flex title'>
        <textarea placeholder='${title}' name='task-title' id='task-title' rows='1' columns='1'></textarea>
        <div class='options'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'>
            <path d='M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'></path>
          </svg>
        </div>
      </div>
      <div class='new-task flex' id='new-item' >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'>
          <path d='M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z'></path>
        </svg>
        <p>Add a task</p>
      </div>  
      </div>`;
  const index = listContainer.getAttribute('id');
  gridContainer.appendChild(listContainer);
  const newItem = document.getElementById('new-item');
  newItem.addEventListener('click', listItem);
  console.log(index);
  cont();
}

function listItem() {
  const parent = document.getElementById('todo-' + todoCount);
  const todoListContainer = document.createElement('div');
  todoListContainer.classList.add('todoList-container');
  todoListContainer.innerHTML = ` <div class='list-item'>
        <div class='flex todo' id='todo-0'>
          <input type='radio' />
          <textarea name='list-item' id='list-item'></textarea>
        </div>
        <p>
          <span>10</span> weeks ago
        </p>
      </div>`;
  parent.appendChild(todoListContainer);
  todoCount++;
}

function info(Text, duration) {
  const main = document.querySelector('main');
  const info = document.createElement('div');
  info.classList.add('hot-menu', 'fade-in');
  const p = document.createElement('p');
  info.appendChild(p);
  p.innerText = Text;
  main.appendChild(info);
  setTimeout(() => {
    info.remove();
  }, duration);
}

function cont() {
  const containerId = document.querySelectorAll('.todo-container');
  containerId.forEach((element, index) => {
    element.setAttribute('id', 'todo-' + index);
  });
  // console.log(todoCount);
}
