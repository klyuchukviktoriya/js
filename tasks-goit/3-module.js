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
// calculateEngravingPrice("JavaScript is in my blood", 10)
