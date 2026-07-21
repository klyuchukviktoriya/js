/\*
КОНТРОЛЬНАЯ РАБОТА: HTTP И FETCH

API:
https://jsonplaceholder.typicode.com

Важно:
JSONPlaceholder имитирует изменения.
POST, PUT, PATCH и DELETE вернут успешный ответ,
но реальные данные на сервере навсегда не изменятся.

ЧАСТЬ 1. Универсальная функция запроса

Создай async-функцию fetchJSON(url, options).

Она должна:

1. Принимать:
    - url;
    - options, по умолчанию пустой объект.

2. Отправлять запрос через fetch.

3. Проверять response.ok.

4. Если response.ok === false:
   выбрасывать ошибку с текстом:
   "Request failed: СТАТУС"

    Например:
    "Request failed: 404"

5. Если статус ответа равен 204:
   возвращать null.

6. В остальных случаях:
   возвращать результат response.json().

ЧАСТЬ 2. GET — получение всех пользователей

Создай async-функцию getUsers().

Она должна:

1. Отправить GET-запрос на:
   https://jsonplaceholder.typicode.com/users

2. Использовать fetchJSON().

3. Вернуть массив пользователей.

ЧАСТЬ 3. GET — получение одного пользователя

Создай async-функцию getUserById(id).

Она должна:

1. Принимать id пользователя.

2. Отправить GET-запрос на:
   https://jsonplaceholder.typicode.com/users/ID

3. Использовать fetchJSON().

4. Вернуть пользователя.

ЧАСТЬ 4. POST — создание поста

Создай async-функцию createPost(post).

Она должна:

1. Принимать объект post.

2. Отправить POST-запрос на:
   https://jsonplaceholder.typicode.com/posts

3. Передать:
    - method: POST;
    - заголовок Content-Type: application/json;
    - объект post в body.

4. Использовать JSON.stringify().

5. Использовать fetchJSON().

6. Вернуть созданный пост.

Для проверки передай:

{
title: 'My new post',
body: 'HTTP control work',
userId: 1
}

ЧАСТЬ 5. PUT — полная замена поста

Создай async-функцию replacePost(id, post).

Она должна:

1. Принимать id и новый объект post.

2. Отправить PUT-запрос на:
   https://jsonplaceholder.typicode.com/posts/ID

3. Передать:
    - method: PUT;
    - Content-Type: application/json;
    - объект post в body.

4. Использовать fetchJSON().

5. Вернуть результат.

Для проверки передай полный объект:

1, {
title: 'Completely replaced title',
body: 'Completely replaced body',
userId: 1,
}

ЧАСТЬ 6. PATCH — частичное изменение поста

Создай async-функцию updatePost(id, changes).

Она должна:

1. Принимать id поста и объект с изменениями.

2. Отправить PATCH-запрос на:
   https://jsonplaceholder.typicode.com/posts/ID

3. Передать:
    - method: PATCH;
    - Content-Type: application/json;
    - changes в body.

4. Использовать fetchJSON().

5. Вернуть измененный пост.

Для проверки измени только title:

1, {
title: 'Updated title'
}

ЧАСТЬ 7. DELETE — удаление поста

Создай async-функцию deletePost(id).

Она должна:

1. Принимать id поста.

2. Отправить DELETE-запрос на:
   https://jsonplaceholder.typicode.com/posts/ID

3. Использовать fetchJSON().

4. Вернуть результат запроса.

ЧАСТЬ 8. Параллельные запросы

Создай async-функцию getUserWithPosts(userId).

Она должна одновременно получить:

1. Пользователя:
   https://jsonplaceholder.typicode.com/users/USER_ID

2. Его посты:
   https://jsonplaceholder.typicode.com/posts?userId=USER_ID

Используй Promise.all().

Функция должна вернуть объект:

{
user: объект пользователя,
posts: массив его постов
}

ЧАСТЬ 9. Обработка ошибок

Создай async-функцию runControlWork().

Внутри одного try/catch последовательно:

1. Получи всех пользователей.
2. Выведи их в консоль.

3. Получи пользователя с id 1.
4. Выведи его в консоль.

5. Создай новый пост.
6. Выведи результат.

7. Полностью замени пост с id 1.
8. Выведи результат.

9. Частично измени пост с id 1.
10. Выведи результат.

11. Удали пост с id 1.
12. Выведи результат.

13. Получи пользователя с id 1 вместе с его постами.
14. Выведи результат.

В catch выведи:

console.error(error.message);

ЧАСТЬ 10. Проверка ошибки

После выполнения основной контрольной отдельно проверь ошибку.

Попробуй запросить:

https://jsonplaceholder.typicode.com/users/999999

Посмотри:

1. Какой будет response.ok.
2. Какой будет response.status.
3. Попадет ли ошибка в catch.

В конце вызови:

runControlWork();
\*/
