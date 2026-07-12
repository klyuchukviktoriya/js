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
  if (e.target.dataset.btn === 'delete-task') {
    const li = e.target.closest('li');
    const taskId = li.dataset.id;

    todos = todos.filter((obj) => obj.id !== Number(taskId));

    saveTodos();
    renderList();
  }

  if (e.target.dataset.btn === 'toggle') {
    const li = e.target.closest('li');
    const taskId = li.dataset.id;
    const task = todos.find((obj) => obj.id === Number(taskId));

    if (task) {
      task.completed = !task.completed;
      saveTodos();
      renderList();
    }
  }


  if (e.target.dataset.btn === 'edit') {
    const li = e.target.closest('li');
    const taskId = li.dataset.id;
    const editInput = li.querySelector('input');
    const saveChanges = li.querySelector('[data-btn="save-changes"]');

    li.querySelector('p').classList.toggle('hidden');
    editInput.classList.toggle('hidden');
    saveChanges.classList.toggle('hidden');
  }

  if (e.target.dataset.btn === 'save-changes') {
    const li = e.target.closest('li');
    const taskId = li.dataset.id;
    const editInput = li.querySelector('input');
    const task = todos.find((obj) => obj.id === Number(taskId));
    const text = editInput.value.trim();

    if (task && text) {
      task.text = text;
    }

    saveTodos();
    renderList();
  }

  if (e.target.dataset.btn === 'cancel') {
    const li = e.target.closest('li');
    const editInput = li.querySelector('input');
    const saveChanges = li.querySelector('[data-btn="save-changes"]');
    const taskId = li.dataset.id;
    const task = todos.find((obj) => obj.id === Number(taskId));

    li.querySelector('p').classList.toggle('hidden');
    editInput.classList.toggle('hidden');
    saveChanges.classList.toggle('hidden');
    editInput.value = task.text;
  }
});

function renderHTML(obj) {
  const taskNumber = todos.indexOf(obj) + 1;
  return `<li data-id='${obj.id}'>
    <h2>Task: ${taskNumber}</h2>
    <input class='hidden' value='${obj.text}'>
    <button class='hidden' data-btn="save-changes">Save changes</button>
    <p class='${obj.completed ? 'completed' : ''}'>${obj.text}</p>
    <div class='task-actions'>
    <button data-btn="toggle">${obj.completed ? 'Mark as active' : 'Mark as complete'}
    </button>
    <button data-btn="edit">Edit</button>
    <button data-btn="cancel">Cancel</button>
    <button data-btn="delete-task">Delete</button>
    </div>
    </li>`;
}

function renderStats() {
  totalSpan.textContent = todos.length;
  activeSpan.textContent = todos.filter((obj) => !obj.completed).length;
  completedSpan.textContent = todos.filter((obj) => obj.completed).length;
}
