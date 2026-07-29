class Comment {
    constructor(text) {
        this.comment = text;
        this.votesQt = 0;
    }

    upvote(votesQt) {
        this.votesQt += 1;
    }

    static mergeComments(first, second) {
        return `${first}, ${second}`;
    }
}

const firstComment = new Comment('hello');
console.log(firstComment);

// проверить какому классу принадлежит экземпляром
firstComment instanceof Comment;
firstComment instanceof Object;

firstComment.upvote();
console.log(firstComment.votesQt);

firstComment.upvote();
console.log(firstComment.votesQt);

console.log(Comment.prototype.constructor === Comment);

firstComment.hasOwnProperty('comment');
firstComment.hasOwnProperty('votesQt');
firstComment.hasOwnProperty('upvote');
firstComment.hasOwnProperty('hasOwnProperty');

console.log(Comment.mergeComments('bla', 'bla'));

// Создай класс Car.
// У каждой машины должны быть:
// brand
// model
// speed
// Через constructor.
// И метод:
// drive()
// который выводит:
// BMW X5 едет со скоростью 120 км/ч
// После этого создай объект через new.
class Car {
    constructor(brand, model, speed) {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    }
    drive() {
        console.log(
            `${this.brand} ${this.model} едет со скоростью ${this.speed} км/ч`
        );
    }
}

const myCar = new Car('BMW', 'X5', 120);
// console.log(myCar);

myCar.drive();

// Создай класс BankAccount.
// Свойства:
// owner
// balance
// Методы:
// deposit(amount) → добавляет деньги на баланс
// withdraw(amount) → снимает деньги
// showBalance() → выводит:
// На счету: 1500 грн
// Создай объект и проверь методы.

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        return (this.balance += amount);
    }
    withdraw(amount) {
        return (this.balance -= amount);
    }
    showBalance() {
        console.log(`На счету: ${this.balance}`);
    }
}

const myBalance = new BankAccount('Vika', 1000);

myBalance.deposit(1500);
myBalance.withdraw(300);
myBalance.showBalance();


//! ЗАДАНИЕ
//
// Создай класс PremiumUser, который наследуется от User.
//
// PremiumUser должен принимать name и discount.
// Метод getInfo() должен возвращать:
// "Вика, скидка 20%"

class User {
    constructor(name) {
        this.name = name;
    }
}

class PremiumUser extends User {
    constructor(name, discount) {
        super(name);
        this.discount = discount;
    }

    getInfo() {
        return `${this.name}, скидка ${this.discount}%`
    }
}

const user = new PremiumUser('Вика', 20);

console.log(user.getInfo());
// Вика, скидка 20%

//! ЗАДАНИЕ
//
// DiscountProduct наследуется от Product.
// getPrice() должен возвращать цену с учётом скидки.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }
}

class DiscountProduct extends Product {
    constructor(name, price, discount) {
        super(name, price);
        this.discount = discount;
    }

    getPrice() {
        const price = super.getPrice();
        return price - price * this.discount / 100;
    }
}

const product = new DiscountProduct('Ноутбук', 2000, 20);

console.log(product.getPrice());
// 1600