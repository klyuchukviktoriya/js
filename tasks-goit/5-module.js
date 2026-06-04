// ! 1
// // Функція makePizza повертає рядок з повідомленням клієнту.
// // Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza, а у змінній pointer було посилання на функцію makePizza.

// function makePizza() {
//     return 'Your pizza is being prepared, please wait.';
// }

// const result = makePizza();
// const pointer = makePizza;

// ! 2
// // Функція makeMessage приймає один параметр ім'я піци, що доставляється, pizzaName та повертає рядок з повідомленням клієнту.

// // Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала результат її виклику. Функції deliverPizza або makePizza будуть передаватися як колбек для makeMessage і очікувати аргументом ім'я готової піци, що доставляється.

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }

// ! 3
// // Функція makePizza має два параметри: pizzaName - ім'я піци та callback - колбек-функцію. Під час виконання, makePizza викликає цей колбек, передаючи йому pizzaName як аргумент.

// // Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName). Колбек eatPizza логує рядок "Eating pizza <назва піци>", де <назва піци> це значення параметра pizzaName.

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
// });

// ! 4
// // Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.

// // Доповни виклик метода forEach, передавши йому колбек-функцію, яка на кожній ітерації додає до totalPrice значення поточного елемента масива orderedItems.

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;

//     orderedItems.forEach((el) => (totalPrice += el));

//     return totalPrice;
// }

// ! 5
// // Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення другого параметра числа value. Якщо таких значень не буде знайдено, функція повертає порожній масив.

// // Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function filterArray(numbers, value) {
//     const arr = [];
//     numbers.forEach((el) => {
//         if (el > value) {
//             arr.push(el);
//         }
//     });
//     return arr;
// }

// ! 6
// // Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.
// // Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона використовувала неявне повернення.
// // function calculateTotalPrice(quantity, pricePerItem) {
// //   return quantity * pricePerItem;
// // }

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// ! 7
// // Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію. Також заміни колбек-функцію, передану в метод forEach(), на стрілочну функцію.
// // function calculateTotalPrice(orderedItems) {
// //   let totalPrice = 0;

// //   orderedItems.forEach(function (item) {
// //     totalPrice += item;
// //   });

// //   return totalPrice;
// // }

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//     orderedItems.forEach((item)=> {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
