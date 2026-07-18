class Warehouse {
  products = [];

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    this.products = this.products.filter(item => item !== product);

  }

  hasProduct(product) {
    return this.products.includes(product)
  }
}

class Courier {

  pickUpProduct(warehouse, product) {
    if (warehouse.hasProduct(product)) {
      warehouse.removeProduct(product);
    }
  }

  deliverProduct(warehouse, customer, product) {
    if (warehouse.hasProduct(product)) {
      warehouse.removeProduct(product);
      customer.receiveProduct(product);
    }
  }
}

class Customer {
  products = [];

  constructor(name) {
    this.name = name;
  }

  receiveProduct(product) {
    this.products.push(product);
  }
}


const warehouse = new Warehouse();

warehouse.addProduct('Ноутбук');
warehouse.addProduct('Мышка');
warehouse.addProduct('Клавиатура');

const courier = new Courier();
const customer = new Customer('Вика');

courier.deliverProduct(
  warehouse,
  customer,
  'Ноутбук'
);

console.log(warehouse.products);
// ['Мышка', 'Клавиатура']

console.log(customer.products);
// ['Ноутбук']
