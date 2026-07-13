const input = document.querySelector('.input');
const list = document.querySelector('.list');
const totalSpan = document.querySelector('.total-count');
const activeSpan = document.querySelector('.active-count');
const completedSpan = document.querySelector('.completed-count');
const filters = document.querySelector('.filters');
const actions = document.querySelector('.actions');
const form = document.querySelector('.search-form');
const counter = document.querySelector('.counter');
const message = form.querySelector('.message');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

renderList();

if (todos.length > 2) {
  form.classList.remove('hidden');
}

actions.addEventListener('click', (e) => {
  if (e.target.dataset.btn === 'add') {
    const text = input.value.trim();

    if (!text) return;

    todos.push({
      id: Date.now(),
      text,
      completed: false,
      createdAt: Date.now(),
    });

    if (todos.length > 2) {
      form.classList.remove('hidden');
    }

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
    const task = todos.find((obj) => obj.id === Number(taskId));
    const result = confirm(`Delete task ${task.text}?`);

    if (result) {
      todos = todos.filter((obj) => obj.id !== Number(taskId));
      saveTodos();
      renderList();
      if (todos.length <= 2) {
        form.classList.add('hidden');
      }
    }
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
    const editInput = li.querySelector('input');
    const cancel = li.querySelector('[data-btn="cancel"]');
    const saveChanges = li.querySelector('[data-btn="save-changes"]');

    li.querySelector('p').classList.add('hidden');
    editInput.classList.remove('hidden');
    saveChanges.classList.remove('hidden');
    cancel.classList.remove('hidden');
  }

  if (e.target.dataset.btn === 'save-changes') {
    const li = e.target.closest('li');
    const taskId = li.dataset.id;
    const editInput = li.querySelector('input');
    const task = todos.find((obj) => obj.id === Number(taskId));
    const text = editInput.value.trim();

    if (task && text) {
      task.text = text;
      task.editedAt = Date.now();
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
    const cancel = li.querySelector('[data-btn="cancel"]');

    li.querySelector('p').classList.remove('hidden');
    editInput.classList.add('hidden');
    saveChanges.classList.add('hidden');
    cancel.classList.add('hidden');
    editInput.value = task.text;
  }
});

function renderHTML(obj) {
  const taskNumber = todos.indexOf(obj) + 1;
  const createdDate = new Date(obj.createdAt).toLocaleDateString();
  const createdTime = new Date(obj.createdAt).toLocaleTimeString();
  let editedDate;
  let editedTime;

  if (obj.editedAt) {
    editedDate = new Date(obj.editedAt).toLocaleDateString();
    editedTime = new Date(obj.editedAt).toLocaleTimeString();
  }

  return `<li data-id='${obj.id}'>
    <h2>Task: ${taskNumber}</h2>
    <input class='hidden' value='${obj.text}'>
    <button class='hidden' data-btn="save-changes">Save changes</button>
    <button class='hidden' data-btn="cancel">Cancel</button>
    <p class='${obj.completed ? 'completed' : ''}'>${obj.text}</p>
    <div>   
      <p>Created at:</p>
      <p>${createdDate}</p>
       <p>${createdTime}</p>
     </div>
    <div class='${obj.editedAt ? '' : 'hidden'}'>   
      <p>Edited at:</p>
      <p>${editedDate}</p>
      <p>${editedTime}</p>
     </div>
    <div class='task-actions'>
    <button data-btn="toggle">${obj.completed ? 'Mark as active' : 'Mark as complete'}
    </button>
    <button data-btn="edit">Edit</button>
    <button data-btn="delete-task">Delete</button>
    </div>
    </li>`;
}

function renderStats() {
  totalSpan.textContent = todos.length;
  activeSpan.textContent = todos.filter((obj) => !obj.completed).length;
  completedSpan.textContent = todos.filter((obj) => obj.completed).length;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchInput = form.querySelector('input');
  const value = searchInput.value.toLowerCase().trim();

  if (value) {
    const found = todos.filter((obj) =>
      obj.text.toLowerCase().includes(value)
    );

    if (found.length === 0) {
      filters.classList.add('hidden');
      list.classList.add('hidden');
      counter.classList.add('hidden');
      message.classList.remove('hidden');
    } else {
      list.classList.remove('hidden');
      message.classList.add('hidden');
      list.innerHTML = found.map(renderHTML).join('');
    }
  } else {
    searchInput.value = '';
    renderList();
  }
});

form.addEventListener('reset', () => {
  filters.classList.remove('hidden');
  list.classList.remove('hidden');
  counter.classList.remove('hidden');
  message.classList.add('hidden');
  renderList();
});
