/*
=========================================
DATE — ШПАРГАЛКА
=========================================

Объект Date используется для работы
с датой и временем.

=========================================
1. СОЗДАТЬ ТЕКУЩУЮ ДАТУ
=========================================
*/

const date = new Date();

console.log(date);

/*
Пример:

Sun Jul 12 2026 23:15:42 GMT+0300
*/

/*
=========================================
2. ПОЛУЧИТЬ ЧАСТИ ДАТЫ
=========================================
*/

const date = new Date();

console.log(date.getFullYear()); // 2026

console.log(date.getMonth()); // 6 (июль)
console.log(date.getMonth() + 1); // 7

console.log(date.getDate()); // день месяца

console.log(date.getHours()); // часы

console.log(date.getMinutes()); // минуты

console.log(date.getSeconds()); // секунды

/*
=========================================
3. TIMESTAMP
=========================================

Количество миллисекунд
с 01.01.1970
*/

const timestamp = Date.now();

console.log(timestamp);

/*
Например:

1783894522315
*/

/*
=========================================
4. СОЗДАТЬ DATE ИЗ TIMESTAMP
=========================================
*/

const timestamp = Date.now();

const date = new Date(timestamp);

console.log(date);

/*
Или если timestamp хранится
в объекте задачи:

const date = new Date(task.createdAt);
*/

/*
=========================================
5. КРАСИВЫЙ ВЫВОД ДАТЫ
=========================================
*/

const date = new Date();

console.log(date.toLocaleDateString());

/*
Например:

12.07.2026
*/

/*
=========================================
6. КРАСИВЫЙ ВЫВОД ВРЕМЕНИ
=========================================
*/

const date = new Date();

console.log(date.toLocaleTimeString());

/*
Например:

23:15:42
*/

/*
=========================================
7. ДАТА + ВРЕМЯ
=========================================
*/

const date = new Date();

console.log(
  `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
);

/*
12.07.2026 23:15:42
*/

/*
=========================================
8. ЛОКАЛЬ
=========================================
*/

const date = new Date();

console.log(
  date.toLocaleDateString('ru-RU')
);

console.log(
  date.toLocaleDateString('en-US')
);

/*
ru-RU

12.07.2026

en-US

7/12/2026
*/

/*
=========================================
9. НАСТРОЙКА ФОРМАТА
=========================================
*/

const date = new Date();

console.log(
  date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
);

/*
12 июля 2026 г.
*/

/*
=========================================
10. ЧТО ЛУЧШЕ СОХРАНЯТЬ
=========================================

НЕ ТАК:
*/

const task1 = {
  text: 'Buy milk',
  createdAt: '12.07.2026 23:15',
};

/*
Лучше ТАК:
*/

const task2 = {
  text: 'Buy milk',
  createdAt: Date.now(),
};

/*
Почему?

Потому что потом можно вывести
дату в любом формате.
*/

/*
=========================================
11. ПОЛУЧИТЬ ДАТУ ИЗ ЗАДАЧИ
=========================================
*/

const task = {
  createdAt: Date.now(),
};

const date = new Date(task.createdAt);

console.log(date.toLocaleDateString('ru-RU'));

console.log(date.toLocaleTimeString('ru-RU'));

/*
=========================================
МИНИМУМ, КОТОРЫЙ НУЖНО ЗАПОМНИТЬ
=========================================

new Date()

Date.now()

new Date(timestamp)

toLocaleDateString()

toLocaleTimeString()

Этого достаточно для большинства
небольших проектов.
*/