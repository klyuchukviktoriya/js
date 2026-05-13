// ! 1
// // Доповни код функції checkAge(age) так, щоб функція повертала рядок "You are an adult", якщо значення параметра age більше або дорівнює 18. Використай у тілі функції інструкцію if для перевірки значення age.
// function checkAge(age) {
// if (age >= 18) {
//   return 'You are an adult'
// }
// }

// ! 2
// // Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// // available - доступна кількість товарів на складі
// // ordered - кількість одиниць товару в замовленні
// // Використовуючи розгалуження, доповни код функції таким чином, щоб:

// // Якщо в замовленні вказане число, яке перевищує доступну кількість товарів на складі, функція повертає рядок "Not enough goods in stock!"
// // В іншому випадку функція повертає рядок "Order is processed, our manager will contact you"

// function checkStorage(available, ordered) {
//   if (available < ordered) {
//     return 'Not enough goods in stock!';
//   } else {
//     return 'Order is processed, our manager will contact you';
//   }
// }

// ! 3
// // Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// // available - доступна кількість товарів на складі
// // ordered - кількість одиниць товару в замовленні
// // Використовуючи розгалуження, доповни код функції таким чином, щоб:

// // Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, функція повертає рядок "There are no products in the order!".
// // Якщо товарів у замовленні більше, ніж їх доступно на складі, то функція повертає рядок "Your order is too large, there are not enough items in stock!".
// // В іншому випадку функція повертає рядок "The order is accepted, our manager will contact you".

// function checkStorage(available, ordered) {
// if (ordered === 0) {
//   return 'There are no products in the order!';
// } else if ( ordered > available){
//   return 'Your order is too large, there are not enough items in stock!';
// }
//   return  'The order is accepted, our manager will contact you';
// }

// ! 4
// // Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим паролем адміністратора (correctPassword) і повертає рядок з повідомленням про результат.

// // Використовуючи тернарний оператор, доповни функцію таким чином, щоб:

// // Якщо значення password і correctPassword збігаються, функція повертала рядок "Access granted"
// // В іншому випадку, функція повертала рядок "Access denied, wrong password!"

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//  return password === correctPassword ? 'Access granted' : 'Access denied, wrong password!';
// }

// ! 5
// // Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, або повідомлення про неправильний тип передплати.
// // Якщо значення параметра type — це рядок:
// // "starter" — ціна передплати 0 кредитів.
// // "professional" — ціна передплати 20 кредитів.
// // "organization" — ціна передплати 50 кредитів.
// // Для будь-якого іншого значення параметра type повертається рядок "Invalid subscription type!".
// // Використай оператор switch для розв'язання цієї задачі!

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case 'starter':
//      return 0;
//       break;
//     case 'professional':
//       return 20;
//       break;
//     case 'organization':
//      return  50;
//       break;
//       default:
//       return 'Invalid subscription type!';
//   }
// }

// ! 6
// // Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// // number - число, входження якого перевіряється
// // start - початок числового проміжку
// // end - кінець числового проміжку
// // Використовуючи оператор &&, доповни функцію isNumberInRange таким чином, щоб вона повертала результат входження number у числовий проміжок від start до end включно. Тобто число повинно бути одночасно і більшим або дорівнювати start, і меншим або дорівнювати end. Результатом виклику функції має бути буль true або false.

// function isNumberInRange(start, end, number) {
//   return number >= start && number <= end ? true : false;
// }

// ! 7
// // Функція checkAccess(subType) перевіряє, чи може користувач отримати доступ до контенту. Перевірка відбувається за типом передплати. Використовуючи оператор "АБО", доповни код функції так, щоб якщо значення параметра subType дорівнює рядкам "pro" або "vip", то функція повертала true і користувач отримував доступ. В іншому випадку повертала false.

// function checkAccess(subType) {
//   return subType === 'pro' || subType === 'vip' ? true : false;
// }

// ! 8
// // Функція toggleModalVisibility(isVisible) перемикає стан відображення модального вікна. У параметрі isVisible вона очікує буль true або false. Доповни код функції так, щоб вона повертала протилежне значення цього параметра.

// function toggleModalVisibility(isVisible) {
//   return !isVisible;
// }
