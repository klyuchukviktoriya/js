const URL = 'https://jsonplaceholder.typicode.com/users';

const input = document.querySelector('input');
const list = document.querySelector('.list');
const form = document.querySelector('form');

let users = [];

async function getUsers() {
  try {
    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error(`Failed with status: ${res.status}`);
    }

    users = await res.json();

    renderUsers(users);
  } catch (error) {
    console.error(error.message);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const value = input.value.toLowerCase().trim();

  if (value) {
    const filtered = users.filter((obj) =>
      obj.name.toLowerCase().includes(value)
    );

    if (filtered.length === 0) {
      renderMessage(value);
    } else {
      renderUsers(filtered);
    }

    input.value = '';
  } else {
    input.value = '';

    renderUsers(users);
  }
});

function renderUserCard(obj) {
  return `<li>
            <p>Name: ${obj.name}</p>
            <p>Email: ${obj.email}</p>
            <p>Company: ${obj.company.name}</p>
          </li>`;
}

function renderUsers(arr) {
  list.innerHTML = arr.map(renderUserCard).join('');
}

function renderMessage(value) {
  list.innerHTML = `<p>User ${value} not found</p>`;
}

getUsers();
