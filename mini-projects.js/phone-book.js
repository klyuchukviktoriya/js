// Реализуй функцию createPhoneBook().
//
// Методы:
//
// add(name, phone)
// find(name)
// remove(name)
// getAll()

function createPhoneBook() {
    //! arrays
    // const book = [];
    // return {
    //     add(name, phone) {
    //         const userArr = [];
    //         userArr.push(name, phone);
    //         book.push(userArr);
    //     },
    //     find(name) {
    //         const user = book.find((arr) => arr[0] === name);
    //         if (user !== undefined) {
    //             return user[1];
    //         }
    //     },
    //     remove(name) {
    //         const index = book.findIndex((arr) => arr[0] === name);
    //         if (index !== -1) {
    //             book.splice(index, 1);
    //         }
    //     },
    //     getAll() {
    //         return Object.fromEntries(book);
    //     },
    // };
    //! objects
    const user = {};
    return {
        add(name, phone) {
            user[name] = phone;
        },
        find(name) {
            return user[name];
        },
        remove(name) {
            delete user[name];
        },
        getAll() {
            return user;
        },
    };
}

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
