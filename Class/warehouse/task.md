# /\*

# ЗАДАНИЕ. КУРЬЕР И СКЛАД

Есть три класса.

1. Warehouse (Склад)

Свойства:

- products = []

Методы:

- addProduct(product)
  Добавляет товар на склад.

- removeProduct(product)
  Удаляет товар со склада.

- hasProduct(product)
  Возвращает true или false.

---

2. Courier (Курьер)

Методы:

- pickUpProduct(warehouse, product)

Курьер должен:

1. Проверить, есть ли товар на складе.
2. Если есть —
   вызвать метод склада removeProduct(product).

Никаких
warehouse.products.splice(...)
или
warehouse.products = ...

Курьер делать НЕ должен.

Он работает только через методы склада.

---

3. Customer (Покупатель)

constructor(name)

Свойства:

- name
- products = []

Методы:

receiveProduct(product)

Добавляет товар покупателю.

---

Теперь усложнение.

Добавь в Courier ещё один метод:

deliverProduct(warehouse, customer, product)

Он должен:

1. Проверить, есть ли товар на складе.
2. Если товара нет — ничего не делать.
3. Если товар есть:

    warehouse.removeProduct(product);

    customer.receiveProduct(product);

---

Проверка

const warehouse = new Warehouse();

warehouse.addProduct('Ноутбук');
warehouse.addProduct('Мышка');
warehouse.addProduct('Клавиатура');

const courier = new Courier();
const customer = new Customer('Вика');

courier.deliverProduct(
warehouse,
customer,
'Ноутбук'
);

console.log(warehouse.products);
// ['Мышка', 'Клавиатура']

console.log(customer.products);
// ['Ноутбук']

=========================================
ПРАВИЛА
=========================================

❌ Нельзя обращаться к:

warehouse.products.push(...)
warehouse.products.splice(...)
customer.products.push(...)

из класса Courier.

Courier умеет только говорить другим объектам:

warehouse.removeProduct(...)
customer.receiveProduct(...)

Именно это мы сейчас и тренируем.
\*/
