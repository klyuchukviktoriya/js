class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  getInfo() {
    return `Марка: ${this.brand}`;
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  getInfo() {
    return `${super.getInfo()}, модель: ${this.model}`;
  }
}

class ElectricCar extends Car {
  constructor(brand, model, battery) {
    super(brand, model);
    this.battery = battery;
  }

  getInfo() {
    return `${super.getInfo()}, батарея: ${this.battery} кВт`;
  }
}

const tesla = new ElectricCar(
  'Tesla',
  'Model S',
  100
);

console.log(tesla.brand);
console.log(tesla.model);
console.log(tesla.battery);
console.log(tesla.getInfo());

// Tesla
// Model S
// 100
// Марка: Tesla, модель: Model S, батарея: 100 кВт