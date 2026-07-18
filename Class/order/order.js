class Product {

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

}

class Customer {
  constructor(name) {
    this.name = name;
  }
}

class Order {

  products = [];

  constructor(customer) {
    this.customer = customer;
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotal() {
    return this.products.reduce((acc, obj) => acc + obj.price, 0);
  }

  getInfo() {
    return `Покупатель ${this.customer.name}
    Товары:
    - ${this.products.map(obj => obj.name).join('\n- ')}
    Итого: ${this.getTotal()} грн`
  }
}

const customer = new Customer('Вика');

const order = new Order(customer);

order.addProduct(new Product('Milk', 80));
order.addProduct(new Product('Bread', 40));

console.log(order.getTotal());
// 120

console.log(order.getInfo());
