
const input = document.querySelector('.input');
const addBtn = document.querySelector('.add-button');
const list = document.querySelector('.list');
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
    <p>${obj.text}</p>
    <button>Delete</button>
    </li>`)
    .join('');
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
})