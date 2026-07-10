const input = document.querySelector('.input');
const addBtn = document.querySelector('.add-button');
const list = document.querySelector('.list');
const deleteCompleted = document.querySelector('.delete-completed');
const totalSpan = document.querySelector('.total-count');
const activeSpan = document.querySelector('.active-count');
const completedSpan = document.querySelector('.completed-count');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

renderList();

addBtn.addEventListener('click', () => {

  if (input.value.trim()) {
    const task = {
      id: Date.now(),
      text: input.value.trim(),
      completed: false
    }
    todos.push(task);
    input.value = '';
  }

  saveTodos();
  renderList();

})


function renderList() {
  list.innerHTML = todos
    .map((obj) => `<li data-id='${obj.id}'>
    <p class="${obj.completed ? 'completed' : ''}">${obj.text}</p>
    <button>Delete</button>
    </li>`)
    .join('');
  totalSpan.textContent = todos.length;
  activeSpan.textContent = todos.filter(obj => !obj.completed).length;
  completedSpan.textContent = todos.filter(obj => obj.completed).length;
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

list.addEventListener('click', (e) => {

  if (e.target.tagName === 'BUTTON') {
    const li = e.target.closest('li');
    const taskId = li.dataset.id;
    const index = todos.findIndex(obj => obj.id === Number(taskId));


    if (index !== -1) {
      todos.splice(index, 1);
      saveTodos();
      renderList();
    }
  }

  if (e.target.tagName === 'P') {
    const li = e.target.closest('li');
    const taskId = li.dataset.id;
    const task = todos.find(obj => obj.id === Number(taskId));

    if (task) {
      task.completed = !task.completed;
      saveTodos();
      renderList();
    }
  }
})

deleteCompleted.addEventListener('click', () => {
  todos = todos.filter(obj => obj.completed === false);
  saveTodos();
  renderList();
})