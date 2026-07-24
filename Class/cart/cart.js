class ShoppingCart {

  items = [];

  addProduct(product) {
    this.items.push(product);
  }

  removeProduct(name) {
    this.items = this.items.filter(obj => obj.name !== name);
  }

  getTotal() {
    return this.items.reduce((acc, obj) => acc + obj.price * obj.quantity, 0);
  }

  getInfo() {
    return this.items.map(obj => {
      return `${obj.name} - ${obj.quantity} шт.`
    });
  }
}

const cart = new ShoppingCart();

cart.addProduct({ name: 'Ноутбук', price: 1200, quantity: 2 });
cart.addProduct({ name: 'Мышь', price: 25, quantity: 3 });

console.log(cart.getInfo());
// ['Ноутбук — 2 шт.', 'Мышь — 3 шт.']

console.log(cart.getTotal());
// 2475

cart.removeProduct('Мышь');

console.log(cart.getInfo());
// ['Ноутбук — 2 шт.']

console.log(cart.getTotal());
// 2400