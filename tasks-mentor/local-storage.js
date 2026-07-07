// //! ЗАДАНИЕ: localStorage-practice
// //
// // 1. Создай объект user:
// //
// // {
// //   name: 'Vika',
// //   age: 37,
// //   city: 'Odessa'
// // }
// //
// // 2. Сохрани этот объект в localStorage под ключом 'user'.
// //    Не забудь JSON.stringify().
// //
// // 3. Получи объект обратно из localStorage.
// //    Не забудь JSON.parse().
// //
// // 4. Выведи в консоль:
// //    - весь объект
// //    - имя пользователя
// //    - город пользователя
// //
// // Ожидаемо:
// // { name: 'Vika', age: 37, city: 'Odessa' }
// // Vika
// // Odessa


// localStorage.setItem('user', JSON.stringify({
//   name: 'Vika',
//   age: 37,
//   city: 'Odessa'
// }));
// const user = JSON.parse(localStorage.getItem('user'));

// console.log(user);
// console.log(user.name);
// console.log(user.city);


//! 1. Создай массив товаров.
// 2. Сохрани массив в localStorage под ключом 'products'.

// 3. Получи его обратно.

// 4. Выведи в консоль:
// весь массив;
// название второго товара;
// цену третьего товара.
const products = [
  {
    id: 1,
    name: 'Milk',
    price: 70,
  },
  {
    id: 2,
    name: 'Bread',
    price: 40,
  },
  {
    id: 3,
    name: 'Cheese',
    price: 180,
  },
];

localStorage.setItem('products', JSON.stringify(products));
const data = JSON.parse(localStorage.getItem('products'));

console.log(data);
console.log(data[1].name);
console.log(data[2].price);


console.log(JSON.parse(null)); // null