class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  getInfo() {
    return `${this.name}: ${this.price} грн`
  }
}


class DiscountProduct extends Product {
  constructor(name, price, discount) {
    super(name, price);
    this.discount = discount;
  }

  getPrice() {
    const price = super.getPrice();
    return price - (price * this.discount / 100);
  }

  getInfo() {
    return `${this.name}: ${this.getPrice()} грн (скидка ${this.discount}%)`
  }
}

const laptop = new DiscountProduct(
  'Ноутбук',
  1000,
  20
);

console.log(laptop.getPrice());
// 800

console.log(laptop.getInfo());
// Ноутбук: 800 грн (скидка 20%)