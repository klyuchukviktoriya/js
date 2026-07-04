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

const input = document.querySelector('.search');
const listItems = document.querySelectorAll('li');

input.addEventListener('input', () => {
    const search = input.value.toLowerCase();
    listItems.forEach((li) => {
        if (li.textContent.toLowerCase().includes(search)) {
            li.style.display = '';
        } else {
            li.style.display = 'none';
        }
    });
});
