class Subscription {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `${this.name} - ${this.getPrice()}$`;
  }

  getPrice() {
    return this.price;
  }
}

class PremiumSubscription extends Subscription {
  constructor(name, price, discount) {
    super(name, price);
    this.discount = discount;
  }

  getPrice() {
    return this.price - (this.price * this.discount / 100);
  }

  getInfo() {
    return `${super.getInfo()} со скидкой ${this.discount}%`
  }
}

const basic = new Subscription('Music', 10);
const premium = new PremiumSubscription('Movies', 20, 20);

console.log(basic.getPrice());
// 10

console.log(basic.getInfo());
// Music — 10$

console.log(premium.getPrice());
// 16

console.log(premium.getInfo());
// Movies — 16$ со скидкой 20%