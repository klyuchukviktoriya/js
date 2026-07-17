# /\*

# ЗАДАНИЕ: Библиотека и пользователи

Нужно создать небольшую модель библиотеки.

Будут три класса:

1. User
2. Admin
3. Library

=====================================
Класс User
=====================================

constructor(name)

Свойства:

- name
- books — пустой массив

Методы:

takeBook(book)

Добавляет название книги в массив books.

Метод ничего не возвращает.

---

returnBook(book)

Удаляет книгу из массива books.

Если такой книги нет, ничего не происходит.

Метод ничего не возвращает.

---

getInfo()

Возвращает строку:

"Вика взяла книги: JavaScript, CSS"

Если книг нет:

"Вика не взяла ни одной книги"

=====================================
Класс Admin
=====================================

Наследуется от User.

constructor(name)

Используй super().

Методы:

addBook(library, book)

Добавляет книгу в библиотеку.

---

removeBook(library, book)

Удаляет книгу из библиотеки.

=====================================
Класс Library
=====================================

constructor()

Свойства:

- books — пустой массив
- users — пустой массив

Методы:

addBook(book)

Добавляет книгу в массив books.

---

removeBook(book)

Удаляет книгу из массива books.

Если такой книги нет, ничего не происходит.

---

addUser(user)

Добавляет пользователя в массив users.

В массив должен добавляться именно объект пользователя,
а не его имя.

---

lendBook(user, book)

Выдаёт книгу пользователю.

Метод должен:

1. Проверить, есть ли книга в библиотеке.
2. Если книги нет — ничего не делать.
3. Удалить книгу из массива библиотеки.
4. Передать книгу пользователю через его метод takeBook().

---

acceptBook(user, book)

Принимает книгу обратно.

Метод должен:

1. Проверить, есть ли книга у пользователя.
2. Если книги нет — ничего не делать.
3. Удалить книгу у пользователя через returnBook().
4. Добавить книгу обратно в библиотеку.

---

getInfo()

Возвращает строку:

"В библиотеке: JavaScript, CSS"

Если книг нет:

"В библиотеке нет книг"

=====================================
Проверка
=====================================

const library = new Library();

const admin = new Admin('Игорь');
const user = new User('Вика');

library.addUser(admin);
library.addUser(user);

admin.addBook(library, 'JavaScript');
admin.addBook(library, 'CSS');
admin.addBook(library, 'HTML');

console.log(library.getInfo());
// В библиотеке: JavaScript, CSS, HTML

library.lendBook(user, 'JavaScript');
library.lendBook(user, 'CSS');

console.log(user.getInfo());
// Вика взяла книги: JavaScript, CSS

console.log(library.getInfo());
// В библиотеке: HTML

library.acceptBook(user, 'JavaScript');

console.log(user.getInfo());
// Вика взяла книги: CSS

console.log(library.getInfo());
// В библиотеке: HTML, JavaScript

admin.removeBook(library, 'HTML');

console.log(library.getInfo());
// В библиотеке: JavaScript

=====================================
Условия
=====================================

- Используй extends.
- Используй super().
- Не изменяй массив books пользователя напрямую из Library.
- Library должна вызывать методы пользователя.
- Admin должен управлять библиотекой через её методы.
- Не дублируй код без необходимости.
- Не смотри решение заранее.
  \*/
