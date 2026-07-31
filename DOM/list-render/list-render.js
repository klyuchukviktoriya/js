let products = [
  { id: 1, name: 'Телефон', price: 1000 },
  { id: 2, name: 'Наушники', price: 300 },
  { id: 3, name: 'Ноутбук', price: 2000 },
];

const list = document.querySelector('.list');
const input = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-button');
const addForm = document.querySelector('.product-form');
const nameInput = document.querySelector('.name-input');
const priceInput = document.querySelector('.price-input');
const filter = document.querySelector('.sort-select');
const counter = document.querySelector('.products-count');
const total = document.querySelector('.products-total');

let searchQuery = '';

function renderProducts(products) {
  counter.textContent = products.length;
  total.textContent = products.reduce((acc, obj) => acc + obj.price, 0);

  if (products.length === 0) {
    return (list.innerHTML = `<li>Товары не найдены</li>`);
  }

  list.innerHTML = products
    .map((obj) => {
      return `<li>
  <h2>${obj.name}</h2>
  <p>${obj.price} грн</p>
  <button data-id='${obj.id}'>Удалить</button>
</li>`;
    })
    .join('');
}

function addProduct() {
  const name = nameInput.value.trim();
  const price = Number(priceInput.value);
  const id = Math.floor(Math.random() * 1_000_000);

  if (!name) {
    nameInput.setAttribute('placeholder', 'Введите название товара');
    nameInput.style.borderColor = 'red';
  }

  if (price <= 0 || !price) {
    priceInput.setAttribute('placeholder', 'Цена должна быть больше 0');
    priceInput.style.borderColor = 'red';
  }

  if (name && price > 0) {
    products.push({ id, name, price });
    filterProducts();
    addForm.reset();

    nameInput.setAttribute('placeholder', 'Название');
    priceInput.setAttribute('placeholder', 'Цена');
    nameInput.style.borderColor = '';
    priceInput.style.borderColor = '';
  }
}

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addProduct();
});

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const id = Number(e.target.dataset.id);
    products = products.filter((obj) => obj.id !== id);
    filterProducts();
  }
});

searchBtn.addEventListener('click', () => {
  searchQuery = input.value.toLowerCase().trim();
  filterProducts();
  input.value = '';
});

filter.addEventListener('change', () => {
  filterProducts();
});

function filterProducts() {
  let shownProducts = products;

  if (searchQuery) {
    shownProducts = products.filter((obj) =>
      obj.name.toLowerCase().includes(searchQuery)
    );
  }

  if (filter.value === 'cheap') {
    shownProducts = shownProducts.toSorted((a, b) => a.price - b.price);
  }

  if (filter.value === 'expensive') {
    shownProducts = shownProducts.toSorted((a, b) => b.price - a.price);
  }

  renderProducts(shownProducts);
}

renderProducts(products);
