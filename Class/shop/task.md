# /\*

# ЗАДАНИЕ: Онлайн-магазин

Создай два класса:

1. Product
2. DiscountProduct, который наследуется от Product.

---

## Product

constructor(name, price)

Свойства:

- name
- price

Методы:

getPrice()
Возвращает цену товара.

getInfo()
Возвращает строку:

"${name}: ${price} грн"

---

## DiscountProduct

constructor(name, price, discount)

discount — процент скидки.

Например:

20 означает скидку 20%

Используй super().

---

## Методы

Переопредели getPrice()

Он должен возвращать цену уже со скидкой.

Например:

price = 1000
discount = 20

getPrice()

↓

800

---

Переопредели getInfo()

Должно выводиться:

"Ноутбук: 800 грн (скидка 20%)"

Не дублируй вычисление цены.
Подумай, какой метод уже существует.

---

## Проверка

const laptop = new DiscountProduct(
'Ноутбук',
1000,
20
);

console.log(laptop.getPrice());

console.log(laptop.getInfo());

---

## Ожидаемый результат

800

Ноутбук: 800 грн (скидка 20%)

## Правила

✔ extends
✔ super()
✔ переопределение методов
✔ не дублировать код
✔ никаких подсказок из интернета 😄
\*/
