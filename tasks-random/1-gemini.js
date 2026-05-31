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
// Task 3: Secret Code Guard (Functions & Operators) 🛡️
// Context: Write a function that acts as a simple security gate. It checks if the entered password matches the secret system password.

// JavaScript
// TODO: Write a Function Declaration named 'checkAccess'
// 1. It should take one parameter: 'enteredPassword'
// 2. Inside, declare a constant 'SYSTEM_PASSWORD' with any string value you like.
// 3. Use a strict comparison operator to check if 'enteredPassword' matches 'SYSTEM_PASSWORD'.
// 4. Return true if they match, and false otherwise.

// Your code here
function checkAccess(enteredPassword) {
    const SYSTEM_PASSWORD = 'your_secret_password';
    return SYSTEM_PASSWORD === enteredPassword;
}

// Test your solution:
console.log(checkAccess('wrong_password')); // should return false
console.log(checkAccess('your_secret_password')); // should return true
