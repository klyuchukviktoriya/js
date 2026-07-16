# /\*

# SHOPPING CART

Создай класс ShoppingCart.

Приватное поле:

#items

=========================================

constructor()

Корзина изначально пустая.

=========================================

addItem(name, price)

Добавляет товар.

Каждый товар:

{
name,
price
}

=========================================

removeItem(name)

Удаляет товар по имени.

=========================================

hasItem(name)

true / false

=========================================

getTotal()

Возвращает сумму всех товаров.

=========================================

getItems()

Возвращает массив товаров.

=========================================

clear()

Полностью очищает корзину.

=========================================

Проверка

const cart = new ShoppingCart();

cart.addItem('Milk', 80);
cart.addItem('Bread', 40);
cart.addItem('Cheese', 200);

console.log(cart.getTotal());
// 320

cart.removeItem('Bread');

console.log(cart.getTotal());
// 280

console.log(cart.hasItem('Milk'));
// true

console.log(cart.hasItem('Bread'));
// false

console.log(cart.getItems());
// [
// { name: 'Milk', price: 80 },
// { name: 'Cheese', price: 200 }
// ]

cart.clear();

console.log(cart.getItems());
// []
