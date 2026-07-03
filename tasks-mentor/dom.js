// //! 1. Найди <h1>.
// //
// // 2. Измени текст
// // с "Hello"
// // на
// // "Привет, DOM!"
// //
// // 3. Выведи найденный элемент
// // в console.log().

// const title = document.querySelector('h1');

// title.textContent = 'Привет, DOM!';

// console.log(title);

// //! 1. Найди <p> по классу.
// //
// // 2. Измени текст на:
// //
// // "Новый текст"
// //
// // 3. Измени цвет текста на синий.
// //
// // 4. Добавь класс "active".
// //
// // 5. Выведи элемент в консоль.

// const text = document.querySelector('.text');
// text.textContent = 'Новый текст';
// text.style.color = 'blue';
// text.classList.add('active');

// console.log(text);

// //! 1. Найди h1.
// // 2. Найди кнопку.
// // 3. При клике на кнопку
// //    измени текст h1
// //    на
// //    "DOM работает!"

// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     title.textContent = 'DOM работает!';
// });

// //! 1. При нажатии "+" увеличивай число на 1.
// //
// // 2. При нажатии "-" уменьшай число на 1.
// //
// // 3. Значение должно изменяться в h1.
// //
// // Пример:
// //
// // 0
// // ↓ +
// // 1
// // ↓ +
// // 2
// // ↓ -
// // 1

// const title = document.querySelector('h1');
// const plus = document.querySelector('.plus');
// const minus = document.querySelector('.minus');

// let counter = 0;

// plus.addEventListener('click', () => {
//     counter++;
//     title.textContent = counter;
// });

// minus.addEventListener('click', () => {
//     counter--;
//     title.textContent = counter;
// });

// //! 1. Найди input, button и h2.
// //
// // 2. При клике на кнопку:
// //
// //    - возьми текст из input;
// //    - выведи его в h2.
// //
// // Пример:
// //
// // input:
// // Alex
// //
// // ↓ нажали кнопку
// //
// // h2:
// // Alex

// const input = document.querySelector('input');
// const button = document.querySelector('button');
// const text = document.querySelector('h2');

// button.addEventListener('click', () => {
//     const value = input.value;
//     text.textContent = value;
// });

//! 1. Найди:
//
//    - input
//    - button
//    - ul
//
// 2. При клике на кнопку:
//
//    - получи текст из input;
//    - создай новый элемент <li>;
//    - запиши в него текст из input;
//    - добавь <li> в <ul>;
//    - очисти input.
//

const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    if (input.value) {
        const listItem = document.createElement('li');
        listItem.textContent = input.value;
        list.append(listItem);
        input.value = '';
    }
});

// ======================
// Пример
// ======================
//
// input:
// Купить молоко
//
// ↓ нажали кнопку
//
// • Купить молоко
//
// ======================
//
// input:
// Позвонить маме
//
// ↓ нажали кнопку
//
// • Купить молоко
// • Позвонить маме
//
// ======================
// Дополнительно (не обязательно)
//
// Если input пустой,
// ничего не добавляй.
