//! ЗАДАНИЕ: todo-localStorage-step-1
//
// HTML:
// - input
// - button "Добавить"
// - ul
//
// Нужно:
//
// 1. Создать массив todos.
//    При загрузке страницы:
//    - взять todos из localStorage;
//    - если там ничего нет — использовать пустой массив.
//
// 2. При клике на кнопку:
//    - взять текст из input;
//    - если пусто — ничего не делать;
//    - создать объект задачи:
//
//      {
//        id: Date.now(),
//        text: "...",
//        completed: false
//      }
//
//    - добавить объект в массив todos;
//    - сохранить массив в localStorage;
//    - очистить input;
//    - вывести задачи в ul.
//
// 3. Каждая задача должна отображаться как li с текстом задачи.
//
// Пока БЕЗ удаления и БЕЗ completed.


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

  localStorage.setItem('todos', JSON.stringify(todos));
  renderList();

})


function renderList() {
  list.innerHTML = todos
    .map((obj) => `<li data-id=${obj.id}>${obj.text}</li>`)
    .join('');
}