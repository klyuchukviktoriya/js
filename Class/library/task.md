<!-- # /\*

# LIBRARY

Создай класс Library.

У библиотеки есть:

- name
- приватный массив #books

=========================================

constructor(name)

Создает библиотеку.

=========================================

Методы

addBook(title)

Добавляет книгу.

Если такая книга уже есть —
ничего не делать.

=========================================

removeBook(title)

Удаляет книгу.

=========================================

hasBook(title)

Возвращает true/false.

=========================================

getBooks()

Возвращает массив книг.

=========================================

showBooks()

Выводит:

Library: My Library

Books:

- Harry Potter
- Dune
- 1984

=========================================

Проверка

const library = new Library('My Library');

library.addBook('Harry Potter');
library.addBook('Dune');
library.addBook('1984');
library.addBook('Dune');

library.removeBook('1984');

console.log(library.hasBook('Dune'));
console.log(library.hasBook('1984'));

console.log(library.getBooks());

console.log(library.showBooks());

\*/ -->
