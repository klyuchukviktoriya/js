//! При вводе текста в input:
// - показывать только те <li>, которые содержат введённый текст;
// - остальные скрывать.
//
// Пример:
//
// input: "re"
//
// видно:
// React
//
// скрыто:
// JavaScript
// Vue
// Angular
// Node.js
//! Теперь сделаем его немного "умнее".
// Поиск не должен начинаться, пока пользователь не ввел минимум 2 символа.

const input = document.querySelector('.search');
const listItems = document.querySelectorAll('li');

input.addEventListener('input', () => {
    const search = input.value.toLowerCase().trim();
    listItems.forEach((li) => {
        if (search.length >= 2) {
            li.hidden = !li.textContent.toLowerCase().includes(search);
        } else {
            li.hidden = false;
        }
    });
});
