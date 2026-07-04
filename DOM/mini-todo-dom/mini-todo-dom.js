//! Мини-проект: Todo List
// 1. При клике на кнопку:
//    - взять текст из input;
//    - если input пустой или только пробелы:
//      показать ошибку в .error:
//      "Введите задачу"
//      и НЕ добавлять задачу.
//
// 2. Если текст нормальный:
//    - создать <li>;
//    - записать туда текст задачи;
//    - добавить <li> в список;
//    - очистить input;
//    - очистить текст ошибки.
//
// 3. При клике на любую <li>:
//    - удалить эту задачу.
//
// 4. После добавления и удаления:
//    - обновлять счётчик:
//
//      "Задач: 0"
//      "Задач: 1"
//      "Задач: 2"

const input = document.querySelector('.todo-input');
const button = document.querySelector('.add-button');
const error = document.querySelector('.error');
const list = document.querySelector('.todo-list');
const counter = document.querySelector('.counter');

function updateCounter() {
    counter.textContent = `Задач: ${list.children.length}`;
}

button.addEventListener('click', () => {
    if (!input.value.trim()) {
        error.textContent = 'Введите задачу';
        input.value = '';
    } else {
        const li = document.createElement('li');
        li.textContent = input.value.trim();
        list.append(li);
        updateCounter();
        error.textContent = '';
        input.value = '';
    }
});

list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.remove();
        updateCounter();
    }
});
