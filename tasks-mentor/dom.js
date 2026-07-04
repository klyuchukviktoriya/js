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
//    - input
//    - button
//    - ul
// 2. При клике на кнопку:
//    - получи текст из input;
//    - создай новый элемент <li>;
//    - запиши в него текст из input;
//    - добавь <li> в <ul>;
//    - очисти input.
//
// ======================
// Дополнительно (не обязательно)
//
// Если input пустой, ничего не добавляй.

const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    if (!input.value.trim()) {
        input.classList.add('input-error');
        input.value = '';
    } else {
        const listItem = document.createElement('li');
        // listItem.addEventListener('click', () => listItem.remove();
        listItem.textContent = input.value.trim();
        list.append(listItem);
        input.value = '';
        input.classList.remove('input-error');
    }
});
list.addEventListener('click', (event) => {
    console.log(event.target.tagName);
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});

//! ======================
// Доработай существующий код
// ======================
// Сейчас при клике на кнопку создаётся новый <li>.
// Сделай так, чтобы:
// При клике на любой <li> удалялся именно этот <li>.
// ======================
// Важно
// ======================
//
// Новые <li>, которые создаются после нажатия кнопки, тоже должны удаляться.

//! У тебя уже есть код, который добавляет новые <li>.
// ======================
// Что нужно изменить
// ======================
// Сейчас обработчик клика висит на каждом <li>.
// Удали этот обработчик.
// Вместо этого:
// 1. Повесь ОДИН обработчик на <ul>.
// 2. При клике на любой <li> должен удаляться именно этот <li>.
// ======================
// Важно
// ======================
// Новые <li>, которые будут добавляться позже, тоже должны удаляться.
// Не нужно вешать обработчик на каждый новый <li>.
// Используй только:
// - addEventListener
// - event.target
// - remove()
//! Добавь новую возможность.
// Если input пустой:
// 1. Не создавать новый <li>.
// 2. Сделать рамку input красной.
// Если пользователь ввёл текст:
// 1. Создать <li>.
// 2. Очистить input.
// 3. Вернуть рамку обратно.
