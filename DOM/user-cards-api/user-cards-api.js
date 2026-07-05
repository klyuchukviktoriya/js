/*
ЗАДАНИЕ: user-cards-api

Сделай страницу пользователей.

API:
https://jsonplaceholder.typicode.com/users

Нужно:
- при загрузке страницы получить пользователей;
- вывести карточки пользователей;
- в карточке показать:
  - name
  - email
  - city
  - company name

Дополнительно:
- пока данные грузятся — показать "Loading...";
- если ошибка — показать сообщение об ошибке;
- добавить input для поиска по имени;
- поиск должен фильтровать уже загруженных пользователей, без нового запроса.

HTML и классы придумай сама.
Алгоритм сначала построй сама.
*/
const URL = 'https://jsonplaceholder.typicode.com/users';
const container = document.querySelector('.container');
const input = document.querySelector('.input');

async function getUsers() {
    try {
        const res = await fetch(URL);
        if (!res.ok) {
            throw new Error(`Error with status: ${res.status}`);
        }
        const users = await res.json();
        let html = '';
        function addHTML(item) {
            html += `<ul>
                <li>Name: ${item.name}</li>
                <li>Email: ${item.email}</li>
                <li>City: ${item.address.city}</li>
                <li>Company: ${item.company.name}</li>
             </ul>`;
        }
        users.forEach(addHTML);

        input.addEventListener('input', () => {
            let search = input.value.toLowerCase().trim();
            html = '';
            const filteredUsers = users.filter((obj) =>
                obj.name.toLowerCase().includes(search)
            );

            filteredUsers.forEach(addHTML);
            container.innerHTML = html;
        });
        container.innerHTML = html;
    } catch (error) {
        console.error(error.message);
    }
}
getUsers();
