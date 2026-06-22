// Реализуй функцию createPhoneBook().
//
// Методы:
//
// add(name, phone)
// find(name)
// remove(name)
// getAll()

function createPhoneBook() {}

// ======================
// Проверка
// ======================

const book = createPhoneBook();

book.add('Alex', '+123');
book.add('John', '+456');
book.add('Kate', '+789');

console.log(book.find('Alex'));
// "+123"

console.log(book.find('Bob'));
// undefined

book.remove('John');

console.log(book.find('John'));
// undefined

console.log(book.getAll());
// {
//   Alex: "+123",
//   Kate: "+789"
// }
