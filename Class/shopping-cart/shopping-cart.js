class ShoppingCart {

  #items = [];

  addItem(name, price) {
    this.#items.push({
      name, price
    })
  }

  removeItem(name) {
    this.#items = this.#items.filter(obj => obj.name !== name);
  }

  hasItem(name) {
    return this.#items.some(obj => obj.name === name);
  }

  getTotal() {

    return this.#items.reduce((acc, item) => acc + item.price, 0);
  }

  getItems() {
    return this.#items;
  }

  clear() {
    this.#items.splice(0, this.#items.length);
  }
}


const cart = new ShoppingCart();

cart.addItem('Milk', 80);
cart.addItem('Bread', 40);
cart.addItem('Cheese', 200);

console.log(cart.getTotal());
// 320

cart.removeItem('Bread');

console.log(cart.getTotal());
// 280

console.log(cart.hasItem('Milk'));
// true

console.log(cart.hasItem('Bread'));
// false

console.log(cart.getItems());
// [
// { name: 'Milk', price: 80 },
// { name: 'Cheese', price: 200 }
// ]

cart.clear();

console.log(cart.getItems());
// []
