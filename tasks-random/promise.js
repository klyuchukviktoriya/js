// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => {
//         console.log(response);
//         return response.json();
//     })
//     .then((json) => console.log(json))
//     .catch((error) =>
//         // console.error(error)
//         console.log(error.message)
//     );

// const getData = (url) =>
//     new Promise((resolve, reject) =>
//         fetch(url)
//             .then((response) => response.json())
//             .then((json) => resolve(json))
//             .catch((error) => reject(error))
//     );

// getData('https://jsonplaceholder.typicode.com/todos/1')
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error.message));

// // async function returnPromise () {
// //   return 'async';

// // }

// // returnPromise();

// // const myFn = async ()=> {
// //  return 'async';

// // }

// // myFn();

// // ! async await

// const url = 'https://jsonplaceholder.typicode.com/todos/1';

// const getData = async (url) => {
//     const data = await fetch(url);
//     return data.json();
// };

// getData(url)
//     .then((data) => console.log(data.title))
//     .catch((error) => console.log(error.message));

// !без.then;

// const url = 'https://jsonplaceholder.typicode.com/todos/1';

// const getData = async (url) => {
//     const res = await fetch(url);
//     const json = await res.json();
//     return json;
// };

// try {
//     const data = await getData(url);
//     console.log(data.title);
// } catch (error) {
//     console.log(error.message);
// }

// const timerPromise = () =>
//     new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));

// async function tp() {
//     console.log('timer starts');
//     const timeStarts = performance.now();
//     await timerPromise();
//     const timeEnds = performance.now();
//     console.log('timer ends', timeEnds - timeStarts);
// }

// tp();

// // ! задача
// // Создай функцию getUser.
// // Она должна:
// // быть async
// // принимать id
// // делать запрос:
// // https://jsonplaceholder.typicode.com/users/ID
// // получать данные через await
// // выводить в консоль:
// // имя пользователя
// // email
// // Пример вызова:
// // getUser(3);

// const getUser = async (id) => {
//     try {
//         const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//         const res = await fetch(url);
//         const data = await res.json();
//         console.log(data.name, data.email);
//     } catch (error) {
//         console.log(error.message);
//     }
// };
// getUser(3);

// // ! задача 2
// // Сделай функцию getPosts.
// // Она должна:
// // быть async
// // получать посты с:
// // https://jsonplaceholder.typicode.com/posts
// // вывести в консоль:
// // только первые 5 постов
// // только их title

// const getPosts = async () => {
//     try {
//         const url = 'https://jsonplaceholder.typicode.com/posts';
//         const res = await fetch(url);
//         const data = await res.json();
//         const title = data.slice(0, 5).forEach((el) => console.log(el.title));
//     } catch (error) {
//         console.log(error.message);
//     }
// };
// getPosts();

// // Создай Promise.
// // Он должен успешно завершиться
// // и передать строку:
// //
// // "Hello, Promise!"
// //
// // Затем выведи эту строку в консоль через .then()

// const promise = new Promise((resolve, reject) => resolve('Hello, Promise!');
// promise.then((result) => console.log(result));
// // Ожидаемый вывод:
// // Hello, Promise!

// const promise = new Promise((resolve, reject) =>
//     reject('Something went wrong!')
// );
// promise.catch((error) => console.log(error));

// // Напиши функцию showMessage()
// // с использованием async/await,
// // чтобы в консоль вывелось:
// //
// // Hello!
// function getMessage() {
//     return new Promise((resolve) => {
//         resolve('Hello!');
//     });
// }
// async function showMessage() {
//     const message = await getMessage();
//     console.log(message);
// }
// showMessage();

// // Напиши async-функцию showUser(),
// // которая обработает ошибку
// // через try...catch
// //
// // Должно вывести:
// //
// // User not found
// function getUser() {
//     return new Promise((resolve, reject) => {
//         reject('User not found');
//     });
// }
// async function showUser() {
//     try {
//         const user = await getUser();
//         console.log(user);
//     } catch (error) {
//         console.log(error);
//     }
// }
// showUser();

// Напиши функцию delay(ms).
//
// Она должна возвращать Promise,
// который выполнится через ms миллисекунд.
//
// ======================
// Проверка
// ======================
function delay(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
}
console.log('Start');

delay(2000).then(() => {
    console.log('2 seconds passed');
});

console.log('End');

// Ожидаемый вывод:
//
// Start
// End
// (через 2 секунды)
// 2 seconds passed
