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
