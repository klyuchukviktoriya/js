class User {

  books = [];

  constructor(name) {
    this.name = name;
  }

  takeBook(book) {
    this.books.push(book);
  }

  returnBook(book) {
    this.books = this.books.filter(item => item !== book);
  }

  getInfo() {
    if (this.books.length === 0) {
      return `${this.name} не взяла ни одной книги`;
    } else {
      return `${this.name} взяла книги: ${this.books.join(', ')}`
    }
  }
}


class Admin extends User {

  constructor(name) {
    super(name);
  }

  addBook(library, book) {
    library.addBook(book);
  }

  removeBook(library, book) {
    library.removeBook(book);
  }

  giveBook(library, user, book) {
    library.lendBook(user, book);
  }
}

class Library {

  books = [];
  users = [];

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    this.books = this.books.filter(item => item !== book);
  }

  addUser(user) {
    this.users.push(user);
  }

  lendBook(user, book) {
    if (this.books.includes(book)) {
      this.removeBook(book)
      user.takeBook(book);
    }
  }

  acceptBook(user, book) {
    if (user.books.includes(book)) {
      user.returnBook(book);
      this.addBook(book);
    }
  }

  getInfo() {
    if (this.books.length === 0) {
      return `В библиотеке нет книг`;
    } else {
      return `В библиотеке: ${this.books.join(', ')}`;
    }
  }
}

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

library.addBook('Harry Potter');

admin.giveBook(
  library,
  user,
  'Harry Potter'
);

console.log(user.books);
// [ 'CSS', 'Harry Potter' ]

console.log(library.books);
// [ 'JavaScript' ]