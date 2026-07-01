//! Сделай запрос на НЕСУЩЕСТВУЮЩИЙ адрес:
//
// https://jsonplaceholder.typicode.com/userss
//
// (обрати внимание: userss с двумя "s")
//
// ======================
// Что нужно сделать
// ======================
//
// 1. Выполни fetch.
// 2. Проверь response.ok.
// 3. Если response.ok === false,
//    выбрось ошибку:
//
//    throw new Error(...)
//
//
// 4. В catch выведи:
//
//    error.message
//
// ======================
// Ожидаемый вывод
// ======================
//
// HTTP Error: 404
//
// (или любое своё сообщение с кодом статуса)

const BAD_URL = 'https://jsonplaceholder.typicode.com/userss';

async function getError() {
    try {
        const response = await fetch(BAD_URL);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const users = await response.json();
        return users;
    } catch (error) {
        console.error(error.message);
    }
}

getError().then((users) => console.log(users));
