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
const searchInput = form.querySelector('input');
const select = document.querySelector('select');
const selectDiv = document.querySelector('.sorting');

let currentSort = 'newest';
let searchQuery = '';
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
  searchQuery = searchInput.value.toLowerCase().trim();

  let visibleTodos = todos;
  if (searchQuery) {
    const found = todos.filter((obj) =>
      obj.text.toLowerCase().includes(searchQuery)
    );

    if (found.length === 0) {
      showMessage();
    } else {
      hideMessage();
      visibleTodos = found;
    }
  } else {
    hideMessage();
    searchInput.value = '';
  }

  if (currentFilter === 'completed') {
    visibleTodos = visibleTodos.filter((obj) => obj.completed);
  } else if (currentFilter === 'active') {
    visibleTodos = visibleTodos.filter((obj) => !obj.completed);
  }

  if (currentSort === 'oldest') {
    visibleTodos = visibleTodos.toSorted(
      (a, b) => a.createdAt - b.createdAt
    );
  } else if (currentSort === 'newest') {
    visibleTodos = visibleTodos.toSorted(
      (a, b) => b.createdAt - a.createdAt
    );
  } else if (currentSort === 'za') {
    visibleTodos = visibleTodos.toSorted((a, b) =>
      b.text.localeCompare(a.text)
    );
  } else if (currentSort === 'az') {
    visibleTodos = visibleTodos.toSorted((a, b) =>
      a.text.localeCompare(b.text)
    );
  }

  list.innerHTML = visibleTodos.map(renderHTML).join('');
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
    <button class='hidden' data-btn='save-changes'>Save changes</button>
    <button class='hidden' data-btn='cancel'>Cancel</button>
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
    <button data-btn='toggle'>${obj.completed ? 'Mark as active' : 'Mark as complete'}
    </button>
    <button data-btn='edit'>Edit</button>
    <button data-btn='delete-task'>Delete</button>
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
  renderList();
});

form.addEventListener('reset', () => {
  searchQuery = '';
  searchInput.value = '';

  hideMessage();

  renderList();
});

function hideMessage() {
  filters.classList.remove('hidden');
  list.classList.remove('hidden');
  counter.classList.remove('hidden');
  selectDiv.classList.remove('hidden');
  message.classList.add('hidden');
}

function showMessage() {
  filters.classList.add('hidden');
  list.classList.add('hidden');
  counter.classList.add('hidden');
  selectDiv.classList.add('hidden');
  message.classList.remove('hidden');
}

select.addEventListener('change', (e) => {
  currentSort = e.target.value;
  renderList();
});
