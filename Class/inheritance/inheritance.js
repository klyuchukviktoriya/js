class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getInfo() {
    return `${this.name} получает ${this.salary}`;
  }
}

class Developer extends Employee {
  constructor(name, salary, language) {
    super(name, salary);
    this.language = language;
  }

  getInfo() {
    return `${super.getInfo()} и пишет на ${this.language}`;
  }
}

const dev = new Developer('Вика', 50000, 'JavaScript');

console.log(dev.name); // Вика
console.log(dev.salary); // 50000
console.log(dev.language); // JavaScript

console.log(dev.getInfo()); // Вика получает 50000 и пишет на JavaScript
