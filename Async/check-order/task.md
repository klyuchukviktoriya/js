// ЗАДАЧА: Проверка заказа

/\*
Функция checkOrder(order) должна возвращать Promise.

Через 1 секунду:

- если order.paid === true — resolve с текстом:
  "Заказ 15 оплачен"

- если order.paid === false — reject с ошибкой:
  "Заказ 15 не оплачен"

Напиши async-функцию showOrderStatus(order),
которая вызывает checkOrder через await
и выводит результат или ошибку через try/catch.
\*/

const order1 = { id: 15, paid: true };
const order2 = { id: 20, paid: false };

function checkOrder(order) {
// Твоё решение
}

async function showOrderStatus(order) {
// Твоё решение
}

showOrderStatus(order1);
// Заказ 15 оплачен

showOrderStatus(order2);
// Заказ 20 не оплачен
