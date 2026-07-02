// ! 1 Practice Task 🛠️
// Task:
// Look at the following JavaScript code. One of these code blocks will execute perfectly, while the other will throw a TypeError.

// Block A:

// JavaScript
// const user = { name: "Alex" };
// user.name = "Sam";
// Block B:

// JavaScript
// const user = { name: "Alex" };
// user = { name: "Sam" };
// ! ошибка в блоке B потому что тут попытка, присвоить новое значение переменной user, объявленной через const, а не обращение к свойству объекта user как в блоке A

// ! 2 Practice Task 🛠️
// Task:
// Predict the output of the following console statements and explain why JavaScript behaves this way during type coercion:

// JavaScript
// console.log(true + false);
// console.log("12" / 3);
// console.log("number" + 15)

// ! 3
// Что происходит под капотом, когда JS выполняет сравнение 5 == "5", и почему результат 5 === "5" будет другим?
// !  в первом случае будет приведение типов и строка приведётся к числу, что даст нам 5 == 5 // true
// ! при строгом - будет false потому что типы данных разные

// ! 4
// Practice Task 🛠️
// Task:
// Predict the output of the following console statements and explain why JavaScript behaves this way during type coercion:

// JavaScript
// console.log(true + false);
// console.log("12" / 3);
// console.log("number" + 15);
// What values will be printed in the console for each of these three lines?

//!  1 // потому что при выполнении математических операций все пытается привестись к числу, исключение знак + при наличии строки как одного из операндов.
//! и тут true приведется к 1, а false приведется к 0, получим 1 + 0 = 1
//! 4 // описала выше почему. тут 12 / 3 = 4
//! number15 // описала выше, тут исключение и 15 приведется к строке и произойдет конкатенация

// ! 5
// В JavaScript функцию можно объявить разными способами. Два самых популярных — это Function Declaration (объявление функции) и Function Expression (функциональное выражение).

// JavaScript
// // Способ А
// function greet() {
//   return "Hello!";
// }

// // Способ Б
// const greet = function() {
//   return "Hello!";
// };
// В чем заключается главное практическое различие между этими двумя способами, если говорить о том, в каком месте кода мы можем вызвать эти функции? Как называется механизм в JS, который это обеспечивает?

//! declaration имеет hoisting, то есть она всплывает и мы ее можем вызвать ее до инициализации

// ! 6
// Task:
// Look at this code where we have both a Function Declaration and a Function Expression. Predict what will happen when this script runs.

// JavaScript
// printMessage();
// showError();

// function printMessage() {
//   console.log("Success!");
// }

// const showError = function() {
//   console.log("Error occurred!");
// };

//! выведется только Success!, потому что вызов функция showError приведет к ошибке, так как это function expression

//! 7
// // Task 1: Reference vs Value (Variables & Data Types) 🔄
// // Context: You are building a user profile system. You need to fix a bug where changing a temporary copy of a user profile accidentally overwrites the original profile.

// // JavaScript
// // 1. You have an original user object
// const originalUser = {
//     id: 101,
//     username: 'coder_99',
//     status: 'active',
// };

// // TODO: Create a copy of 'originalUser' into a new variable named 'updatedUser'.
// // Ensure that modifying 'updatedUser' does NOT change 'originalUser'.
// // (Hint: Think about how objects are copied by reference vs value)

// const updatedUser = originalUser; // Your code here

// // Test your solution:
// updatedUser.status = 'offline';

// console.log("Original status (should be 'active'):", originalUser.status);
// console.log("Updated status (should be 'offline'):", updatedUser.status);
// ! 8 Task 2: The Formatter (Strings & Template Literals) 🧵
// // Context: You are creating a notification generator for an e-commerce app. You need to construct a multi-line message using variables.

// // JavaScript
// function generateReceipt(customerName, itemName, price, quantity) {
//     // TODO: Use a template literal (backticks) to return a multi-line string.
//     // The string must exactly match this format (replacing variables inside ${}):
//     // Hello, [customerName]!
//     // You ordered: [quantity]x "[itemName]"
//     // Total price: $[price * quantity]
//     // Your code here
//     return `
//     Hello, ${customerName}!
//     You ordered: ${quantity}x "${itemName}"
//     Total price: $${price * quantity}`;
// }

// // Test your solution:
// console.log(generateReceipt('Alice', 'Wireless Headphones', 49.99, 2));

//! 9
// // Task 3: Secret Code Guard (Functions & Operators) 🛡️
// // Context: Write a function that acts as a simple security gate. It checks if the entered password matches the secret system password.

// // JavaScript
// // TODO: Write a Function Declaration named 'checkAccess'
// // 1. It should take one parameter: 'enteredPassword'
// // 2. Inside, declare a constant 'SYSTEM_PASSWORD' with any string value you like.
// // 3. Use a strict comparison operator to check if 'enteredPassword' matches 'SYSTEM_PASSWORD'.
// // 4. Return true if they match, and false otherwise.

// // Your code here
// function checkAccess(enteredPassword) {
//     const SYSTEM_PASSWORD = 'your_secret_password';
//     return SYSTEM_PASSWORD === enteredPassword;
// }

// // Test your solution:
// console.log(checkAccess('wrong_password')); // should return false
// console.log(checkAccess('your_secret_password')); // should return true

//! 10
// Что выведет в консоль следующий код и почему?

// JavaScript
// console.log("яблоко" && "банан");
// console.log("яблоко" || "банан");
//! !сначала банан, потому что вернет последний истинный, а во втором яблоко, потому что первое истинное

