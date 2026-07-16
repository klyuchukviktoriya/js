class Library {
  name;
  #books = [];

  constructor(name) {
    this.name = name;
  }

  addBook(title) {
    if (!this.#books.includes(title)) {
      this.#books.push(title);
    }
  }

  removeBook(title) {
    this.#books = this.#books.filter(item => item !== title);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }

  getBooks() {
    return this.#books;
  }

  showBooks() {
    return `Library: ${this.name}
    Books:
     - ${this.#books.join('\n- ')}`
  }
}


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
