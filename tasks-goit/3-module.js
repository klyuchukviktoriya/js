// ! 1
// // Оголоси змінну fruits. Надай змінній fruits наступне значення: масив фруктів - рядків "apple", "plum", "pear" і "orange".

// let fruits;
// fruits = ["apple", "plum", "pear", "orange"];

// ! 2
// // Оголоси три змінні і надай кожній змінній відповідне значення, використовуючи нотацію квадратних дужок.
// // Ім'я змінної   -  	Значення змінної
// // firstElement   -  	перший елемент масиву
// // secondElement  -  	другий елемент масиву
// // lastElement	  -   останній елемент масиву

// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// ! 3
// // Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".

// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[3] = 'banana';

// ! 4
// // Функція getOrderQuantity(order) приймає один параметр order - масив рядків, які описують продукти в замовленні клієнта. Доповни код функції таким чином, щоб вона повертала число, що дорівнює кількості елементів масиву.

// function getOrderQuantity(order) {
//   return order.length;
// }

// ! 5
// // Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень. Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:
// // перший елемент - це індекс останнього елементу у масиві array
// // другий елемент - це значення останнього елементу у масиві array

// function getLastElementMeta(array) {
//   return new Array (array.length - 1, array[array.length - 1])
// }

// ! 6
// // Функція getExtremeElements(array) приймає один параметр array - масив елементів довільної довжини. Доповни код функції таким чином, щоб вона повертала масив з двох елементів - першого і останнього елементів параметра array.

// function getExtremeElements(array) {
//   return new Array (array[0], array[array.length - 1]);
// }

// ! 7
// // Функція getLength(array) очікує один параметр array - масив довільних значень. Доповни код функції так, щоб вона перетворювала масив у рядок, без роздільників, і повертала кількість символів в отриманому рядку.

// function getLength(array) {
//   return array.join('').length;
// }

// ! 8
// // Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// // Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає першим параметром рядок, що складається зі слів, розділених лише пробілами (параметр message) та другим параметром - число, що містить ціну гравірування за одне слово (параметр pricePerWord).

// // Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//   return message.split(' ').length * pricePerWord;
// }

// ! 9
// // Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// // firstTwoEls - масив із перших двох елементів
// // nonExtremeEls - масив з усіх елементів, крім першого та останнього
// // lastThreeEls - масив із трьох останніх елементів

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(fruits.length - 3);

// ! 10
// // Оголоси змінну allClients та доповни код таким чином, щоб її значенням було посилання на масив, що складається з усіх елементів масивів oldClients і newClients. Спочатку мають іти елементи з масива oldClients, а потім з newClients.
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients);

// ! 11
// // Функція getSlice(array, value) приймає два параметра:

// // array - масив довільних елементів
// // value - значення елемента масиву для пошуку
// // Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

// // порожній масив, якщо в array немає елемента зі значенням value
// // підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array

// function getSlice(array, value) {
// return array.indexOf(value) === -1 ? [] : array.slice(0, array.indexOf(value) + 1);
// }

// ! 12
// // Функція createArrayOfNumbers(min, max) приймає два параметра:

// // min - ціле число, з якого починаються обчислення
// // max - ціле число, до якого включно триватимуть обчислення
// // Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max включно.

// function createArrayOfNumbers(min, max) {
//     let arr = [];
//     for (let i = min; i <= max; i++) {
//         arr.push(i);
//     }
//     return arr;
// }

// ! 13
// // Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.

// function calculateTotalPrice(order) {
//   return order.reduce((el, acc) => acc + el, 0)
// }

// ! 14
// // Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа немає, то масив має бути пустим. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.

// function getEvenNumbers(start, end) {
//     let arr = [];
//     for (let i = start; i <= end; i++) {
//         if (i % 2 === 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// ! 15
// // Функція checkStorage(storage, item) приймає два параметри:

// // storage - масив рядків, що описує доступні товари на складі
// // item - рядок з назвою товара, наявність якого потрібно перевірити
// // Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

// // рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// // рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// // Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

// function checkStorage(storage, item) {
//   return storage.includes(item.toLowerCase()) ? `${item.toLowerCase()} is available to order!` : `Sorry! We are out of stock!`;
// }

// ! 16
// // Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.

// // Доповни код функції:

// // Створи порожній масив для зберігання нового масиву.
// // Використай цикл for для ітерації кожного елемента у array1.
// // У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// // Якщо він існує, то додай елемент до нового масиву.
// // Поверни наповнений масив спільних елементів як результат роботи функції.

// function getCommonElements(array1, array2) {
//     let arr = [];
//     for (let i = 0; i <= array1.length; i++) {
//         if (array2.includes(array1[i])) {
//             arr.push(array1[i]);
//         }
//     }
//     return arr;
// }

// ! 17
// // Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order. Використай цикл for...of для перебору масиву.
// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (item of order) {
//   sum += item;
//   }
//   return sum;
// }

// ! 18
// // Функція createReversedArray() може приймати довільну кількість аргументів. Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку. Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1]. Використовуй цикл або метод масиву toReversed(), який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.
// function createReversedArray() {
//     const arr = Array.from(arguments);
//     return arr.toReversed();
// }

// ! 19
// // Функція calculateTax(amount, taxRate) оголошує два параметри:

// // amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
// // taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
// // Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.
// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }
