//! Получи список пользователей.
//
// Затем выведи в консоль
// только их имена.
const URL_USERS = 'https://jsonplaceholder.typicode.com/users';

async function getUsers() {
    try {
        const response = await fetch(URL_USERS);
        const users = await response.json();
        users.forEach((obj) => console.log(obj.name));
    } catch (error) {
        console.log(error);
    }
}
getUsers();

//! Получи список пользователей.
//
// Верни массив только из email.
//
async function getEmails() {
    try {
        const response = await fetch(URL_USERS);
        const users = await response.json();

        return users.map((obj) => obj.email);
    } catch (error) {
        console.log(error);
    }
}

getEmails().then((result) => console.log(result));

// [
//   "Sincere@april.biz",
//   "Shanna@melissa.tv",
//   ...
// ]

//! Получи список пользователей.
//
// Найди пользователя,
// у которого id === 5.
//
// Верни объект этого пользователя.
//
// Проверка:
//
// getUserById().then(console.log);
//
// Должен вывестись объект пользователя с id = 5.

async function getUserById() {
    try {
        const response = await fetch(URL_USERS);
        const users = await response.json();
        return users.find((obj) => obj.id === 5);
    } catch (error) {
        console.log(error);
    }
}

getUserById().then((user) => console.log(user));

//! Получи список пользователей.
//
// Верни массив,
// состоящий только из имен пользователей,
// у которых компания называется "Romaguera-Crona".
async function getUsersByCompany() {
    try {
        const data = await fetch(URL_USERS);
        const users = await data.json();
        return users
            .filter((obj) => obj.company['name'] === 'Romaguera-Crona')
            .map((user) => user.name);
    } catch (error) {
        console.log(error);
    }
}
getUsersByCompany().then((user) => console.log(user));

// Ожидаемый результат:
//
// ["Leanne Graham"]

//! Получи список пользователей.
//
// Верни только тех пользователей,
// у которых адрес находится в городе "McKenziehaven".

async function getUsersFromCity() {
    try {
        const data = await fetch(URL_USERS);
        const users = await data.json();
        return users.filter((obj) => obj.address['city'] === 'McKenziehaven');
    } catch (error) {
        console.log(error);
    }
}
getUsersFromCity().then((user) => console.log(user));

// Ожидаемый результат:
//
// [
//   { ... },
//   ...
// ]

//! Получи список пользователей.
//
// Верни объект вида:
//
// {
//     "Romaguera-Crona": 1,
//     "Deckow-Crist": 1,
//     ...
// }
//
// То есть нужно посчитать,
// сколько пользователей работает
// в каждой компании.

async function getCompaniesStats() {
    try {
        const data = await fetch(URL_USERS);
        const users = await data.json();
        return users.reduce((acc, obj) => {
            const name = obj.company['name'];
            if (!acc[name]) {
                acc[name] = 0;
            }
            acc[name]++;
            return acc;
        }, {});
    } catch (error) {
        console.log(error);
    }
}

getCompaniesStats().then((total) => console.log(total));

//! Получи список пользователей.
// Верни массив объектов:
//
// [
//   {
//     name: "...",
//     city: "..."
//   },
//   ...
// ]

async function getUsersInfo() {
    try {
        const data = await fetch(URL_USERS);
        const users = await data.json();
        // return users.map((obj) => {
        //     const info = {};
        //     info.name = obj.name;
        //     info.city = obj.address.city;
        //     return info;
        // });
        return users.map((obj) => ({
            name: obj.name,
            city: obj.address.city,
        }));
    } catch (error) {
        console.log(error);
    }
}
getUsersInfo().then((info) => console.log(info));

//! Получи список пользователей.
//
// Верни массив имен,
// отсортированный по алфавиту.
//
async function getSortedNames() {
    try {
        const data = await fetch(URL_USERS);
        const users = await data.json();
        return users.map((obj) => obj.name).toSorted();
    } catch (error) {
        console.log(error);
    }
}
getSortedNames().then((names) => console.log(names));

// [
//   "Chelsey Dietrich",
//   "Clementina DuBuque",
//   ...
// ]
