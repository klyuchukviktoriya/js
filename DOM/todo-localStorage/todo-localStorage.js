const input = document.querySelector('.input');
const list = document.querySelector('.list');
const totalSpan = document.querySelector('.total-count');
const activeSpan = document.querySelector('.active-count');
const completedSpan = document.querySelector('.completed-count');
const filters = document.querySelector('.filters');
const actions = document.querySelector('.actions');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

renderList();

actions.addEventListener('click', (e) => {
  if (e.target.dataset.btn === 'add') {
    const text = input.value.trim();

    if (!text) return;

    todos.push({
      id: Date.now(),
      text,
      completed: false,
    });

    input.value = '';
    saveTodos();
    renderList();
  }

  if (e.target.dataset.btn === 'delete') {
    todos = todos.filter((obj) => !obj.completed);
    saveTodos();
    renderList();
  }
});

filters.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter;

  if (!filter) {
    return;
  }

  filters
    .querySelectorAll('[data-filter]')
    .forEach((button) => button.classList.remove('active'));
  e.target.classList.add('active');

  currentFilter = filter;
  renderList();
});

function renderList() {
  let visibleTodos = todos.map(renderHTML).join('');

  if (currentFilter === 'completed') {
    visibleTodos = todos
      .filter((obj) => obj.completed)
      .map(renderHTML)
      .join('');
  } else if (currentFilter === 'active') {
    visibleTodos = todos
      .filter((obj) => !obj.completed)
      .map(renderHTML)
      .join('');
  }

  list.innerHTML = visibleTodos;
  renderStats();
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

list.addEventListener('click', (e) => {
  if (e.target.dataset.btn === 'deleteTask') {
    const li = e.target.closest('li');
    const taskId = li.dataset.id;

    todos = todos.filter(obj => obj.id !== Number(taskId));

    saveTodos();
    renderList();
  }

  if (e.target.tagName === 'P') {
    const li = e.target.closest('li');
    const taskId = li.dataset.id;
    const task = todos.find((obj) => obj.id === Number(taskId));

    if (task) {
      task.completed = !task.completed;
      saveTodos();
      renderList();
    }
  }
});

function renderHTML(obj) {
  return `<li data-id='${obj.id}'>
    <p class="${obj.completed ? 'completed' : ''}">${obj.text}</p>
    <button data-btn='deleteTask'>Delete</button>
    </li>`;
}

function renderStats() {
  totalSpan.textContent = todos.length;
  activeSpan.textContent = todos.filter((obj) => !obj.completed).length;
  completedSpan.textContent = todos.filter((obj) => obj.completed).length;
}