// ! 11
// // У нас есть две строки с именами пользователей, которые ввели их в форму регистрации с ошибками:
// // Какие два метода строк нужно применить к этим переменным, чтобы привести их к одинаковому стандартному виду "alex" (без пробелов и в нижнем регистре)? Можно ли вызвать эти методы цепочкой один за другим для name1?

// const name1 = '  alex  ';
// const name2 = 'ALEX';

// name1.trim();
// name2.toLowerCase();

// ! 12
// The Smart Traffic Light 🚦 (Branching & Logic)
// Context: You are programming a traffic light system for a busy intersection. The light changes based on the color and whether an emergency vehicle (like an ambulance) is approaching.

// // JavaScript
// function getTrafficAction(color, isEmergencyVehicle) {
//     // TODO: Write the logic using if/else or switch.
//     // 1. If 'isEmergencyVehicle' is true, ALWAYS return "Clear the road immediately!" (regardless of color).
//     // 2. If it's not an emergency, check the color:
//     //    - "green" -> return "Go!"
//     //    - "yellow" -> return "Prepare to stop"
//     //    - "red" -> return "Stop!"
//     //    - Any other color -> return "Invalid color"

//     // Your code here
//     if (isEmergencyVehicle) {
//         return 'Clear the road immediately!';
//     } else {
//         switch (color) {
//             case 'red':
//                 return 'Stop!';
//             case 'yellow':
//                 return 'Prepare to stop';
//             case 'green':
//                 return 'Go!';
//             default:
//                 return 'Invalid color';
//         }
//     }
// }

// // Test your solution:
// console.log(getTrafficAction('red', false)); // Should be: "Stop!"
// console.log(getTrafficAction('green', true)); // Should be: "Clear the road immediately!"
// console.log(getTrafficAction('blue', false)); // Should be: "Invalid color"
// ! 13
// //  Task 2: VIP Guest Searcher 🔍 (String Methods & Loops)
// // Context: You have a list of guests formatted as a single string. You need to check if a specific person is on the list, ignoring any accidental spaces or wrong casing.

// // JavaScript
// function isGuestInvited(guestList, targetGuest) {
//     // TODO: Fix the targetGuest string first: remove spaces and make it lowercase.
//     // Then check if the guestList contains this cleaned name.
//     // Hint: Use string methods we discussed!
//     // Your code here
//     return guestList.includes(targetGuest.trim().toLowerCase());
// }

// // Test your solution:
// const list = 'alex, john, mary, kate';

// console.log(isGuestInvited(list, '  ALEX  ')); // Should return: true
// console.log(isGuestInvited(list, '  MarY ')); // Should return: true
// console.log(isGuestInvited(list, 'pete')); // Should return: false

// ! 14
// //  The Countdown Multiplier 🔢 (Loops)
// // Context: Write a function that takes a starting number and multiplies all numbers from that starting number down to 1.

// function multiplyCountdown(start) {
//     let result = 1;

//     // TODO: Write a 'for' loop that starts at 'start',
//     // counts down to 1 (inclusive), and multiplies 'result' by the current loop variable.

//     // Your code here
//     for (let i = start; i >= 1; i--) {
//         result *= i;
//     }

//     return result;
// }

// // Test your solution:
// console.log(multiplyCountdown(4)); // Should be: 24 (4 * 3 * 2 * 1)
// console.log(multiplyCountdown(5)); // Should be: 120 (5 * 4 * 3 * 2 * 1)

// ! 15
// // The Discount Calculator 🛍️
// // Контекст: Мы пишем систему расчета стоимости заказа для интернет-магазина. Сумма скидки зависит от того, является ли клиент VIP-пользователем, или от общей суммы покупки.

// function calculateFinalPrice(totalAmount, isVip) {
//     // TODO: Напиши логику:
//     // 1. Если 'isVip' равен true, то финальная цена — это ВСЕГДА totalAmount минус $20.
//     //    (Если сумма стала меньше 0, верни 0).
//     // 2. Если 'isVip' равен false, проверь общую сумму (totalAmount):
//     //    - если сумма >= 100 -> верни totalAmount минус 10% скидки.
//     //    - если сумма < 100 -> верни исходный totalAmount (без скидки).

//     // Твой код здесь
//     if (isVip) {
//         return totalAmount - 20 < 0 ? 0 : totalAmount - 20;
//     } else {
//         return totalAmount >= 100
//             ? totalAmount - totalAmount * 0.1
//             : totalAmount;
//     }
// }

// // Проверка работы функции:
// console.log(calculateFinalPrice(120, false)); // Ожидается: 108 (120 - 10%)
// console.log(calculateFinalPrice(50, true)); // Ожидается: 30 (50 - 20)
// console.log(calculateFinalPrice(80, false)); // Ожидается: 80 (без скидки)

// ! 16
// The Even Sum ➕
// Контекст: Напишите функцию, которая суммирует только четные числа от 1 до заданного числа max (включительно).

// JavaScript
function sumEvenNumbers(max) {
    let sum = 0;

    // TODO: Напишите цикл 'for', который начинается с 1 и идет до 'max' (включительно).
    // Внутри цикла проверяйте, является ли текущее число четным.
    // Если да — добавляйте его к переменной 'sum'.
    // Подсказка: используйте оператор остатка от деления (%) для проверки на четность.

    // Ваш код здесь
    for (let i = 0; i <= max; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

// Проверка работы функции:
console.log(sumEvenNumbers(6)); // Ожидается: 12 (2 + 4 + 6)
console.log(sumEvenNumbers(3)); // Ожидается: 2 (только число 2)
