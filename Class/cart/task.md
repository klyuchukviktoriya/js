// ЗАДАЧА: Класс корзины

/\*
Создай класс ShoppingCart.

Свойства:

- items — пустой массив.

Методы:

- addProduct(product) — добавляет товар.
- removeProduct(name) — удаляет товар по названию.
- getTotal() — возвращает общую стоимость с учётом количества.
- getInfo() — возвращает строки вида:
  ['Ноутбук — 2 шт.', 'Мышь — 3 шт.']
  \*/

const cart = new ShoppingCart();

cart.addProduct({ name: 'Ноутбук', price: 1200, quantity: 2 });
cart.addProduct({ name: 'Мышь', price: 25, quantity: 3 });

console.log(cart.getInfo());
console.log(cart.getTotal()); // 2475

cart.removeProduct('Мышь');

console.log(cart.getInfo());
console.log(cart.getTotal()); // 2400
