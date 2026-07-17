# /\*

# ЗАДАНИЕ: Наследование классов

Создай два класса:

1. Employee
2. Developer, который наследуется от Employee.

---

## Требования

Класс Employee:

- constructor(name, salary)
- сохраняет name и salary
- имеет метод getInfo(), который возвращает строку:

`${this.name} получает ${this.salary}`

---

Класс Developer:

- наследуется от Employee
- constructor(name, salary, language)
- использует super(...)
- сохраняет language
- переопределяет метод getInfo(), чтобы он возвращал:

`${this.name} получает ${this.salary} и пишет на ${this.language}`

---

## После создания классов

Создай объект:

const dev = new Developer('Вика', 50000, 'JavaScript');

Проверь:

console.log(dev.name);
console.log(dev.salary);
console.log(dev.language);

console.log(dev.getInfo());

---

## Ожидаемый результат

Вика
50000
JavaScript
Вика получает 50000 и пишет на JavaScript

---

## Правила

✔ Используй extends.
✔ Используй super().
✔ Не дублируй свойства родительского класса.
✔ Не смотри в интернет 🙂
\*/
