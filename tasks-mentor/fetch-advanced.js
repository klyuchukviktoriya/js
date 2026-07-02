const URL_USERS = 'https://jsonplaceholder.typicode.com/users';
const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts';

//! Есть два API:
//
// users:
// https://jsonplaceholder.typicode.com/users
//
// posts:
// https://jsonplaceholder.typicode.com/posts
//
// Получи оба списка.
//
// Верни массив объектов:
//
// [
//   {
//      user: "Leanne Graham",
//      posts: 10
//   },
//   ...
// ]
//
// То есть нужно посчитать,
// сколько постов написал каждый пользователь.

async function getUsersWithPostsCount() {
    try {
        // // const usersData = await fetch(URL_USERS);
        // // const postsData = await fetch(URL_POSTS);
        // const [usersData, postsData] = await Promise.all([
        //     fetch(URL_USERS),
        //     fetch(URL_POSTS),
        // ]);
        // // const users = await usersData.json();
        // // const posts = await postsData.json();
        // const [users, posts] = await Promise.all([
        //     usersData.json(),
        //     postsData.json(),
        // ]);
        const [users, posts] = await Promise.all([
            fetch(URL_USERS).then((response) => response.json()),
            fetch(URL_POSTS).then((response) => response.json()),
        ]);
        const postsByUserId = posts.reduce((acc, obj) => {
            const userId = obj.userId;
            if (!acc[userId]) {
                acc[userId] = 0;
            }
            acc[userId]++;
            return acc;
        }, {});
        return users.map((obj) => {
            return {
                user: obj.name,
                posts: postsByUserId[obj.id],
            };
        });
    } catch (error) {
        console.log(error);
    }
}
getUsersWithPostsCount().then((info) => console.log(info));

//! Напиши универсальную функцию:
//
// async function fetchJSON(url)
//
// ======================
// Что она должна делать
// ======================
//
// 1. Выполнить fetch(url).
//
// 2. Проверить response.ok.
//
// 3. Если response.ok === false,
//    выбросить ошибку:
//
//    throw new Error(`HTTP Error: ${response.status}`);
//
// 4. Если всё хорошо,
//    вернуть результат response.json().
//

async function fetchJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const users = await response.json();
        return users;
    } catch (error) {
        console.error(error.message);
    }
}

fetchJSON('https://jsonplaceholder.typicode.com/users')
    .then((users) => console.log(users.length))
    .catch((error) => console.log(error.message));

// Должно вывести:
//
// 10

// ======================
// Проверка №2
// ======================

fetchJSON('https://jsonplaceholder.typicode.com/userss')
    .then((users) => console.log(users))
    .catch((error) => console.log(error.message));

// Должно вывести:
//
// HTTP Error: 404

//! fetch-post

// Отправь нового пользователя
// на сервер.
//
// URL:
//
// https://jsonplaceholder.typicode.com/users
//
// ======================
// Что нужно сделать
// ======================
//
// Используй fetch с:
//
// method: "POST"
//
// headers:
// {
//   "Content-Type": "application/json"
// }
//
// body:
// {
//   name: "Alex",
//   age: 25
// }
//
// (body нужно преобразовать в JSON)

async function postUser() {
    try {
        const response = await fetch(URL_USERS, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Alex',
                age: 25,
            }),
        });
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error(error.message);
    }
}
postUser().then((response) => console.log(response));
// Выведи в консоль ответ сервера.

//! Напиши функцию updateUser(id, data).
//
// Она должна:
//
// 1. Отправить PUT-запрос на:
//
// https://jsonplaceholder.typicode.com/users/:id
//
// Например:
//
// https://jsonplaceholder.typicode.com/users/5
//
// 2. Проверить response.ok.
//
// 3. Если response.ok === false,
//    выбросить:
//
//    throw new Error(`HTTP Error: ${response.status}`);
//
// 4. Вернуть response.json().
//

async function updateUser(id, data) {
    try {
        const response = await fetch(`${URL_USERS}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error(error.message);
    }
}
// ======================
// Проверка
// ======================

updateUser(5, {
    name: 'Alex',
    age: 25,
})
    .then((user) => console.log(user))
    .catch((error) => console.log(error.message));

// Ожидаемый результат:
//
// {
//     id: 5,
//     name: "Alex",
//     age: 25
// }

//! fetch-patch

// Напиши функцию renameUser(id, name).
//
// Она должна:
//
// 1. Отправить PATCH-запрос на:
//
// https://jsonplaceholder.typicode.com/users/:id
//
// 2. Изменить ТОЛЬКО поле name.
//
// 3. Проверить response.ok.
//
// 4. Если response.ok === false,
//    выбросить:
//
//    throw new Error(`HTTP Error: ${response.status}`);
//
// 5. Вернуть response.json().
//
async function renameUser(id, name) {
    try {
        const response = await fetch(`${URL_USERS}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name }),
        });
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error(error.message);
    }
}

// ======================
// Проверка
// ======================

renameUser(5, 'Alex')
    .then(console.log)
    .catch((error) => console.log(error.message));

//! fetch-delete

// Напиши функцию deleteUser(id).
//
// Она должна:
//
// 1. Отправить DELETE-запрос на:
//
// https://jsonplaceholder.typicode.com/users/:id
//
// 2. Проверить response.ok.
//
// 3. Если response.ok === false,
//    выбросить:
//
//    throw new Error(`HTTP Error: ${response.status}`);
//
// 4. Вернуть строку:
//
// "User deleted"
//
const URL_USERS = 'https://jsonplaceholder.typicode.com/users';
async function deleteUser(id) {
    try {
        const res = await fetch(`${URL_USERS}/${id}`, {
            method: 'DELETE',
        });
        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status}`);
        }
        return 'User deleted';
    } catch (error) {
        console.log(error.message);
    }
}
// ======================
// Проверка
// ======================

deleteUser(5)
    .then(console.log)
    .catch((error) => console.log(error.message));

// Ожидаемый вывод:
//
// User deleted
