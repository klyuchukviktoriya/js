let products = [
  { id: 1, name: 'Телефон', price: 1000 },
  { id: 2, name: 'Наушники', price: 300 },
  { id: 3, name: 'Ноутбук', price: 2000 },
];

const list = document.querySelector('.list');
const input = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-button');

function renderProducts(products) {
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

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const id = Number(e.target.dataset.id);
    products = products.filter((obj) => obj.id !== id);
    renderProducts(products);
  }
});

searchBtn.addEventListener('click', () => {
  const searchQuery = input.value.toLowerCase().trim();

  if (searchQuery) {
    const shownProducts = products.filter((obj) =>
      obj.name.toLowerCase().includes(searchQuery)
    );

    if (shownProducts.length === 0) {
      list.innerHTML = `<li>Товары не найдены</li>`;
    } else {
      renderProducts(shownProducts);
    }

  } else {
    renderProducts(products);
  }

  input.value = '';

});

renderProducts(products);
